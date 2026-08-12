// i18n strings + record builders for the GRI reporting app.
export const strings = (l) => {
  const L = (id, en) => (l === 'en' ? en : id);
  return {
    navDash: L('Ringkasan', 'Overview'), navList: L('Disclosure', 'Disclosures'), navMat: L('Materialitas', 'Materiality'),
    navGhg: L('Kalkulator GRK', 'GHG calculator'), navReview: L('Review & approval', 'Review & approval'),
    navReport: L('Indeks & ekspor', 'Index & export'), navAdmin: L('Administrasi', 'Administration'),
    assurance: L('Kesiapan asurans terbatas', 'Limited assurance readiness'),
    readOnlyNote: L('Mode auditor — hanya baca. Anda dapat menelusuri nilai, sumber data, bukti, dan jejak audit.', 'Auditor mode — read only. You can trace values, data sources, evidence and the audit trail.'),
    dashTitle: L('Ringkasan pelaporan GRI', 'GRI reporting overview'),
    dashSub: L('GRI Standards 2021 · standar universal, topik, dan sektor', 'GRI Standards 2021 · universal, topic and sector standards'),
    exportBtn: L('Ekspor', 'Export'), bySeries: L('Kelengkapan per seri standar', 'Completeness by standard series'),
    requiredOnly: L('hanya disclosure wajib', 'required disclosures only'),
    stApproved: L('Disetujui', 'Approved'), stReview: L('Menunggu review', 'In review'), stDraft: L('Draf', 'Draft'),
    deadlines: L('Tenggat terdekat', 'Nearest deadlines'), trailTitle: L('Jejak audit terbaru', 'Recent audit trail'),
    listTitle: L('Daftar disclosure', 'Disclosure register'), searchPh: L('Cari kode atau judul…', 'Search code or title…'),
    materialOnly: L('Hanya yang wajib', 'Required only'), reset: L('Reset', 'Reset'),
    colCode: L('Kode', 'Code'), colTitle: L('Disclosure', 'Disclosure'), colStatus: L('Status', 'Status'),
    colPic: L('PIC', 'Owner'), colDue: L('Tenggat', 'Due'), colEvidence: L('Bukti', 'Evidence'),
    material: L('wajib', 'required'), backList: L('Kembali ke daftar', 'Back to register'),
    saveDraft: L('Simpan draf', 'Save draft'), dataEntry: L('Pengisian data', 'Data entry'),
    value: L('Nilai', 'Value'), unit: L('Satuan', 'Unit'), prevYear: 'FY 2024',
    breakdown: L('Rincian', 'Breakdown'), narrative: L('Narasi / penjelasan', 'Narrative'),
    method: L('Metodologi & standar acuan', 'Methodology & standard used'), boundary: L('Batasan pelaporan', 'Reporting boundary'),
    source: L('Sumber data', 'Data source'), omissionLabel: L('Alasan penghilangan (GRI 1)', 'Omission reason (GRI 1)'),
    evidence: L('Bukti & kertas kerja', 'Evidence & working papers'), addEvidence: L('Unggah', 'Upload'),
    noEvidence: L('Belum ada bukti terlampir — asurans akan menandai ini.', 'No evidence attached — assurance will flag this.'),
    assignment: L('Penugasan', 'Assignment'), audit: L('Jejak audit', 'Audit trail'),
    comments: L('Catatan review', 'Review notes'), commentPh: L('Tulis catatan…', 'Write a note…'), send: L('Kirim', 'Send'),
    matTitle: L('Materialitas & pemetaan disclosure', 'Materiality & disclosure mapping'),
    matSub: L('GRI 3 · dampak aktual dan potensial, ditimbang dengan standar sektor', 'GRI 3 · actual and potential impacts, weighed against the sector standard'),
    colTopicNo: 'No.', colTopic: L('Topik sektor', 'Sector topic'),
    colImpact: L('Signifikansi dampak', 'Impact significance'), colStake: L('Kepentingan stakeholder', 'Stakeholder concern'),
    colLinked: L('Disclosure', 'Disclosures'), colMaterial: L('Material', 'Material'),
    matrix: L('Matriks materialitas', 'Materiality matrix'), axisY: L('Kepentingan stakeholder', 'Stakeholder concern'),
    axisX: L('Signifikansi dampak', 'Impact significance'),
    matrixNote: L('Titik terang = topik material; posisi dihitung dari kedua skor.', 'Lit dots are material topics; position comes from both scores.'),
    gri3Impact: L('Efek ke 3-2 dan daftar wajib', 'Effect on 3-2 and the required set'),
    viewRequired: L('Lihat disclosure wajib', 'View required disclosures'),
    ghgTitle: L('Kalkulator emisi GRK', 'GHG emissions calculator'),
    ghgSub: L('GHG Protocol · faktor IPCC, KESDM, DEFRA — hasil mengisi 305-1 s.d. 305-4', 'GHG Protocol · IPCC, KESDM and DEFRA factors — results feed 305-1 to 305-4'),
    pushGhg: L('Kirim hasil ke 305-1 … 305-4', 'Push results to 305-1 … 305-4'),
    colActivity: L('Aktivitas', 'Activity'), colQty: L('Kuantitas', 'Quantity'),
    colFactor: L('Faktor (kgCO₂e/satuan)', 'Factor (kgCO₂e/unit)'), colSource: L('Sumber faktor', 'Factor source'),
    intensity: L('Intensitas (305-4)', 'Intensity (305-4)'), production: L('Produksi (ribu boe)', 'Production (thousand boe)'),
    revenue: L('Pendapatan (Rp miliar)', 'Revenue (IDR bn)'),
    reviewTitle: L('Antrean review & approval', 'Review & approval queue'),
    open: L('Buka', 'Open'), returnBtn: L('Kembalikan', 'Return'), approve: L('Setujui', 'Approve'),
    submittedBy: L('Diajukan oleh', 'Submitted by'),
    queueEmpty: L('Tidak ada item menunggu review.', 'Nothing awaiting review.'),
    indexTitle: L('GRI content index & ekspor', 'GRI content index & export'),
    showMapping: L('Tampilkan pemetaan POJK 51 & IFRS S1/S2', 'Show POJK 51 & IFRS S1/S2 mapping'),
    colStandard: L('Standar', 'Standard'), colDisclosure: L('Disclosure', 'Disclosure'),
    colLocation: L('Lokasi', 'Location'), colOmission: L('Penghilangan', 'Omission'),
    adminTitle: L('Administrasi', 'Administration'),
    adminSub: L('Entitas pelaporan, periode, pengguna, dan standar sektor', 'Reporting entities, periods, users and sector standard'),
    entities: L('Entitas pelaporan (2-2)', 'Reporting entities (2-2)'), entity: L('Entitas', 'Entity'),
    scope: L('Cakupan', 'Scope'), headcount: L('Karyawan', 'Employees'),
    sectorStd: L('Standar sektor GRI', 'GRI Sector Standard'), users: L('Pengguna & peran', 'Users & roles'),
    name: L('Nama', 'Name'), role: L('Peran', 'Role'), assigned: L('Ditugaskan', 'Assigned'),
    periods: L('Periode pelaporan (2-3)', 'Reporting periods (2-3)'), period: L('Periode', 'Period'),
    exportTitle: L('Ekspor laporan', 'Export report'), cancel: L('Batal', 'Cancel'), generate: L('Buat berkas', 'Generate'),
    returnTitle: L('Kembalikan ke PIC', 'Return to owner'), returnReason: L('Alasan & permintaan perbaikan', 'Reason & requested fix'),
  };
};

export const statusLabels = (l) => (l === 'en'
  ? { approved: 'Approved', review: 'In review', draft: 'Draft', empty: 'Not started' }
  : { approved: 'Disetujui', review: 'Menunggu review', draft: 'Draf', empty: 'Belum diisi' });

export const tagClasses = { approved: 'tag-accent', review: 'tag-accent-2', draft: 'tag-neutral', empty: 'tag-outline' };

export const hash = (s) => { let x = 7; for (let i = 0; i < s.length; i++) x = (x * 31 + s.charCodeAt(i)) >>> 0; return x % 100; };

export const fmtDue = (s) => { const p = String(s).split('-'); return p[2] + '/' + p[1] + '/' + p[0].slice(2); };

export const flatten = (D) => {
  const out = [];
  D.topics.forEach(t => t.disclosures.forEach(d => out.push({
    code: d[0], en: d[1], id: d[2], type: d[3],
    std: t.std, topicEn: t.en, topicId: t.id, series: t.series,
  })));
  return out;
};

const UNITS = { 305: 'tCO₂e', 302: 'GJ', 303: 'megaliter', 306: 'ton', 301: 'ton', 404: 'jam/karyawan', 403: 'kasus', 201: 'Rp miliar', 405: '%', 401: 'orang' };
const OWNER = { environmental: 'bp', social: 'dw', economic: 'fh', universal: 'sn', sector: 'ar' };
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr'];

export const buildRecords = (D, flat, fill) => {
  const recs = {};
  const nameOf = id => (D.people.find(p => p.id === id) || D.people[0]).name;
  flat.forEach(f => {
    const h = hash(f.code);
    let status = 'empty';
    if (h < fill * 0.5) status = 'approved';
    else if (h < fill * 0.76) status = 'review';
    else if (h < fill) status = 'draft';
    const pic = OWNER[f.series] || 'ar';
    const unit = f.code === '305-4' ? 'tCO₂e/ribu boe' : (UNITS[Number(f.code.split('-')[0])] || '%');
    const scale = f.code.indexOf('305') === 0 ? 12480 : f.code.indexOf('302') === 0 ? 3240 : 47;
    const base = 1 + (h % 9);
    const day = 1 + (h % 27), mon = 2 + (h % 3);
    const dd = (n) => (n < 10 ? '0' + n : '' + n);
    const filled = status !== 'empty';
    recs[f.code] = {
      status, pic, due: '2026-' + dd(mon) + '-' + dd(day),
      value: filled ? (base * scale).toLocaleString('id-ID') : '',
      unit,
      prev: filled ? Math.round(base * scale * 0.94).toLocaleString('id-ID') : '—',
      narrative: null,
      method: filled ? (f.series === 'environmental' ? 'GHG Protocol / IPCC 2006, faktor KESDM' : f.series === 'social' ? 'Rekapitulasi HRIS, definisi GRI 401/403' : 'Kompilasi data internal, direkonsiliasi ke laporan audited') : '',
      boundary: filled ? 'Seluruh entitas terkonsolidasi' : '',
      source: filled ? (f.series === 'social' ? 'HRIS Sunfish' : f.series === 'economic' ? 'SAP FICO' : f.series === 'environmental' ? 'Meter operasi & sistem HSE' : 'Sekretariat Perusahaan') : '',
      omission: 'none',
      evidence: filled
        ? [{ name: 'Kertas kerja ' + f.code + '.xlsx', meta: '184 KB · ' + day + ' ' + MONTHS[mon - 1] + ' 2026' }].concat(
          h % 3 === 0 ? [{ name: 'Bukti pendukung ' + f.code + '.pdf', meta: '1,2 MB · ' + day + ' ' + MONTHS[mon] + ' 2026' }] : [])
        : [],
      trail: [{ what: 'Disclosure dibuat dari template GRI Standards 2021', meta: '12 Jan 2026 · Sistem' }]
        .concat(filled ? [{ what: 'Data diisi & kertas kerja diunggah', meta: day + ' Feb 2026 · ' + nameOf(pic) }] : [])
        .concat(status === 'review' || status === 'approved' ? [{ what: 'Dikirim untuk review', meta: day + ' Mar 2026 · ' + nameOf(pic) }] : [])
        .concat(status === 'approved' ? [{ what: 'Disetujui manajemen', meta: (day % 27 + 1) + ' Mar 2026 · Gunawan Kartika' }] : []),
      comments: h % 9 === 0 ? [{ text: 'Mohon lampirkan rekonsiliasi dengan laporan keuangan audited.', meta: 'Gunawan Kartika · 4 Mar 2026' }] : [],
    };
  });
  return recs;
};

export const buildMateriality = (D) => D.sectorTopics.map(([code, en, id, codes]) => {
  const h = hash(code);
  const impact = Math.min(5, 2 + Math.round(((h % 31) / 10) * 2) / 2);
  const stake = Math.min(5, 2 + Math.round((((h * 7) % 31) / 10) * 2) / 2);
  return { code, en, id, codes, impact, stake, material: (impact + stake) / 2 >= 3.4 };
});

export const num = (v) => parseFloat(String(v).replace(/\./g, '').replace(',', '.').replace(/[^\d.]/g, '')) || 0;
export const fmtN = (n) => Math.round(n).toLocaleString('id-ID');
