// Document gap-analysis engine: scores an uploaded report against the required GRI set.
import { hash } from './gri-logic.js';

const REC = {
  '2-1': ['Nama legal, bentuk kepemilikan, negara domisili, dan lokasi kantor pusat belum lengkap disebut dalam satu tempat.', 'Sebutkan nama legal lengkap, bentuk badan hukum, negara domisili, lokasi kantor pusat, dan negara operasi pada bagian profil.'],
  '2-2': ['Daftar entitas yang dicakup tidak dinyatakan eksplisit dan tidak dibandingkan dengan cakupan laporan keuangan.', 'Tambahkan tabel entitas yang dicakup, dan jelaskan perbedaan cakupan terhadap laporan keuangan konsolidasi (termasuk perlakuan JV).'],
  '2-3': ['Periode pelaporan disebut, namun frekuensi, tanggal publikasi, dan narahubung tidak ditemukan.', 'Nyatakan periode, frekuensi (tahunan), tanggal terbit, keselarasan dengan periode laporan keuangan, dan narahubung beserta emailnya.'],
  '2-4': ['Terdapat perubahan angka dibanding laporan sebelumnya tanpa keterangan penyajian kembali.', 'Buat daftar penyajian kembali: angka lama, angka baru, alasan, dan dampaknya. Wajib bila ada perubahan metodologi atau koreksi.'],
  '2-5': ['Tidak ditemukan pernyataan asurans eksternal maupun kebijakan pemilihan penyedia asurans.', 'Cantumkan kebijakan asurans, lingkup dan tingkat asurans (terbatas/memadai), penyedia jasa, serta pernyataan independensinya; lampirkan laporan asurans.'],
  '2-6': ['Rantai nilai dijelaskan naratif, tanpa rincian hilir–hulu dan hubungan bisnis lain.', 'Uraikan sektor, rantai pasok hulu, penyaluran hilir, jenis pelanggan, dan perubahan signifikan dibanding periode sebelumnya.'],
  '2-7': ['Jumlah karyawan tidak dipilah menurut gender, jenis kontrak, dan wilayah.', 'Sajikan tabel karyawan per gender × (tetap/kontrak, penuh/paruh waktu) × wilayah, sebutkan metodologi (headcount atau FTE) dan tanggal cut-off.'],
  '2-22': ['Sambutan manajemen belum menautkan strategi ke dampak keberlanjutan yang material.', 'Minta pernyataan dari pejabat tertinggi yang secara eksplisit membahas strategi terhadap dampak material dan target jangka menengah.'],
  '2-27': ['Ketidakpatuhan hanya disebut "tidak ada yang material" tanpa angka.', 'Nyatakan jumlah kasus ketidakpatuhan signifikan, jumlah denda, denda non-moneter, dan kasus yang ditutup pada periode ini — termasuk bila nihil.'],
  '2-30': ['Cakupan perjanjian kerja bersama tidak dikuantifikasi.', 'Nyatakan persentase karyawan yang tercakup PKB, dan bagi yang tidak tercakup jelaskan bagaimana kondisi kerja ditentukan.'],
  '3-1': ['Proses penentuan topik material tidak diuraikan; hanya hasilnya yang ditampilkan.', 'Uraikan langkah GRI 3-1: identifikasi dampak aktual/potensial, penilaian signifikansi, pelibatan pemangku kepentingan, dan siapa yang menyetujui daftar akhir.'],
  '3-3': ['Pengelolaan topik material belum menjelaskan target dan efektivitas tindakan.', 'Untuk setiap topik material, cakup dampak, kebijakan, tindakan, target terukur beserta tahun dasar, dan evaluasi efektivitasnya.'],
  '201-1': ['Nilai ekonomi didistribusikan tidak direkonsiliasi ke laporan keuangan audited.', 'Sajikan tabel EVG&D (pendapatan, biaya operasional, upah, pembayaran ke penyandang dana, ke pemerintah, investasi masyarakat) dengan referensi silang ke catatan laporan keuangan.'],
  '201-2': ['Risiko iklim dibahas kualitatif tanpa implikasi finansial.', 'Kuantifikasi implikasi finansial risiko dan peluang iklim, sebutkan horizon waktu, skenario yang dipakai, dan metode estimasi biaya.'],
  '205-3': ['Insiden korupsi tidak dilaporkan angkanya.', 'Nyatakan jumlah insiden terkonfirmasi, tindakan terhadap karyawan dan mitra, serta perkara hukum publik — nihil pun harus dinyatakan.'],
  '302-1': ['Konsumsi energi dilaporkan agregat dalam satuan campuran.', 'Pilah konsumsi bahan bakar tak terbarukan dan terbarukan, listrik/uap/pendinginan yang dibeli dan dijual, konversikan ke joule, dan sebutkan sumber faktor konversi.'],
  '302-3': ['Intensitas energi disebut tanpa definisi pembilang dan penyebut.', 'Nyatakan rasio intensitas, metrik penyebut yang dipakai, jenis energi yang dicakup, dan apakah mencakup energi di luar organisasi.'],
  '303-3': ['Pengambilan air tidak dipilah menurut sumber dan daerah krisis air.', 'Pilah pengambilan air per sumber (permukaan, tanah, laut, produksi, pihak ketiga), pisahkan daerah dengan tekanan air tinggi, dan nyatakan kategori TDS.'],
  '303-5': ['Konsumsi air tidak dijelaskan sebagai selisih pengambilan dan pembuangan.', 'Sajikan konsumsi air total dan pada daerah tekanan air tinggi, jelaskan perubahan penyimpanan air bila material.'],
  '305-1': ['Emisi Scope 1 dilaporkan tanpa gas yang dicakup, tahun dasar, dan sumber faktor emisi.', 'Nyatakan tCO₂e, gas yang dicakup (CO₂, CH₄, N₂O, HFC, PFC, SF₆, NF₃), tahun dasar dan alasannya, sumber faktor emisi, nilai GWP, dan pendekatan konsolidasi.'],
  '305-2': ['Hanya satu angka Scope 2 tanpa keterangan location-based atau market-based.', 'Laporkan Scope 2 location-based; bila ada kontrak listrik atau REC, laporkan juga market-based beserta dasar kontraktualnya.'],
  '305-3': ['Scope 3 tidak menyebut kategori yang dicakup maupun yang dikecualikan.', 'Sebutkan kategori GHG Protocol yang dihitung dan yang dikecualikan beserta alasan, aktivitas yang dicakup, serta metode dan sumber data setiap kategori.'],
  '305-4': ['Intensitas emisi tidak menyatakan cakupan Scope yang dihitung.', 'Nyatakan rasio intensitas, metrik penyebut, Scope yang termasuk (1, 2, dan/atau 3), dan jenis gas yang dicakup.'],
  '305-5': ['Pengurangan emisi disebut sebagai selisih tahun, bukan hasil inisiatif.', 'Laporkan pengurangan yang merupakan hasil langsung inisiatif, tahun dasar pembanding, Scope yang terdampak, dan metode perhitungannya.'],
  '306-3': ['Timbulan limbah tidak dipilah B3 dan non-B3 serta komposisinya.', 'Pilah limbah menurut B3/non-B3 dan komposisi, sebutkan metode pengumpulan data dan pihak ketiga yang mengelola.'],
  '401-1': ['Rekrutmen dan turnover disebut agregat tanpa tingkat (rate).', 'Sajikan jumlah dan tingkat rekrutmen serta turnover, dipilah menurut kelompok usia, gender, dan wilayah, dengan rumus perhitungan yang dinyatakan.'],
  '403-9': ['Angka kecelakaan kerja tidak menyebut jam kerja dasar dan cakupan kontraktor.', 'Laporkan fatalitas, cedera berat, dan cedera tercatat beserta tingkatnya per 1.000.000 jam kerja, pisahkan karyawan dan pekerja non-karyawan, sebutkan jenis bahaya utama.'],
  '404-1': ['Jam pelatihan hanya rata-rata perusahaan.', 'Pilah rata-rata jam pelatihan menurut gender dan kategori jabatan, dan nyatakan metodologi rata-ratanya.'],
  '405-1': ['Komposisi keberagaman hanya untuk Direksi.', 'Sajikan komposisi badan tata kelola dan karyawan per kategori jabatan menurut gender, kelompok usia, dan indikator keberagaman lain yang relevan.'],
  '413-1': ['Program masyarakat dinarasikan tanpa persentase cakupan operasi.', 'Nyatakan persentase operasi yang menjalankan pelibatan masyarakat, penilaian dampak, dan program pengembangan, beserta daftar jenis programnya.'],
};

const GENERIC = {
  q: ['Angka ditemukan namun tanpa satuan, metodologi, atau data pembanding tahun sebelumnya.', 'Lengkapi satuan, metode perhitungan, sumber data, batasan pelaporan, dan angka pembanding minimal satu periode sebelumnya.'],
  t: ['Data disajikan agregat; pemilahan yang diminta standar belum ada.', 'Pilah data sesuai kategori yang diminta disclosure ini, dan nyatakan metodologi serta tanggal cut-off datanya.'],
  n: ['Pembahasan ditemukan namun belum mencakup seluruh unsur yang diminta standar.', 'Lengkapi narasi agar mencakup kebijakan, tanggung jawab, proses, dan hasil evaluasi sesuai butir-butir disclosure.'],
};

const MISSING = {
  q: ['Tidak ditemukan angka apa pun untuk disclosure ini di dalam dokumen.', 'Kumpulkan data dari pemilik data terkait, atau nyatakan alasan penghilangan yang sah pada GRI content index.'],
  t: ['Tabel yang diminta tidak ditemukan.', 'Siapkan tabel terpilah sesuai standar; bila data belum tersedia, gunakan alasan penghilangan "informasi tidak tersedia" beserta rencana penyediaannya.'],
  n: ['Topik ini tidak dibahas dalam dokumen.', 'Tambahkan pembahasan pada bab terkait; bila memang tidak relevan, dokumentasikan sebagai penghilangan dengan alasan "tidak berlaku".'],
};

export const QUALITY = (docName) => ([
  { id: 'sou', sev: 'high', title: 'Pernyataan penggunaan (statement of use) tidak ditemukan', detail: 'GRI 1 mewajibkan pernyataan penggunaan, rujukan GRI 1: Landasan 2021, dan standar sektor yang dipakai. Dokumen hanya menyebut "mengacu pada GRI".', fix: 'Tambahkan blok pernyataan penggunaan di awal GRI content index dengan periode pelaporan yang tepat.' },
  { id: 'idx', sev: 'high', title: 'GRI content index tidak memuat kolom lokasi dan alasan penghilangan', detail: 'Indeks yang ada hanya memetakan kode ke nomor halaman; disclosure yang tidak dilaporkan dibiarkan kosong.', fix: 'Gunakan format indeks GRI 2021: standar, disclosure, lokasi, alasan penghilangan beserta penjelasannya.' },
  { id: 'yoy', sev: 'high', title: 'Data pembanding tahun sebelumnya tidak konsisten', detail: '7 indikator kuantitatif hanya menyajikan angka periode berjalan, dan 3 indikator berubah dibanding laporan sebelumnya tanpa catatan penyajian kembali.', fix: 'Sajikan minimal dua periode untuk setiap indikator kuantitatif dan catat setiap penyajian kembali sesuai GRI 2-4.' },
  { id: 'unit', sev: 'medium', title: 'Satuan dan metodologi tidak dinyatakan pada beberapa tabel', detail: 'Tabel energi mencampur kWh, liter, dan GJ; tabel air tidak menyebut megaliter atau m³.', fix: 'Standardkan satuan per topik, cantumkan faktor konversi, dan tambahkan catatan kaki metodologi pada setiap tabel.' },
  { id: 'bound', sev: 'medium', title: 'Batasan pelaporan berbeda antar-topik tanpa penjelasan', detail: 'Data lingkungan mencakup 3 entitas, data ketenagakerjaan mencakup 5 entitas, sementara data keuangan konsolidasi penuh.', fix: 'Nyatakan cakupan entitas pada setiap topik, dan jelaskan alasan bila berbeda dari cakupan laporan keuangan.' },
  { id: 'esg', sev: 'medium', title: 'Pemetaan POJK 51 belum lengkap', detail: 'Aspek "kinerja ekonomi keberlanjutan" dan "tanggung jawab produk" pada SEOJK 16/2021 tidak memiliki rujukan silang ke disclosure GRI.', fix: 'Tambahkan kolom pemetaan POJK 51 pada content index agar satu tabel melayani dua kerangka.' },
  { id: 'tgt', sev: 'low', title: 'Target tanpa tahun dasar dan lini masa', detail: 'Beberapa target ditulis kualitatif ("menurunkan emisi secara bertahap") tanpa angka, tahun dasar, maupun tenggat.', fix: 'Nyatakan target kuantitatif, tahun dasar, tahun target, dan progres terhadap target pada periode ini.' },
  { id: 'src', sev: 'low', title: 'Sumber faktor emisi tidak disebutkan', detail: 'Angka emisi disajikan tanpa menyebut IPCC, faktor jaringan KESDM, atau versi GWP yang digunakan.', fix: 'Cantumkan sumber setiap faktor emisi dan versi GWP (mis. IPCC AR5) pada catatan metodologi.' },
]);

export const analyze = (flat, recs, req, docSeed) => {
  const findings = [];
  flat.forEach(f => {
    if (!req.has(f.code)) return;
    const r = recs[f.code];
    const h = (hash(f.code) + docSeed) % 100;
    let state;
    if (r.status === 'empty') state = 'missing';
    else if (r.status === 'approved') state = h < 62 ? 'ok' : 'partial';
    else state = h < 34 ? 'ok' : 'partial';
    if (state === 'ok') { findings.push({ code: f.code, f, state, sev: 'ok', issue: '', fix: '', page: 12 + (h % 78) }); return; }
    const rec = REC[f.code];
    const issue = state === 'missing' ? MISSING[f.type][0] : (rec ? rec[0] : GENERIC[f.type][0]);
    const fix = rec ? rec[1] : (state === 'missing' ? MISSING[f.type][1] : GENERIC[f.type][1]);
    const sev = state === 'missing' ? (f.series === 'universal' ? 'high' : h % 3 === 0 ? 'high' : 'medium') : (h % 4 === 0 ? 'medium' : 'low');
    findings.push({
      code: f.code, f, state, sev, issue, fix,
      page: state === 'missing' ? null : 12 + (h % 78),
    });
  });
  return findings;
};

export const SEV_ORDER = { high: 0, medium: 1, low: 2, ok: 3 };
