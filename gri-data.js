// GRI Standards 2021 (+ Waste 2020, OHS 2018) reference data.
// Disclosure tuple: [code, titleEN, titleID, type]  type: n=narrative q=quantitative t=table
const T = (std, code, series, en, id, disclosures) => ({ std, code, series, en, id, disclosures });

export const series = [
  { id: 'universal', en: 'Universal Standards', id_: 'Standar Universal', short: 'GRI 1–3' },
  { id: 'economic', en: 'Economic (GRI 200)', id_: 'Ekonomi (GRI 200)', short: 'GRI 200' },
  { id: 'environmental', en: 'Environmental (GRI 300)', id_: 'Lingkungan (GRI 300)', short: 'GRI 300' },
  { id: 'social', en: 'Social (GRI 400)', id_: 'Sosial (GRI 400)', short: 'GRI 400' },
  { id: 'sector', en: 'Sector Standard (GRI 11)', id_: 'Standar Sektor (GRI 11)', short: 'GRI 11' },
];

export const topics = [
  T('GRI 2', '2', 'universal', 'General Disclosures 2021', 'Pengungkapan Umum 2021', [
    ['2-1', 'Organizational details', 'Detail organisasi', 'n'],
    ['2-2', 'Entities included in the organization’s sustainability reporting', 'Entitas yang dicakup dalam pelaporan keberlanjutan', 'n'],
    ['2-3', 'Reporting period, frequency and contact point', 'Periode, frekuensi pelaporan, dan narahubung', 'n'],
    ['2-4', 'Restatements of information', 'Penyajian kembali informasi', 'n'],
    ['2-5', 'External assurance', 'Asurans eksternal', 'n'],
    ['2-6', 'Activities, value chain and other business relationships', 'Aktivitas, rantai nilai, dan hubungan bisnis lain', 'n'],
    ['2-7', 'Employees', 'Karyawan', 't'],
    ['2-8', 'Workers who are not employees', 'Pekerja yang bukan karyawan', 't'],
    ['2-9', 'Governance structure and composition', 'Struktur dan komposisi tata kelola', 't'],
    ['2-10', 'Nomination and selection of the highest governance body', 'Nominasi dan seleksi badan tata kelola tertinggi', 'n'],
    ['2-11', 'Chair of the highest governance body', 'Ketua badan tata kelola tertinggi', 'n'],
    ['2-12', 'Role of the highest governance body in overseeing the management of impacts', 'Peran badan tata kelola tertinggi dalam mengawasi pengelolaan dampak', 'n'],
    ['2-13', 'Delegation of responsibility for managing impacts', 'Pendelegasian tanggung jawab pengelolaan dampak', 'n'],
    ['2-14', 'Role of the highest governance body in sustainability reporting', 'Peran badan tata kelola tertinggi dalam pelaporan keberlanjutan', 'n'],
    ['2-15', 'Conflicts of interest', 'Konflik kepentingan', 'n'],
    ['2-16', 'Communication of critical concerns', 'Komunikasi hal-hal kritis', 'q'],
    ['2-17', 'Collective knowledge of the highest governance body', 'Pengetahuan kolektif badan tata kelola tertinggi', 'n'],
    ['2-18', 'Evaluation of the performance of the highest governance body', 'Evaluasi kinerja badan tata kelola tertinggi', 'n'],
    ['2-19', 'Remuneration policies', 'Kebijakan remunerasi', 'n'],
    ['2-20', 'Process to determine remuneration', 'Proses penetapan remunerasi', 'n'],
    ['2-21', 'Annual total compensation ratio', 'Rasio total kompensasi tahunan', 'q'],
    ['2-22', 'Statement on sustainable development strategy', 'Pernyataan strategi pembangunan berkelanjutan', 'n'],
    ['2-23', 'Policy commitments', 'Komitmen kebijakan', 'n'],
    ['2-24', 'Embedding policy commitments', 'Penerapan komitmen kebijakan', 'n'],
    ['2-25', 'Processes to remediate negative impacts', 'Proses remediasi dampak negatif', 'n'],
    ['2-26', 'Mechanisms for seeking advice and raising concerns', 'Mekanisme meminta saran dan menyampaikan keluhan', 'n'],
    ['2-27', 'Compliance with laws and regulations', 'Kepatuhan terhadap hukum dan peraturan', 'q'],
    ['2-28', 'Membership associations', 'Keanggotaan asosiasi', 'n'],
    ['2-29', 'Approach to stakeholder engagement', 'Pendekatan pelibatan pemangku kepentingan', 'n'],
    ['2-30', 'Collective bargaining agreements', 'Perjanjian kerja bersama', 'q'],
  ]),
  T('GRI 3', '3', 'universal', 'Material Topics 2021', 'Topik Material 2021', [
    ['3-1', 'Process to determine material topics', 'Proses penentuan topik material', 'n'],
    ['3-2', 'List of material topics', 'Daftar topik material', 't'],
    ['3-3', 'Management of material topics', 'Pengelolaan topik material', 'n'],
  ]),
  T('GRI 201', '201', 'economic', 'Economic Performance 2016', 'Kinerja Ekonomi 2016', [
    ['201-1', 'Direct economic value generated and distributed', 'Nilai ekonomi langsung yang dihasilkan dan didistribusikan', 't'],
    ['201-2', 'Financial implications and other risks and opportunities due to climate change', 'Implikasi finansial serta risiko dan peluang akibat perubahan iklim', 'n'],
    ['201-3', 'Defined benefit plan obligations and other retirement plans', 'Kewajiban program imbalan pasti dan program pensiun lain', 'n'],
    ['201-4', 'Financial assistance received from government', 'Bantuan finansial dari pemerintah', 'q'],
  ]),
  T('GRI 202', '202', 'economic', 'Market Presence 2016', 'Keberadaan Pasar 2016', [
    ['202-1', 'Ratios of standard entry level wage by gender compared to minimum wage', 'Rasio upah standar pekerja pemula terhadap upah minimum per gender', 'q'],
    ['202-2', 'Proportion of senior management hired from the local community', 'Proporsi manajemen senior yang direkrut dari masyarakat lokal', 'q'],
  ]),
  T('GRI 203', '203', 'economic', 'Indirect Economic Impacts 2016', 'Dampak Ekonomi Tidak Langsung 2016', [
    ['203-1', 'Infrastructure investments and services supported', 'Investasi infrastruktur dan dukungan layanan', 'n'],
    ['203-2', 'Significant indirect economic impacts', 'Dampak ekonomi tidak langsung yang signifikan', 'n'],
  ]),
  T('GRI 204', '204', 'economic', 'Procurement Practices 2016', 'Praktik Pengadaan 2016', [
    ['204-1', 'Proportion of spending on local suppliers', 'Proporsi pengeluaran kepada pemasok lokal', 'q'],
  ]),
  T('GRI 205', '205', 'economic', 'Anti-corruption 2016', 'Anti-korupsi 2016', [
    ['205-1', 'Operations assessed for risks related to corruption', 'Operasi yang dinilai risiko terkait korupsi', 'q'],
    ['205-2', 'Communication and training about anti-corruption policies and procedures', 'Komunikasi dan pelatihan kebijakan serta prosedur anti-korupsi', 't'],
    ['205-3', 'Confirmed incidents of corruption and actions taken', 'Insiden korupsi terkonfirmasi dan tindakan yang diambil', 'q'],
  ]),
  T('GRI 206', '206', 'economic', 'Anti-competitive Behavior 2016', 'Perilaku Anti-persaingan 2016', [
    ['206-1', 'Legal actions for anti-competitive behavior, anti-trust, and monopoly practices', 'Tindakan hukum atas perilaku anti-persaingan, anti-trust, dan praktik monopoli', 'q'],
  ]),
  T('GRI 207', '207', 'economic', 'Tax 2019', 'Pajak 2019', [
    ['207-1', 'Approach to tax', 'Pendekatan terhadap pajak', 'n'],
    ['207-2', 'Tax governance, control, and risk management', 'Tata kelola, kontrol, dan manajemen risiko pajak', 'n'],
    ['207-3', 'Stakeholder engagement and management of concerns related to tax', 'Pelibatan pemangku kepentingan dan pengelolaan isu perpajakan', 'n'],
    ['207-4', 'Country-by-country reporting', 'Pelaporan per negara', 't'],
  ]),
  T('GRI 301', '301', 'environmental', 'Materials 2016', 'Material 2016', [
    ['301-1', 'Materials used by weight or volume', 'Material yang digunakan berdasarkan berat atau volume', 'q'],
    ['301-2', 'Recycled input materials used', 'Material input daur ulang yang digunakan', 'q'],
    ['301-3', 'Reclaimed products and their packaging materials', 'Produk dan kemasan yang direklamasi', 'q'],
  ]),
  T('GRI 302', '302', 'environmental', 'Energy 2016', 'Energi 2016', [
    ['302-1', 'Energy consumption within the organization', 'Konsumsi energi di dalam organisasi', 'q'],
    ['302-2', 'Energy consumption outside of the organization', 'Konsumsi energi di luar organisasi', 'q'],
    ['302-3', 'Energy intensity', 'Intensitas energi', 'q'],
    ['302-4', 'Reduction of energy consumption', 'Pengurangan konsumsi energi', 'q'],
    ['302-5', 'Reductions in energy requirements of products and services', 'Pengurangan kebutuhan energi produk dan jasa', 'q'],
  ]),
  T('GRI 303', '303', 'environmental', 'Water and Effluents 2018', 'Air dan Efluen 2018', [
    ['303-1', 'Interactions with water as a shared resource', 'Interaksi dengan air sebagai sumber daya bersama', 'n'],
    ['303-2', 'Management of water discharge-related impacts', 'Pengelolaan dampak terkait pembuangan air', 'n'],
    ['303-3', 'Water withdrawal', 'Pengambilan air', 'q'],
    ['303-4', 'Water discharge', 'Pembuangan air', 'q'],
    ['303-5', 'Water consumption', 'Konsumsi air', 'q'],
  ]),
  T('GRI 304', '304', 'environmental', 'Biodiversity 2016', 'Keanekaragaman Hayati 2016', [
    ['304-1', 'Operational sites in or adjacent to protected areas and areas of high biodiversity value', 'Lokasi operasional di dalam atau berdekatan dengan kawasan lindung dan bernilai keanekaragaman hayati tinggi', 't'],
    ['304-2', 'Significant impacts of activities, products and services on biodiversity', 'Dampak signifikan aktivitas, produk, dan jasa terhadap keanekaragaman hayati', 'n'],
    ['304-3', 'Habitats protected or restored', 'Habitat yang dilindungi atau direstorasi', 'q'],
    ['304-4', 'IUCN Red List species and national conservation list species affected by operations', 'Spesies IUCN Red List dan daftar konservasi nasional yang terdampak operasi', 't'],
  ]),
  T('GRI 305', '305', 'environmental', 'Emissions 2016', 'Emisi 2016', [
    ['305-1', 'Direct (Scope 1) GHG emissions', 'Emisi GRK langsung (Cakupan 1)', 'q'],
    ['305-2', 'Energy indirect (Scope 2) GHG emissions', 'Emisi GRK tidak langsung dari energi (Cakupan 2)', 'q'],
    ['305-3', 'Other indirect (Scope 3) GHG emissions', 'Emisi GRK tidak langsung lainnya (Cakupan 3)', 'q'],
    ['305-4', 'GHG emissions intensity', 'Intensitas emisi GRK', 'q'],
    ['305-5', 'Reduction of GHG emissions', 'Pengurangan emisi GRK', 'q'],
    ['305-6', 'Emissions of ozone-depleting substances (ODS)', 'Emisi bahan perusak ozon (BPO)', 'q'],
    ['305-7', 'Nitrogen oxides (NOx), sulfur oxides (SOx), and other significant air emissions', 'Nitrogen oksida (NOx), sulfur oksida (SOx), dan emisi udara signifikan lainnya', 'q'],
  ]),
  T('GRI 306', '306', 'environmental', 'Waste 2020', 'Limbah 2020', [
    ['306-1', 'Waste generation and significant waste-related impacts', 'Timbulan limbah dan dampak signifikan terkait limbah', 'n'],
    ['306-2', 'Management of significant waste-related impacts', 'Pengelolaan dampak signifikan terkait limbah', 'n'],
    ['306-3', 'Waste generated', 'Limbah yang dihasilkan', 'q'],
    ['306-4', 'Waste diverted from disposal', 'Limbah yang dialihkan dari pembuangan', 'q'],
    ['306-5', 'Waste directed to disposal', 'Limbah yang dibuang', 'q'],
  ]),
  T('GRI 308', '308', 'environmental', 'Supplier Environmental Assessment 2016', 'Penilaian Lingkungan Pemasok 2016', [
    ['308-1', 'New suppliers that were screened using environmental criteria', 'Pemasok baru yang disaring dengan kriteria lingkungan', 'q'],
    ['308-2', 'Negative environmental impacts in the supply chain and actions taken', 'Dampak lingkungan negatif dalam rantai pasok dan tindakan yang diambil', 'q'],
  ]),
  T('GRI 401', '401', 'social', 'Employment 2016', 'Kepegawaian 2016', [
    ['401-1', 'New employee hires and employee turnover', 'Perekrutan karyawan baru dan pergantian karyawan', 't'],
    ['401-2', 'Benefits provided to full-time employees that are not provided to temporary or part-time employees', 'Tunjangan bagi karyawan tetap yang tidak diberikan kepada karyawan sementara atau paruh waktu', 'n'],
    ['401-3', 'Parental leave', 'Cuti melahirkan/mengasuh', 't'],
  ]),
  T('GRI 402', '402', 'social', 'Labor/Management Relations 2016', 'Hubungan Pekerja/Manajemen 2016', [
    ['402-1', 'Minimum notice periods regarding operational changes', 'Periode pemberitahuan minimum terkait perubahan operasional', 'n'],
  ]),
  T('GRI 403', '403', 'social', 'Occupational Health and Safety 2018', 'Keselamatan dan Kesehatan Kerja 2018', [
    ['403-1', 'Occupational health and safety management system', 'Sistem manajemen keselamatan dan kesehatan kerja', 'n'],
    ['403-2', 'Hazard identification, risk assessment, and incident investigation', 'Identifikasi bahaya, penilaian risiko, dan investigasi insiden', 'n'],
    ['403-3', 'Occupational health services', 'Layanan kesehatan kerja', 'n'],
    ['403-4', 'Worker participation, consultation, and communication on occupational health and safety', 'Partisipasi, konsultasi, dan komunikasi pekerja tentang K3', 'n'],
    ['403-5', 'Worker training on occupational health and safety', 'Pelatihan K3 bagi pekerja', 'n'],
    ['403-6', 'Promotion of worker health', 'Promosi kesehatan pekerja', 'n'],
    ['403-7', 'Prevention and mitigation of occupational health and safety impacts directly linked by business relationships', 'Pencegahan dan mitigasi dampak K3 yang terkait langsung dengan hubungan bisnis', 'n'],
    ['403-8', 'Workers covered by an occupational health and safety management system', 'Pekerja yang tercakup sistem manajemen K3', 'q'],
    ['403-9', 'Work-related injuries', 'Cedera akibat kerja', 'q'],
    ['403-10', 'Work-related ill health', 'Penyakit akibat kerja', 'q'],
  ]),
  T('GRI 404', '404', 'social', 'Training and Education 2016', 'Pelatihan dan Pendidikan 2016', [
    ['404-1', 'Average hours of training per year per employee', 'Rata-rata jam pelatihan per tahun per karyawan', 'q'],
    ['404-2', 'Programs for upgrading employee skills and transition assistance programs', 'Program peningkatan keterampilan dan bantuan transisi karyawan', 'n'],
    ['404-3', 'Percentage of employees receiving regular performance and career development reviews', 'Persentase karyawan yang menerima tinjauan kinerja dan pengembangan karier berkala', 'q'],
  ]),
  T('GRI 405', '405', 'social', 'Diversity and Equal Opportunity 2016', 'Keberagaman dan Kesetaraan Peluang 2016', [
    ['405-1', 'Diversity of governance bodies and employees', 'Keberagaman badan tata kelola dan karyawan', 't'],
    ['405-2', 'Ratio of basic salary and remuneration of women to men', 'Rasio gaji pokok dan remunerasi perempuan terhadap laki-laki', 'q'],
  ]),
  T('GRI 406', '406', 'social', 'Non-discrimination 2016', 'Non-diskriminasi 2016', [
    ['406-1', 'Incidents of discrimination and corrective actions taken', 'Insiden diskriminasi dan tindakan korektif', 'q'],
  ]),
  T('GRI 407', '407', 'social', 'Freedom of Association and Collective Bargaining 2016', 'Kebebasan Berserikat dan Perundingan Kolektif 2016', [
    ['407-1', 'Operations and suppliers in which the right to freedom of association and collective bargaining may be at risk', 'Operasi dan pemasok yang hak berserikatnya berisiko', 'n'],
  ]),
  T('GRI 408', '408', 'social', 'Child Labor 2016', 'Pekerja Anak 2016', [
    ['408-1', 'Operations and suppliers at significant risk for incidents of child labor', 'Operasi dan pemasok dengan risiko signifikan pekerja anak', 'n'],
  ]),
  T('GRI 409', '409', 'social', 'Forced or Compulsory Labor 2016', 'Kerja Paksa atau Wajib Kerja 2016', [
    ['409-1', 'Operations and suppliers at significant risk for incidents of forced or compulsory labor', 'Operasi dan pemasok dengan risiko signifikan kerja paksa', 'n'],
  ]),
  T('GRI 410', '410', 'social', 'Security Practices 2016', 'Praktik Keamanan 2016', [
    ['410-1', 'Security personnel trained in human rights policies or procedures', 'Personel keamanan yang dilatih kebijakan atau prosedur HAM', 'q'],
  ]),
  T('GRI 411', '411', 'social', 'Rights of Indigenous Peoples 2016', 'Hak Masyarakat Adat 2016', [
    ['411-1', 'Incidents of violations involving rights of indigenous peoples', 'Insiden pelanggaran hak masyarakat adat', 'q'],
  ]),
  T('GRI 413', '413', 'social', 'Local Communities 2016', 'Masyarakat Lokal 2016', [
    ['413-1', 'Operations with local community engagement, impact assessments, and development programs', 'Operasi dengan pelibatan masyarakat, penilaian dampak, dan program pengembangan', 'q'],
    ['413-2', 'Operations with significant actual and potential negative impacts on local communities', 'Operasi dengan dampak negatif aktual dan potensial signifikan terhadap masyarakat lokal', 'n'],
  ]),
  T('GRI 414', '414', 'social', 'Supplier Social Assessment 2016', 'Penilaian Sosial Pemasok 2016', [
    ['414-1', 'New suppliers that were screened using social criteria', 'Pemasok baru yang disaring dengan kriteria sosial', 'q'],
    ['414-2', 'Negative social impacts in the supply chain and actions taken', 'Dampak sosial negatif dalam rantai pasok dan tindakan yang diambil', 'q'],
  ]),
  T('GRI 415', '415', 'social', 'Public Policy 2016', 'Kebijakan Publik 2016', [
    ['415-1', 'Political contributions', 'Kontribusi politik', 'q'],
  ]),
  T('GRI 416', '416', 'social', 'Customer Health and Safety 2016', 'Kesehatan dan Keselamatan Pelanggan 2016', [
    ['416-1', 'Assessment of the health and safety impacts of product and service categories', 'Penilaian dampak kesehatan dan keselamatan kategori produk dan jasa', 'q'],
    ['416-2', 'Incidents of non-compliance concerning the health and safety impacts of products and services', 'Insiden ketidakpatuhan terkait dampak kesehatan dan keselamatan produk dan jasa', 'q'],
  ]),
  T('GRI 417', '417', 'social', 'Marketing and Labeling 2016', 'Pemasaran dan Pelabelan 2016', [
    ['417-1', 'Requirements for product and service information and labeling', 'Persyaratan informasi dan pelabelan produk dan jasa', 'n'],
    ['417-2', 'Incidents of non-compliance concerning product and service information and labeling', 'Insiden ketidakpatuhan terkait informasi dan pelabelan produk dan jasa', 'q'],
    ['417-3', 'Incidents of non-compliance concerning marketing communications', 'Insiden ketidakpatuhan terkait komunikasi pemasaran', 'q'],
  ]),
  T('GRI 418', '418', 'social', 'Customer Privacy 2016', 'Privasi Pelanggan 2016', [
    ['418-1', 'Substantiated complaints concerning breaches of customer privacy and losses of customer data', 'Keluhan tersubstansiasi terkait pelanggaran privasi dan kehilangan data pelanggan', 'q'],
  ]),
];

// GRI 11: Oil and Gas Sector 2021 — the 22 likely material topics.
export const sectorTopics = [
  ['11.1', 'GHG emissions', 'Emisi GRK', ['305-1', '305-2', '305-3', '305-4', '305-5']],
  ['11.2', 'Climate adaptation, resilience, and transition', 'Adaptasi, ketahanan, dan transisi iklim', ['201-2', '305-5']],
  ['11.3', 'Air emissions', 'Emisi udara', ['305-7']],
  ['11.4', 'Biodiversity', 'Keanekaragaman hayati', ['304-1', '304-2', '304-3', '304-4']],
  ['11.5', 'Waste', 'Limbah', ['306-1', '306-2', '306-3', '306-4', '306-5']],
  ['11.6', 'Water and effluents', 'Air dan efluen', ['303-1', '303-2', '303-3', '303-4', '303-5']],
  ['11.7', 'Closure and rehabilitation', 'Penutupan dan rehabilitasi', ['402-1', '404-2']],
  ['11.8', 'Asset integrity and critical incident management', 'Integritas aset dan manajemen insiden kritis', ['306-3', '403-2']],
  ['11.9', 'Occupational health and safety', 'Keselamatan dan kesehatan kerja', ['403-1', '403-8', '403-9', '403-10']],
  ['11.10', 'Employment practices', 'Praktik kepegawaian', ['401-1', '401-2', '401-3', '404-1']],
  ['11.11', 'Non-discrimination and equal opportunity', 'Non-diskriminasi dan kesetaraan peluang', ['405-1', '405-2', '406-1']],
  ['11.12', 'Forced labor and modern slavery', 'Kerja paksa dan perbudakan modern', ['409-1', '408-1']],
  ['11.13', 'Freedom of association and collective bargaining', 'Kebebasan berserikat dan perundingan kolektif', ['407-1', '2-30']],
  ['11.14', 'Economic impacts', 'Dampak ekonomi', ['201-1', '202-2', '203-1', '203-2', '204-1']],
  ['11.15', 'Local communities', 'Masyarakat lokal', ['413-1', '413-2']],
  ['11.16', 'Land and resource rights', 'Hak atas tanah dan sumber daya', ['413-2']],
  ['11.17', 'Rights of indigenous peoples', 'Hak masyarakat adat', ['411-1']],
  ['11.18', 'Conflict and security', 'Konflik dan keamanan', ['410-1']],
  ['11.19', 'Anti-competitive behavior', 'Perilaku anti-persaingan', ['206-1']],
  ['11.20', 'Anti-corruption', 'Anti-korupsi', ['205-1', '205-2', '205-3']],
  ['11.21', 'Payments to governments', 'Pembayaran kepada pemerintah', ['201-1', '207-4']],
  ['11.22', 'Public policy', 'Kebijakan publik', ['415-1']],
];

export const sectorStandards = [
  { id: 'gri11', name: 'GRI 11: Oil and Gas 2021', active: true },
  { id: 'gri12', name: 'GRI 12: Coal 2022', active: false },
  { id: 'gri13', name: 'GRI 13: Agriculture, Aquaculture and Fishing 2022', active: false },
  { id: 'gri14', name: 'GRI 14: Mining 2024', active: false },
];

// Cross-framework mapping (indicative, for the content index columns).
export const mapping = {
  '2-1': { pojk: 'Penjelasan umum perusahaan' },
  '2-9': { pojk: 'Tata kelola keberlanjutan' },
  '2-22': { pojk: 'Penjelasan direksi', ifrs: 'IFRS S1 · Governance' },
  '2-27': { pojk: 'Kepatuhan' },
  '2-29': { pojk: 'Pelibatan pemangku kepentingan', ifrs: 'IFRS S1 · Strategy' },
  '201-1': { pojk: 'Kinerja ekonomi' },
  '201-2': { pojk: 'Kinerja lingkungan', ifrs: 'IFRS S2 · Climate risks & opportunities' },
  '205-2': { pojk: 'Kinerja sosial' },
  '302-1': { pojk: 'Penggunaan energi', ifrs: 'IFRS S2 · Metrics' },
  '302-3': { pojk: 'Intensitas energi', ifrs: 'IFRS S2 · Metrics' },
  '303-3': { pojk: 'Penggunaan air' },
  '303-4': { pojk: 'Pengelolaan efluen' },
  '304-3': { pojk: 'Keanekaragaman hayati' },
  '305-1': { pojk: 'Emisi GRK', ifrs: 'IFRS S2 · Scope 1' },
  '305-2': { pojk: 'Emisi GRK', ifrs: 'IFRS S2 · Scope 2' },
  '305-3': { ifrs: 'IFRS S2 · Scope 3' },
  '305-4': { pojk: 'Intensitas emisi', ifrs: 'IFRS S2 · GHG intensity' },
  '305-5': { pojk: 'Upaya mitigasi', ifrs: 'IFRS S2 · Targets' },
  '306-3': { pojk: 'Limbah dan efluen' },
  '401-1': { pojk: 'Praktik ketenagakerjaan' },
  '403-9': { pojk: 'K3' },
  '404-1': { pojk: 'Pengembangan kompetensi' },
  '405-1': { pojk: 'Kesetaraan kesempatan kerja' },
  '413-1': { pojk: 'Tanggung jawab sosial masyarakat' },
  '416-1': { pojk: 'Tanggung jawab produk' },
};

export const people = [
  { id: 'ar', name: 'Arum Ratnasari', role: 'Sustainability Lead', unit: 'Sustainability', init: 'AR' },
  { id: 'bp', name: 'Bayu Prakoso', role: 'HSE Manager', unit: 'HSE', init: 'BP' },
  { id: 'dw', name: 'Dewi Wulandari', role: 'HR Business Partner', unit: 'HR', init: 'DW' },
  { id: 'fh', name: 'Farhan Hidayat', role: 'Finance Controller', unit: 'Finance', init: 'FH' },
  { id: 'sn', name: 'Sinta Nurhaliza', role: 'Corporate Secretary', unit: 'Legal', init: 'SN' },
  { id: 'gk', name: 'Gunawan Kartika', role: 'Director of Operations', unit: 'Management', init: 'GK' },
];

export const entities = [
  { id: 'hq', name: 'PT Nusantara Energi Terpadu (Tbk)', scope: 'Konsolidasi · Induk', consolidated: true, employees: 2418 },
  { id: 'up1', name: 'NET Upstream — Blok Cepu Selatan', scope: 'Operasi hulu', consolidated: true, employees: 812 },
  { id: 'mid', name: 'NET Midstream — Terminal Gresik', scope: 'Terminal & pipa', consolidated: true, employees: 344 },
  { id: 'svc', name: 'NET Energy Services', scope: 'Jasa teknik', consolidated: true, employees: 1262 },
  { id: 'jv', name: 'Nusantara–Kiyo LNG (JV 40%)', scope: 'Ekuitas · di luar konsolidasi', consolidated: false, employees: 0 },
];

export const periods = [
  { id: '2025', label: 'FY 2025', status: 'open', due: '2026-04-30' },
  { id: '2024', label: 'FY 2024', status: 'published', due: '2025-04-30' },
  { id: '2023', label: 'FY 2023', status: 'published', due: '2024-04-30' },
];

export const ghgFactors = {
  scope1: [
    { id: 'diesel', en: 'Diesel — generators & fleet', id_: 'Diesel — genset & armada', unit: 'kL', factor: 2680, qty: 4820, src: 'IPCC 2006 / KLHK' },
    { id: 'gas', en: 'Natural gas — turbines', id_: 'Gas alam — turbin', unit: 'ribu m³', factor: 2020, qty: 12640, src: 'IPCC 2006' },
    { id: 'flare', en: 'Flaring & venting', id_: 'Flaring & venting', unit: 'ribu m³', factor: 2750, qty: 3180, src: 'API Compendium 2021' },
    { id: 'lpg', en: 'LPG', id_: 'LPG', unit: 'ton', factor: 2980, qty: 96, src: 'IPCC 2006' },
    { id: 'fugitive', en: 'Fugitive CH₄ (GWP 28)', id_: 'Fugitif CH₄ (GWP 28)', unit: 'ton CH₄', factor: 28000, qty: 212, src: 'IPCC AR5' },
  ],
  scope2: [
    { id: 'grid', en: 'Purchased electricity — Jamali grid', id_: 'Listrik dibeli — jaringan Jamali', unit: 'MWh', factor: 795, qty: 38400, src: 'Faktor emisi jaringan KESDM' },
    { id: 'steam', en: 'Purchased steam', id_: 'Uap dibeli', unit: 'GJ', factor: 68, qty: 21500, src: 'Pemasok' },
  ],
  scope3: [
    { id: 'c1', en: 'Cat. 1 Purchased goods & services', id_: 'Kat. 1 Barang & jasa dibeli', unit: 'Rp miliar', factor: 41, qty: 8940, src: 'Spend-based EEIO' },
    { id: 'c4', en: 'Cat. 4 Upstream transportation', id_: 'Kat. 4 Transportasi hulu', unit: 'ribu ton-km', factor: 62, qty: 14200, src: 'GLEC Framework' },
    { id: 'c6', en: 'Cat. 6 Business travel', id_: 'Kat. 6 Perjalanan bisnis', unit: 'ribu pax-km', factor: 115, qty: 5860, src: 'DEFRA 2024' },
    { id: 'c7', en: 'Cat. 7 Employee commuting', id_: 'Kat. 7 Komuter karyawan', unit: 'ribu pax-km', factor: 88, qty: 9240, src: 'DEFRA 2024' },
    { id: 'c11', en: 'Cat. 11 Use of sold products', id_: 'Kat. 11 Penggunaan produk terjual', unit: 'ribu boe', factor: 402000, qty: 21400, src: 'IPIECA' },
  ],
};
