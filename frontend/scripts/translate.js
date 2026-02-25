/**
 * Auto-Translate Script for FSTPT2026
 * 
 * Reads en.json as the source of truth and automatically translates
 * all keys to the other 7 supported languages using Google Translate.
 * 
 * Usage:
 *   npm run translate              # Translate all languages
 *   npm run translate -- --lang de # Translate only German
 *   npm run translate -- --new     # Only translate NEW keys (skip existing)
 * 
 * The script preserves the "language" section (language names) without translating.
 */

const { translate } = require('@vitalets/google-translate-api');
const fs = require('fs');
const path = require('path');

const MESSAGES_DIR = path.join(__dirname, '..', 'messages');
const SOURCE_LANG = 'en';
const TARGET_LANGS = ['id', 'de', 'zh', 'ru', 'fr', 'ja', 'es'];

// Language code mapping for Google Translate
const LANG_MAP = {
  id: 'id', de: 'de', zh: 'zh-CN', ru: 'ru', fr: 'fr', ja: 'ja', es: 'es'
};

// Keys/sections to SKIP translation (preserve as-is)
const SKIP_KEYS = ['language'];

// Parse CLI args
const args = process.argv.slice(2);
const onlyNewKeys = args.includes('--new');
const langArgIdx = args.indexOf('--lang');
const specificLang = langArgIdx !== -1 ? args[langArgIdx + 1] : null;
const targetLangs = specificLang ? [specificLang] : TARGET_LANGS;

// Rate limiting - delay between API calls to avoid being blocked
const DELAY_MS = 200;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Recursively collect all leaf paths and values from a JSON object
 */
function flattenObject(obj, prefix = '') {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (Array.isArray(value)) {
      // Translate arrays item by item
      value.forEach((item, i) => {
        if (typeof item === 'string') {
          result[`${path}[${i}]`] = item;
        }
      });
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenObject(value, path));
    } else if (typeof value === 'string') {
      result[path] = value;
    }
  }
  return result;
}

/**
 * Set a value at a nested path in an object
 */
function setNestedValue(obj, pathStr, value) {
  // Handle array notation like "structureItems[0]"
  const arrayMatch = pathStr.match(/^(.+)\[(\d+)\]$/);
  if (arrayMatch) {
    const parentPath = arrayMatch[1];
    const index = parseInt(arrayMatch[2]);
    const parts = parentPath.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) current[parts[i]] = {};
      current = current[parts[i]];
    }
    const lastKey = parts[parts.length - 1];
    if (!current[lastKey]) current[lastKey] = [];
    current[lastKey][index] = value;
    return;
  }

  const parts = pathStr.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) current[parts[i]] = {};
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}

/**
 * Get a value at a nested path in an object
 */
function getNestedValue(obj, pathStr) {
  const arrayMatch = pathStr.match(/^(.+)\[(\d+)\]$/);
  if (arrayMatch) {
    const parentPath = arrayMatch[1];
    const index = parseInt(arrayMatch[2]);
    const parent = getNestedValue(obj, parentPath);
    return parent && Array.isArray(parent) ? parent[index] : undefined;
  }

  const parts = pathStr.split('.');
  let current = obj;
  for (const part of parts) {
    if (current === undefined || current === null) return undefined;
    current = current[part];
  }
  return current;
}

/**
 * Check if a path starts with any of the skip keys
 */
function shouldSkip(pathStr) {
  return SKIP_KEYS.some(key => pathStr === key || pathStr.startsWith(key + '.'));
}

/**
 * Translate a single text string
 */
async function translateText(text, targetLang) {
  if (!text || text.trim() === '') return text;
  
  // Don't translate if it's just a number, URL, email, or technical content
  if (/^[\d\.\,\s\-\+\(\)\/\:]+$/.test(text)) return text;
  if (/^https?:\/\//.test(text)) return text;
  if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(text)) return text;
  // Don't translate Microsoft Word version strings
  if (/^Microsoft Word/.test(text)) return text;
  // Don't translate style names like 'Normal', 'Heading 1', etc.
  if (/^'[A-Za-z\s\d]+'$/.test(text)) return text;
  
  try {
    const result = await translate(text, { to: LANG_MAP[targetLang] || targetLang });
    return result.text;
  } catch (err) {
    console.warn(`  ⚠ Failed to translate "${text.substring(0, 50)}..." to ${targetLang}: ${err.message}`);
    return text; // fallback to original text
  }
}

/**
 * Main translation function
 */
async function main() {
  console.log('╔══════════════════════════════════════════════╗');
  console.log('║     FSTPT2026 Auto-Translate Script         ║');
  console.log('╚══════════════════════════════════════════════╝');
  console.log();

  // Read source file
  const sourceFile = path.join(MESSAGES_DIR, `${SOURCE_LANG}.json`);
  const sourceData = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));
  const flatSource = flattenObject(sourceData);
  
  const totalKeys = Object.keys(flatSource).filter(k => !shouldSkip(k)).length;
  console.log(`📖 Source: ${SOURCE_LANG}.json (${totalKeys} translatable keys)`);
  console.log(`🎯 Targets: ${targetLangs.join(', ')}`);
  console.log(`📋 Mode: ${onlyNewKeys ? 'NEW keys only' : 'ALL keys'}`);
  console.log();

  for (const lang of targetLangs) {
    const targetFile = path.join(MESSAGES_DIR, `${lang}.json`);
    let existingData = {};
    
    if (fs.existsSync(targetFile)) {
      existingData = JSON.parse(fs.readFileSync(targetFile, 'utf8'));
    }

    console.log(`\n🌍 Translating to ${lang.toUpperCase()}...`);

    let translated = 0;
    let skipped = 0;
    let preserved = 0;
    const result = JSON.parse(JSON.stringify(existingData)); // Clone existing

    for (const [keyPath, value] of Object.entries(flatSource)) {
      // Skip language section
      if (shouldSkip(keyPath)) {
        preserved++;
        continue;
      }

      // In --new mode, skip keys that already exist in the target
      if (onlyNewKeys && getNestedValue(existingData, keyPath) !== undefined) {
        skipped++;
        continue;
      }

      const translatedText = await translateText(value, lang);
      setNestedValue(result, keyPath, translatedText);
      translated++;

      // Progress indicator
      if (translated % 10 === 0) {
        process.stdout.write(`  ✓ ${translated} keys translated...\r`);
      }

      await sleep(DELAY_MS);
    }

    // Preserve the language section from source
    if (existingData.language) {
      result.language = existingData.language;
    } else {
      result.language = sourceData.language;
    }

    // Write result
    fs.writeFileSync(targetFile, JSON.stringify(result, null, 2) + '\n', 'utf8');
    console.log(`  ✅ ${lang}.json — ${translated} translated, ${skipped} skipped, ${preserved} preserved`);
  }

  console.log('\n🎉 Translation complete!');
}

main().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
