const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'messages');

const newKeys = {
  id: {
    timelineData: {
      item1Title: "Pengumuman Call for Paper", item2Title: "Periode Pengumpulan Full Paper",
      item3Title: "Proses Review Full Paper", item4Title: "Pengumuman Hasil Review Paper",
      item5Title: "Revisi & Pengumpulan Camera-Ready Paper", item6Title: "Registrasi Peserta & Pemakalah",
      item7Title: "Pelaksanaan Acara", item7Desc: "Convention Hall & UPT Bahasa Universitas Andalas, Padang",
      active: "AKTIF", ongoing: "BERLANGSUNG"
    },
    registrationData: {
      istsdc: "THE 5th ISTSDC 2026", istsdcSub: "Simposium Internasional",
      fstpt: "SIMPOSIUM NASIONAL FSTPT", fstptSub: "Simposium Nasional",
      student: "Mahasiswa", nonStudentEarly: "Non-Mahasiswa (Early Bird)",
      nonStudentRegular: "Non-Mahasiswa (Reguler)", addPaper: "Penambahan Makalah",
      certificateOnly: "Peserta Sertifikat Saja", untilDate: "hingga 16 Juli 2026",
      afterDate: "setelah 16 Juli 2026", studentMember: "Mahasiswa Anggota FSTPT",
      studentNonMember: "Mahasiswa Non-Anggota FSTPT", lecturerMember: "Dosen / Umum Anggota FSTPT",
      nonMember: "Non-Anggota FSTPT"
    },
    venueData: { hotelLocation: "Padang, Sumatera Barat" },
    authorGuidelineContent: {
      tocGeneral: "Petunjuk Umum", tocFormat: "Format Penulisan", tocStructure: "Struktur Makalah",
      tocBibliography: "Daftar Pustaka", tocThanks: "Ucapan Terimakasih", tocAppendix: "Lampiran",
      paperTitle: "PETUNJUK PENULISAN MAKALAH UNTUK SYMPOSIUM NASIONAL FSTPT XXIX,",
      paperDate: "07 – 08 NOVEMBER 2026",
      author1Role: "Mahasiswa magister Teknik Sipil, Fakultas Teknik",
      author2Role: "Teknik Sipil, Fakultas Teknik", author3Role: "Teknik Sipil, Fakultas Teknik",
      university: "Universitas Andalas, Padang",
      abstractTitle: "ABSTRACT",
      abstractContent: "This document consists of detailed paper writing instructions for Seminar Nasional FSTPT XXIX at Andalas University Padang. To submit a paper in this seminar, please follow the following guidelines for writing the paper. The author should read through these instructions before writing a paper. Papers that do not follow these instructions are not included in the seminar. The deadline for submission a draft of full paper is September 25, 2023. The paper will be reviewed by a reviewer team and the results will be informed through the author's email address. All accepted papers will be published in a seminar proceeding that has an ISBN and uploaded online. The best papers and presentations in the seminar will be awarded by the committee. The abstract is written in a concise and straightforward sentence and must not more than 250 words.",
      keywords: "Keywords: keyword 1, keyword 2, keyword 3, keyword 4, keyword 5",
      abstrakTitle: "ABSTRAK",
      abstrakContent: "Dokumen ini terdiri dari detail petunjuk penulisan makalah untuk ACE Conference 2023 di Universitas Andalas Padang. Untuk mengirim makalah pada seminar ini, harap diikuti petunjuk penulisan makalah berikut ini. Penulis harus membaca seluruh petunjuk ini sebelum menulis makalah. Makalah yang tidak mengikuti petunjuk ini, tidak diikutkan dalam seminar yang akan dilaksanakan. Batas akhir pengumpulan draft makalah lengkap adalah 25 September 2023. Makalah akan direview oleh tim reviewer dan hasilnya akan diinformasikan kembali melalui alamat email penulis. Semua makalah yang diterima akan di publikasikan dalam proseding seminar yang mempunyai ISBN dan diunggah secara online. Makalah dan presentasi terbaik dalam seminar akan mendapatkan penghargaan dari panitia. Abstrak ditulis dengan kalimat yang ringkas dan lugas tidak melebih dari 250 kata.",
      abstrakKeywords: "Kata Kunci: kata kunci 1, kata kunci 2, kata kunci 3, kata kunci 4, kata kunci 5",
      section1Title: "1. PETUNJUK UMUM",
      section1P1: "Petunjuk ini dibuat untuk panduan menyiapkan makalah yang layak untuk dipresentasikan dalam seminar. Penulis pertama adalah peneliti, mahasiswa S2 atau S3, sedang penulis berikutnya dapat pembimbing atau co-pembimbing atau teman dalam grup penelitian.",
      section1P2: "Penulis harus menulis makalahnya sesuai dengan petunjuk ini agar makalah tersebut dapat diterima. Makalah yang dikirim harus ditulis dengan menggunakan",
      section1P2Bold: "Microsoft Word 2003/2007/2010/2013/2019",
      section2Title: "2. FORMAT PENULISAN",
      section2_1Title: "2.1 Ketentuan Umum", section2_1Intro: "Makalah harus mengikuti format sebagai berikut:",
      format1: "Kertas A4, dengan orientasi portrait",
      format2: "Margin: Atas 3 cm, Bawah 4 cm, Kiri 3 cm, dan Kanan 3 cm",
      format3: "Tipe font adalah Times New Roman", format4: "Jumlah halaman: 6 sampai 10 halaman",
      format5: "Penulisan teks: single spaced and single column text",
      format6: "Dilarang menulis pada headers and footers",
      formatNote: "* Mohon diperiksa kembali jika ada kesalahan ketik dan ejaan. Ikuti petunjuk pengaturan format menggunakan styles Ms-Word yang telah disediakan dalam template.",
      section2_2Title: "2.2 Penggunaan Style Untuk Pengaturan",
      section2_2Intro: "Dalam file makalah ini telah disediakan style Ms-Word yang akan dipergunakan untuk pengaturan format makalah. Penulis tinggal mengklik style yang berkesesuaian untuk mendapatkan pengaturan makalah yang baik.",
      styleTitleDesc: "Ukuran font Times New Roman 16pt, bold, spasi tunggal.",
      styleAuthorDesc: "Nama penulis ditulis dalam satu baris, beri superscript angka untuk identifikasi afiliasi.",
      styleAffiliationDesc: "Informasi Jurusan/Program Studi, Fakultas, Universitas, dan Email.",
      styleAbstractDesc: "Abstract –header untuk judul dan Abstract untuk isi (satu kolom, satu paragraf).",
      styleKeyword: "Berilah maksimum lima buah kata kunci menggunakan style",
      styleKeywordBold: "'Keywords'", styleKeywordAfter: ". Hitamkan (bold) kata 'Abstrak:' sebelum kata kunci.",
      styleNormal: "Teks paragraf menggunakan style", styleNormalBold: "'Normal'",
      styleNormalAfter: " yang memberikan jarak antar paragraf.",
      styleHeading: "Pergunakan", styleH1: "'Heading 1'", styleH1After: " (HURUF KAPITAL),",
      styleH2: "'Heading 2'", styleH2After: ", dan", styleH3: "'Heading 3'",
      styleH3After: ". Nomor bab akan diberikan otomatis oleh Ms-Word.",
      section2_3Title: "2.3 Tabel dan Gambar",
      section2_3P1: "Persamaan, tabel, dan gambar harus ditempatkan diantara teks pada tempat yang sesuai dengan diskusi tabel dan gambar. Tabel harus diberi nomor urut. Judul tabel diletakkan di atas tabel.",
      tableCaption: "Tabel 1. Kondisi pelayanan atribut perjalanan",
      tableCol1: "No.", tableCol2: "Atribut perjalanan", tableCol3: "Kondisi pelayanan",
      tableRow1: "Biaya perjalanan", tableRow2: "Biaya kemacetan", tableRow3: "Tarip parkir",
      tableRow4: "Waktu perjalanan", tableRow5: "Waktu berjalan kaki",
      section2_3P2: "Gambar harus diberi nomor urut. Judul gambar diletakkan di bawah gambar. Gambar harus jelas dan mudah dibaca. Lihat Gambar 1, persamaan harus juga diberi nomor urut. Nomor diletakkan di sisi kanan dari persamaan.",
      figureCaption: "Gambar 1. Diagram seleksi makalah pada ACE 8",
      previewImage: "PRATINJAU GAMBAR",
      section3Title: "3. STRUKTUR MAKALAH",
      section3Intro: "Struktur makalah sebaiknya terdiri dari komponen-komponen utama sebagai berikut:",
      structureItems: ["Judul","Informasi penulis","Abstrak","Pendahuluan","Studi pustaka","Hasil & Pembahasan","Kesimpulan","Daftar pustaka","Ucapan terimakasih","Lampiran"],
      section4Title: "4. DAFTAR PUSTAKA",
      section4P1: "Daftar pustaka hanya berisi referensi yang dikutip dalam teks makalah. Daftar pustaka ini ditulis dalam naik urutan berdasarkan nama terakhir penulis. Pergunakan style",
      section4P1Bold: "'References'", section4P1After: " for pengaturan format daftar pustaka ini.",
      section4Format: "Format penulisan referensi mengikuti metode APA 6th, contoh penulisannya adalah sebagai berikut : Nama dari penulis. Tahun publikasi. Judul publikasi. Tempat penerbitan: penerbit.",
      section4Examples: "Contoh Penulisan:",
      section5Title: "5. UCAPAN TERIMAKASIH",
      section5P1: "Jika dibutuhkan tambahkan ucapan terimakasih pada pihak-pihak yang membantu dalam penelitian, penulisan makalah, atau pun pelaksanaan seminar.",
      section6Title: "6. LAMPIRAN",
      section6P1: "Makalah dapat dilengkapi dengan lampiran yang berisi tabel, gambar, peta dan yang lain-lain jika perlu untuk dilampirkan. Lampiran harus mematuhi ketentuan bahasa, penomoran halaman, header, format halaman, format tabel dan gambar.",
      important: "Penting:", pageLength: "Panjang halaman", pageLengthValue: "6 sampai 10 halaman",
      pageLengthNote: "(termasuk lampiran, tabel, gambar, dan daftar pustaka)"
    }
  }
};

// For non-ID/EN languages, use english keys from en.json as base
const enData = JSON.parse(fs.readFileSync(path.join(dir, 'en.json'), 'utf8'));
const enNewKeys = {};
['timelineData','registrationData','venueData','authorGuidelineContent'].forEach(k => {
  if (enData[k]) enNewKeys[k] = enData[k];
});

// Language-specific overrides for key UI strings
const overrides = {
  de: {
    timelineData: { item1Title:"Ankündigung Call for Paper", item2Title:"Einreichungszeitraum für Vollpapiere", item3Title:"Begutachtungsprozess", item4Title:"Bekanntgabe der Begutachtungsergebnisse", item5Title:"Revision & Einreichung druckfertiger Papiere", item6Title:"Teilnehmer- & Referentenregistrierung", item7Title:"Veranstaltungstag", active:"AKTIV", ongoing:"LAUFEND" },
    registrationData: { istsdcSub:"Internationales Symposium", fstpt:"NATIONALES SYMPOSIUM FSTPT", fstptSub:"Nationales Symposium", student:"Student", nonStudentEarly:"Nicht-Student (Frühbucher)", nonStudentRegular:"Nicht-Student (Regulär)", addPaper:"Zusätzliches Papier", certificateOnly:"Nur Zertifikat", untilDate:"bis 16. Juli 2026", afterDate:"nach dem 16. Juli 2026", studentMember:"Student FSTPT-Mitglied", studentNonMember:"Student Nicht-FSTPT-Mitglied", lecturerMember:"Dozent / Öffentlichkeit FSTPT-Mitglied", nonMember:"Nicht-FSTPT-Mitglied" },
    venueData: { hotelLocation: "Padang, West-Sumatra" }
  },
  zh: {
    timelineData: { item1Title:"征稿通知", item2Title:"全文提交期", item3Title:"全文审稿过程", item4Title:"审稿结果公布", item5Title:"修改与定稿提交", item6Title:"参会者与发表者注册", item7Title:"活动日", active:"进行中", ongoing:"进行中" },
    registrationData: { istsdcSub:"国际研讨会", fstpt:"FSTPT全国研讨会", fstptSub:"全国研讨会", student:"学生", nonStudentEarly:"非学生（早鸟价）", nonStudentRegular:"非学生（常规价）", addPaper:"附加论文", certificateOnly:"仅证书", untilDate:"截至2026年7月16日", afterDate:"2026年7月16日之后", studentMember:"FSTPT会员学生", studentNonMember:"非FSTPT会员学生", lecturerMember:"讲师/公众 FSTPT会员", nonMember:"非FSTPT会员" },
    venueData: { hotelLocation: "巴东，西苏门答腊" }
  },
  ru: {
    timelineData: { item1Title:"Объявление о приёме статей", item2Title:"Период подачи полных статей", item3Title:"Процесс рецензирования", item4Title:"Объявление результатов", item5Title:"Доработка и подача финальной версии", item6Title:"Регистрация участников и докладчиков", item7Title:"День мероприятия", active:"АКТИВНО", ongoing:"ТЕКУЩИЙ" },
    registrationData: { istsdcSub:"Международный симпозиум", fstpt:"НАЦИОНАЛЬНЫЙ СИМПОЗИУМ FSTPT", fstptSub:"Национальный симпозиум", student:"Студент", nonStudentEarly:"Не студент (ранняя регистрация)", nonStudentRegular:"Не студент (обычная)", addPaper:"Дополнительная статья", certificateOnly:"Только сертификат", untilDate:"до 16 июля 2026", afterDate:"после 16 июля 2026", studentMember:"Студент-член FSTPT", studentNonMember:"Студент не член FSTPT", lecturerMember:"Преподаватель / член FSTPT", nonMember:"Не член FSTPT" },
    venueData: { hotelLocation: "Паданг, Западная Суматра" }
  },
  fr: {
    timelineData: { item1Title:"Annonce d'appel à communications", item2Title:"Période de soumission des articles", item3Title:"Processus d'évaluation", item4Title:"Annonce des résultats", item5Title:"Révision et soumission de la version finale", item6Title:"Inscription des participants et présentateurs", item7Title:"Jour de l'événement", active:"ACTIF", ongoing:"EN COURS" },
    registrationData: { istsdcSub:"Symposium International", fstpt:"SYMPOSIUM NATIONAL FSTPT", fstptSub:"Symposium National", student:"Étudiant", nonStudentEarly:"Non-étudiant (Tarif anticipé)", nonStudentRegular:"Non-étudiant (Tarif normal)", addPaper:"Article supplémentaire", certificateOnly:"Certificat uniquement", untilDate:"jusqu'au 16 juillet 2026", afterDate:"après le 16 juillet 2026", studentMember:"Étudiant membre FSTPT", studentNonMember:"Étudiant non-membre FSTPT", lecturerMember:"Enseignant / Public membre FSTPT", nonMember:"Non-membre FSTPT" },
    venueData: { hotelLocation: "Padang, Sumatra occidental" }
  },
  ja: {
    timelineData: { item1Title:"論文募集の公告", item2Title:"全文投稿期間", item3Title:"全文査読プロセス", item4Title:"査読結果発表", item5Title:"修正・最終版提出", item6Title:"参加者・発表者登録", item7Title:"イベント当日", active:"進行中", ongoing:"開催中" },
    registrationData: { istsdcSub:"国際シンポジウム", fstpt:"FSTPT全国シンポジウム", fstptSub:"全国シンポジウム", student:"学生", nonStudentEarly:"非学生（早期割引）", nonStudentRegular:"非学生（通常）", addPaper:"追加論文", certificateOnly:"証明書のみ", untilDate:"2026年7月16日まで", afterDate:"2026年7月16日以降", studentMember:"FSTPT会員学生", studentNonMember:"非FSTPT会員学生", lecturerMember:"講師/一般 FSTPT会員", nonMember:"非FSTPT会員" },
    venueData: { hotelLocation: "パダン、西スマトラ" }
  },
  es: {
    timelineData: { item1Title:"Anuncio de convocatoria", item2Title:"Período de envío de artículos", item3Title:"Proceso de revisión", item4Title:"Anuncio de resultados", item5Title:"Revisión y envío de versión final", item6Title:"Registro de participantes y ponentes", item7Title:"Día del evento", active:"ACTIVO", ongoing:"EN CURSO" },
    registrationData: { istsdcSub:"Simposio Internacional", fstpt:"SIMPOSIO NACIONAL FSTPT", fstptSub:"Simposio Nacional", student:"Estudiante", nonStudentEarly:"No estudiante (Tarifa anticipada)", nonStudentRegular:"No estudiante (Regular)", addPaper:"Artículo adicional", certificateOnly:"Solo certificado", untilDate:"hasta el 16 de julio de 2026", afterDate:"después del 16 de julio de 2026", studentMember:"Estudiante miembro FSTPT", studentNonMember:"Estudiante no miembro FSTPT", lecturerMember:"Docente / Público miembro FSTPT", nonMember:"No miembro FSTPT" },
    venueData: { hotelLocation: "Padang, Sumatra Occidental" }
  }
};

// Process each language file
['id','de','zh','ru','fr','ja','es'].forEach(lang => {
  const filePath = path.join(dir, `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (lang === 'id') {
    // ID gets its own full translations
    Object.assign(data, newKeys.id);
  } else {
    // Others get EN keys as base, then overrides
    const merged = JSON.parse(JSON.stringify(enNewKeys));
    const ov = overrides[lang] || {};
    Object.keys(ov).forEach(section => {
      if (!merged[section]) merged[section] = {};
      Object.assign(merged[section], ov[section]);
    });
    Object.assign(data, merged);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang}.json`);
});

console.log('Done!');
