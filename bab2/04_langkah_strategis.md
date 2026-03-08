# 2.4 Langkah Strategis & Timeline Implementasi


---

Implementasi model interoperabilitas SPBE berbasis *federated data governance* tidak dapat dilakukan secara revolusioner atau sekaligus. Pengalaman Estonia membuktikan bahwa pencapaian ekosistem e-government kelas dunia membutuhkan waktu hampir dua dekade — dimulai dari penetapan kebijakan dasar pada awal 2000-an hingga X-Road menghubungkan lebih dari 900 sistem pada periode berikutnya (Kalvet, 2012). Roadmap Indonesia 2025–2045 yang diusulkan di sini adalah bentang waktu 20 tahun dengan empat fase yang saling bergantung, bukan empat proyek yang berjalan paralel.

Pendekatan ini mengikuti prinsip *Non-Invasive Data Governance* (Seiner, 2014): perubahan dimulai dari formalisasi apa yang sudah ada, bukan membangun ulang dari nol. Bank Dunia juga merekomendasikan hal serupa dalam kajian Satu Data Indonesia — bahwa integrasi data berskala nasional harus dimulai dari domain yang paling krusial secara bertahap, bukan mengintegrasikan semua kementerian sekaligus (Maghfirra, 2024).

---

### Tabel Roadmap 4 Fase (2025–2045)

| Fase | Periode | Nama Fase | Kegiatan Utama | Layer Aktif | Indikator Keberhasilan |
|------|---------|-----------|----------------|-------------|------------------------|
| **1** | 2025–2027 | **Fondasi Governance** | • Audit tata kelola data di 5 K/L pilot (Kemendagri, Kemenkes, Kemendikbud, Kemenkeu, BPS)<br>• Pemetaan *data owner* & standar data eksisting per domain<br>• Pembentukan *Data Steward Committee* via SK KemenPAN-RB<br>• Penyusunan kebijakan metadata nasional pertama | Layer 1 (Governance) | SK *Data Steward Committee* terbit; peta silo data 5 domain tersedia; *data owner* tiap domain terdefinisi resmi |
| **2** | 2027–2030 | **Standarisasi Domain** | • Penetapan Standar Metadata Nasional (*National Metadata Registry*) untuk 5 domain prioritas<br>• Piloting API antar 5 K/L (*Government Service Bus* versi awal)<br>• Formalisasi kamus data (*data dictionary*) per domain<br>• Evaluasi maturity model awal oleh BRIN | Layer 1–2 (Governance + Domain) | *Metadata Registry* nasional aktif; API lintas 5 K/L berfungsi; Indeks SPBE mulai naik di aspek interoperabilitas |
| **3** | 2030–2035 | **Integrasi Nasional** | • *Rollout Government Service Bus* ke seluruh 34+ K/L<br>• *Data Catalog Nasional* beroperasi penuh<br>• *Single-View* NIK berbasis Dukcapil tersedia di semua layanan publik<br>• Dashboard kebijakan lintas kementerian aktif (*real-time analytics*) | Layer 3 (Interoperability) | Indeks SPBE Nasional mencapai ≥ 3,5 dari skala 5; warga dapat mengakses seluruh layanan dengan 1 identitas NIK |
| **4** | 2035–2045 | **AI Government** | • Penerapan *Analytical AI* berbasis data lintas kementerian untuk prediksi kebutuhan layanan dan deteksi inefisiensi<br>• *Autonomous AI* pilot untuk rekomendasi kebijakan berbasis data nasional<br>• Posisi Indonesia sebagai benchmark tata kelola data pemerintah di ASEAN | Layer 4 (Service) | Sistem AI pemerintah beroperasi dengan data terintegrasi; Indonesia masuk 5 besar *government AI readiness* ASEAN |

---

### Justifikasi Setiap Fase

**Mengapa Fase 1 dimulai dari governance, bukan teknologi?**
Sesuai temuan BRIN (2023) tentang stagnasi Satu Data Indonesia, kegagalan integrasi selama ini justru terjadi karena langkah governance dilewati. Membangun teknologi tanpa *data owner* yang jelas dan standar metadata yang disepakati hanya akan menghasilkan koneksi yang rapuh — persis seperti Super Mantab yang teknologinya berfungsi tapi tidak bisa terhubung ke sistem nasional.

**Mengapa 5 K/L pilot, bukan semua sekaligus?**
Bank Dunia secara eksplisit merekomendasikan pendekatan bertahap berbasis domain prioritas untuk konteks Indonesia — tidak mengintegrasikan 40+ kementerian di tahun pertama (Maghfirra, 2024). Lima domain yang dipilih (Kependudukan, Kesehatan, Pendidikan, Ekonomi, Keuangan Negara) adalah domain yang datanya dibutuhkan oleh hampir semua kementerian lain, sehingga memiliki dampak multiplier tertinggi.

**Mengapa Fase 4 adalah AI Government?**
Wirtz, Weyerer, dan Geyer (2019) menegaskan bahwa penerapan AI yang bermakna di sektor publik mensyaratkan data yang berkualitas, konsisten, dan dapat diakses lintas instansi. Tanpa ekosistem interoperabilitas yang dibangun di Fase 1–3, sistem AI pemerintah tidak memiliki bahan bakar yang cukup. Layer 3 adalah prasyarat Layer 4, dan Fase 4 adalah *endgame* — kondisi yang menjadi tujuan akhir Visi Indonesia Emas 2045.

---

### Potensi Risiko dan Strategi Mitigasi

Sebuah kajian literatur terhadap kegagalan e-government oleh Heeks (2003) menemukan bahwa 35% proyek sistem pemerintah gagal total akibat *design-reality gap* — kesenjangan antara rancangan sistem dengan realitas organisasi yang menempatkan ego sektoral di atas rasionalitas teknis. Karenanya, implementasi model ini harus didampingi oleh mitigasi organisasional, bukan sekadar mitigasi teknologi:

| Identifikasi Risiko (*Design-Reality Gap*) | Akar Permasalahan | Strategi Mitigasi |
|--------------------------------------------|-------------------|-------------------|
| **Resistensi Berbagi Data / Ego Sektoral** | *Trust deficit* antar institusi dan ketakutan "disalahkan" jika data keluar (OECD, 2019) | Penggunaan model desentralisasi GLASS, di mana data tidak pernah diambil alih oleh kementerian lain, melainkan diam di instansi asal dan diakses secara *federated* |
| **Ketidakpatuhan Standar Domain** | Kultur operasional instansi (Heeks model) yang tidak sejalan dengan arahan pusat | Penetapan insentif *anggaran SPBE* dari Kemenkeu sebagai sanksi kepatuhan; alokasi pendanaan IT hanya cair jika instansi memenuhi standar metadata Layer 1 |
| **Kesulitan Migrasi Sistem Lama (Silo)** | Keengganan pegawai mengubah cara kerja administratif yang sudah nyaman bertahun-tahun | Pemilihan 5 K/L Prioritas sebagai pilot awal untuk menciptakan *success story*, bukan memaksakan integrasi 34 K/L secara serentak |

Dengan manajemen risiko ini, usulan model *Federated Data Governance* tidak beroperasi di "ruang hampa" utopis, melainkan berpijak pada lanskap riil sosiologis dan organisasional birokrasi pemerintahan Indonesia.
