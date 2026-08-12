# Sumber kode proyek

repo: wepe17/gri-report
branch: main

Repo ini berisi ekspor **versi lebih lama** dari aplikasi yang sama (index.html hasil build + gri-data.js + gri-logic.js + nocturne.css). Proyek di sini sudah lebih maju: repo belum memuat modul analisis dokumen maupun perbaikan akurasi data. Tidak ada komponen dari repo yang perlu diadopsi — arah sinkronisasinya dari proyek ini ke repo.

## Last sync

date: 2026-08-12T11:32:40Z
commit: b04d98d13440

### Updated in this project
- Layar baru "Analisis dokumen": unggah laporan, pemindaian, skor kesesuaian, temuan per disclosure + rekomendasi perbaikan, dan pembuatan tugas (`gri-analysis.js`, belum ada di repo).
- Tabel rincian pada form disclosure kini dapat diisi dan tersimpan, dengan baris pemilahan spesifik per disclosure (`breakdownRows` di `gri-logic.js`).
- Disclosure naratif tidak lagi diberi nilai/satuan angka; antrean review menampilkan cuplikan narasi.
- Baris seri standar kosong dihilangkan dari grafik kelengkapan; content index dan register dibatasi 60 baris per tampilan.

## Screen map

| Layar di proyek ini | Berkas |
| --- | --- |
| Ringkasan, Disclosure, Detail, Materialitas, Kalkulator GRK, Review, Indeks & ekspor, Administrasi | `index.html` (repo: `index.html`) |
| Katalog standar GRI, entitas, pengguna, faktor emisi, pemetaan POJK/IFRS | `gri-data.js` (repo: `gri-data.js`) |
| Teks antarmuka, pembangkit data, util format | `gri-logic.js` (repo: `gri-logic.js`) |
| Analisis dokumen (mesin temuan & rekomendasi) | `gri-analysis.js` (belum ada di repo) |
| Token & komponen visual | `nocturne.css` (repo: `nocturne.css`) |
