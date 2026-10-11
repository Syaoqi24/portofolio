export const content = {
  ui: {
    clickDetails: { en: 'click for details ↕', id: 'klik untuk detail ↕' },
  },

  experience: [
    {
      open: true,
      title: 'Data and Information Analyst',
      org: 'Balai Besar Pelatihan Vokasi dan Produktivitas Bekasi',
      period: { en: 'Nov 2025 — May 2026', id: 'Nov 2025 — Mei 2026' },
      bullets: [
        { en: 'Designed end-to-end analytics to monitor participant KPIs across 20 training programs and 225 participants, reaching 95.56% realization.', id: 'Merancang analitik end-to-end untuk monitoring KPI peserta di 20 program pelatihan dan 225 peserta, mencapai realisasi 95.56%.' },
        { en: 'Built an interactive Looker Studio dashboard replacing manual Excel reporting, covering 7 vocational tracks.', id: 'Membangun dashboard Looker Studio interaktif menggantikan pelaporan Excel manual, mencakup 7 jalur vokasi.' },
        { en: 'Developed Python automation scripts for data and document processing, reducing human error.', id: 'Mengembangkan skrip otomasi Python untuk pemrosesan data dan dokumen, mengurangi human error.' },
        { en: 'Modeled multi-variable data (PBL, TMT, PBK, NON-APBN) to support decision-making.', id: 'Melakukan pemodelan data multi-variabel (PBL, TMT, PBK, NON-APBN) untuk mendukung pengambilan keputusan.' },
      ],
    },
    {
      title: 'Student Researcher',
      org: 'National Research and Innovation Agency (BRIN) — Cisitu, Bandung',
      period: { en: 'Oct 2024 — Mar 2025', id: 'Okt 2024 — Mar 2025' },
      bullets: [
        { en: 'Designed an analytical study of perovskite solar cell performance across 50+ experimental devices.', id: 'Merancang studi analitik performa sel surya perovskit pada 50+ perangkat eksperimen.' },
        { en: 'Applied quantitative modeling with SCAPS-1D and OriginLab.', id: 'Menerapkan pemodelan kuantitatif dengan SCAPS-1D dan OriginLab.' },
        { en: 'Turned complex experimental data into structured visualizations and analytical reports.', id: 'Menerjemahkan data eksperimen kompleks menjadi visualisasi dan laporan analitik terstruktur.' },
      ],
    },
    {
      title: 'Research Student',
      org: 'National Research and Innovation Agency (BRIN) — Serpong',
      period: { en: 'Dec 2023 — Feb 2024', id: 'Des 2023 — Feb 2024' },
      bullets: [
        { en: 'Collected and processed experimental datasets on transparent conductive oxide thin films.', id: 'Mengumpulkan dan memproses dataset eksperimen thin film oksida konduktif transparan.' },
        { en: 'Analyzed material performance trends and wrote structured analytical reports.', id: 'Menganalisis tren performa material dan menyusun laporan analitik terstruktur.' },
        { en: 'Supported end-to-end research operations, from data collection to final reporting.', id: 'Mendukung operasional riset end-to-end dari pengumpulan data hingga pelaporan akhir.' },
      ],
    },
  ],

  projects: [
    {
      tags: 'python',
      title: 'Job Market Analysis',
      desc: { en: 'Integrated data pipeline from 3 sources (RemoteOK API, Arbeitnow API, Kaggle LinkedIn dataset) covering 85,000+ job postings. Includes data validation and correction of critical column-label errors before analysis, producing insights on skill demand and remote work trends.', id: 'Pipeline data terintegrasi dari 3 sumber (RemoteOK API, Arbeitnow API, Kaggle LinkedIn dataset), 85.000+ job postings. Termasuk validasi data dan koreksi kesalahan label kolom kritis sebelum analisis, menghasilkan insight tren demand skill dan remote work.' },
      stack: ['Python', 'Pandas', 'Google Colab'],
      links: [{ href: 'https://github.com/Syaoqi24/Job-Market-Analysis', label: { en: '↗ View on GitHub', id: '↗ Lihat di GitHub' } }],
    },
    {
      tags: 'php',
      title: 'Toko Buah Segar — E-commerce Web App',
      desc: { en: 'Full-stack e-commerce app with a public catalog and an admin CRUD panel, refactored from procedural PHP to an OOP architecture (Database, Auth, Produk classes) to remove duplicated code across 5+ files. Closed SQL injection gaps with prepared statements.', id: 'Aplikasi e-commerce full-stack dengan katalog publik dan panel admin CRUD, direfaktor dari PHP prosedural ke arsitektur OOP (class Database, Auth, Produk) untuk menghilangkan duplikasi kode di 5+ file. Menutup celah SQL injection dengan prepared statements.' },
      stack: ['PHP', 'MySQL', 'OOP'],
      links: [{ href: 'https://github.com/Syaoqi24/Learning-Web-Dev', label: { en: '↗ View on GitHub', id: '↗ Lihat di GitHub' } }],
    },
    {
      tags: 'looker python',
      title: { en: 'National Vocational Training Realization Recap', id: 'Rekap Realisasi Pelatihan Vokasi Nasional' },
      desc: { en: 'Real-time dashboard for BBPVP Bekasi pulling data directly from Google Sheets, with filters by program type, participant absorption charts, and a vocational category breakdown, replacing manual spreadsheet review.', id: 'Dashboard real-time untuk BBPVP Bekasi yang menarik data langsung dari Google Sheets, dengan filter berdasarkan tipe program, chart absorpsi peserta, dan breakdown kategori vokasi — menggantikan review spreadsheet manual.' },
      stack: ['Excel', 'Looker Studio', 'Python'],
      links: [
        { href: 'https://datastudio.google.com/reporting/5eddaf2c-69ea-4a2d-b440-db576c924eac/page/0OSwF', label: { en: '↗ Looker Studio Dashboard', id: '↗ Dashboard Looker Studio' } },
        { href: 'https://syaoqi24.github.io/dashboard-pelatihan-2026/', label: { en: '↗ HTML Dashboard', id: '↗ Dashboard HTML' } },
      ],
    },
  ],

  skillTiers: {
    daily: { label: { en: 'DAILY USE', id: 'DIPAKAI RUTIN' }, hint: { en: 'Used regularly at work', id: 'Dipakai rutin di pekerjaan' } },
    built: { label: { en: 'BUILT WITH', id: 'DIPAKAI DI PROYEK' }, hint: { en: 'Used in finished projects', id: 'Dipakai di proyek yang selesai' } },
    learning: { label: { en: 'LEARNING', id: 'SEDANG DIPELAJARI' }, hint: { en: 'In progress', id: 'Sedang berjalan' } },
  },

  skills: [
    { tier: 'daily', name: 'Python · Pandas', proof: { en: 'Automation scripts at BBPVP; Job Market Analysis pipeline (85K+ postings).', id: 'Skrip otomasi di BBPVP; pipeline Job Market Analysis (85K+ postings).' } },
    { tier: 'daily', name: 'Looker Studio', proof: { en: 'BBPVP training dashboard across 7 vocational tracks.', id: 'Dashboard pelatihan BBPVP, 7 jalur vokasi.' } },
    { tier: 'daily', name: 'Excel · Google Sheets', proof: { en: 'Pivot tables and XLOOKUP; replaced manual KPI reporting.', id: 'Pivot dan XLOOKUP; menggantikan pelaporan KPI manual.' } },
    { tier: 'built', name: 'SQL · MySQL', proof: { en: 'Toko Buah Segar with prepared statements; IBM SQL and Relational Databases 101.', id: 'Toko Buah Segar dengan prepared statements; IBM SQL and Relational Databases 101.' } },
    { tier: 'built', name: 'PHP (OOP)', proof: { en: 'Refactored procedural code into OOP classes across 5+ files.', id: 'Refaktor kode prosedural ke class OOP di 5+ file.' } },
    { tier: 'built', name: 'JavaScript', proof: { en: 'This portfolio: filters, observers, typewriter effect; Dicoding certificate.', id: 'Portofolio ini: filter, observer, efek ketik; sertifikat Dicoding.' } },
    { tier: 'built', name: 'Git · GitHub Actions', proof: { en: 'This portfolio: CI with lint, Playwright tests and Lighthouse; protected main branch.', id: 'Portofolio ini: CI dengan lint, tes Playwright, dan Lighthouse; branch main terlindungi.' } },
    { tier: 'built', name: 'OriginLab · SCAPS-1D', proof: { en: 'Analysis of 50+ perovskite solar cell devices at BRIN.', id: 'Analisis 50+ perangkat sel surya perovskit di BRIN.' } },
    { tier: 'learning', name: 'React', proof: { en: 'Next: rebuilding this portfolio and a fullstack data app.', id: 'Berikutnya: membangun ulang portofolio ini dan aplikasi data fullstack.' } },
    { tier: 'learning', name: 'Docker', proof: { en: 'Planned: containerizing the fullstack project.', id: 'Direncanakan: kontainerisasi proyek fullstack.' } },
    { tier: 'learning', name: 'PostgreSQL', proof: { en: 'Planned: database for the Job Market Analysis web app.', id: 'Direncanakan: database untuk web app Job Market Analysis.' } },
  ],

  certs: [
    { tags: 'data', title: 'SQL and Relational Databases 101', date: 'Jul 2026', issuer: 'Cognitive Class | IBM Skills' },
    { tags: 'data', title: 'Belajar Penerapan Data Science dengan Microsoft Fabric', date: 'Aug 2026', issuer: 'Dicoding' },
    { tags: 'data', title: 'Basic of Data Analysis for Industry', date: { en: 'May 2026', id: 'Mei 2026' }, issuer: 'BBPVP Ternate, Kemnaker RI' },
    { tags: 'data', title: 'Introduction to Python Programming for Data Science', date: { en: 'May 2026', id: 'Mei 2026' }, issuer: 'Dataquest.io' },
    { tags: 'web', title: 'Asisten Pengembang Web', date: 'Jun 2026', issuer: 'BNSP' },
    { tags: 'web', title: 'Belajar Dasar Pemrograman Web | JavaScript', date: { en: 'May–Jun 2026', id: 'Mei–Jun 2026' }, issuer: 'Dicoding' },
    { tags: 'professional', title: 'Pemagangan Nasional', date: 'Jun 2026', issuer: 'MagangHub, Kemnaker RI' },
    { tags: 'professional', title: 'Laboratory Safety &amp; Security Induction', date: 'Nov 2024', issuer: 'BRIN Cisitu, Bandung' },
    { tags: 'language', title: 'TOEIC Listening &amp; Reading', date: { en: 'Valid until Dec 2027', id: 'Berlaku s.d. Des 2027' }, issuer: { en: 'ETS — Score 550', id: 'ETS — Skor 550' } },
  ],
};

// path 'projects.0.desc' -> teks sesuai bahasa
export function pick(path, lang) {
  const node = path.split('.').reduce((o, k) => (o == null ? o : o[k]), content);
  if (node == null) return '';
  return typeof node === 'string' ? node : (node[lang] ?? node.en);
}