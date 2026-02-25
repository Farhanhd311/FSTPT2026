import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'id', 'de', 'zh', 'ru', 'fr', 'ja', 'es'],
  defaultLocale: 'en'
});
