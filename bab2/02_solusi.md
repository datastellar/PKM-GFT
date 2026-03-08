# 2.2 Solusi yang Ditawarkan: Rancangan Model 4-Layer


---

Berdasarkan identifikasi kondisi dan kesenjangan yang diuraikan pada bagian sebelumnya, gagasan ini mengusulkan **Rancangan Model Interoperabilitas SPBE Berbasis *Federated Data Governance*** sebagai sebuah kerangka arsitektur sistem informasi berlapis yang dapat dijadikan referensi pengembangan ekosistem pertukaran data antar kementerian di Indonesia. Model ini tidak bertujuan menggantikan sistem yang sudah ada, melainkan menyediakan fondasi tata kelola yang memungkinkan sistem-sistem tersebut untuk saling berkomunikasi secara terstandarisasi.

Berbeda dari pendekatan integrasi yang lazim — yang cenderung langsung menghubungkan sistem secara teknis melalui API — model ini mengadopsi prinsip *governance-first*: memastikan bahwa kejelasan kepemilikan data, standar metadata, dan mekanisme tata kelola sudah tersedia sebelum integrasi teknis dilakukan. Klischewski dan Scholl (2008) menegaskan bahwa interoperabilitas teknis saja tidak akan menghasilkan manfaat nyata jika kualitas dan standar data dari sistem-sistem sumber masih berbeda-beda. Oleh karena itu, model ini dirancang secara berjenjang dari fondasi ke atas, sebagaimana digambarkan dalam diagram berikut:

```
┌─────────────────────────────────────────────────────────┐
│  LAYER 4: SERVICE LAYER                                 │
│  Layanan Publik Terintegrasi — Portal, Super-App Gov    │
├─────────────────────────────────────────────────────────┤
│  LAYER 3: INTEROPERABILITY LAYER                        │
│  API Exchange — Data Catalog Nasional — Semantic Bridge │
├─────────────────────────────────────────────────────────┤
│  LAYER 2: DOMAIN LAYER                                  │
│  5 Domain Prioritas dengan Standar Metadata Baku        │
│  [Kependudukan | Kesehatan | Pendidikan | Ekonomi       │
│   | Keuangan Negara]                                    │
├─────────────────────────────────────────────────────────┤
│  LAYER 1: GOVERNANCE LAYER  ◄── FONDASI                 │
│  Data Owner + Data Steward + Kebijakan Metadata Bersama │
└─────────────────────────────────────────────────────────┘
           ↑ setiap layer bergantung pada layer di bawahnya
```

### Layer 1 — Governance Layer (Fondasi)

Layer pertama adalah fondasi keseluruhan model. Tanpa kejelasan tata kelola di tingkat ini, tidak ada satu pun layer di atasnya yang dapat berfungsi dengan benar. DAMA International (2017) menempatkan *Data Governance* sebagai knowledge area inti dari kerangka kerja DAMA-DMBOK — inti yang mengatur penetapan wewenang, kebijakan, dan tanggung jawab atas data di seluruh organisasi.

Dalam konteks pemerintahan lintas kementerian, Governance Layer mencakup tiga komponen utama:

- **Penetapan *Data Owner*:** Setiap kementerian menetapkan pejabat setingkat eselon I yang bertanggung jawab secara strategis atas data di domain instansinya. *Data Owner* memiliki otoritas untuk menyetujui standar data, kebijakan akses, dan penggunaan data secara lintas instansi.
- **Penugasan *Data Steward*:** Di tingkat teknis, setiap instansi menunjuk *Data Steward* yang bertugas mengelola dan menjaga kualitas data sehari-hari, serta menjadi penghubung (*liaison*) dalam forum koordinasi antar kementerian.
- **Kebijakan Metadata Bersama (*Metadata Policy*):** Ditetapkan secara kolektif melalui *Data Steward Committee* — forum lintas kementerian yang disepakati melalui SK Menteri PANRB, tidak memerlukan pembentukan undang-undang baru.

Pendekatan ini mengikuti prinsip *Non-Invasive Data Governance* yang dikembangkan oleh Seiner (2014): tata kelola data yang efektif tidak harus memaksa perubahan besar pada struktur organisasi, melainkan dengan memformalisasi tanggung jawab yang secara informal sudah ada, untuk menghindari resistensi birokrasi yang tinggi. Ini menjadikan Layer 1 realistis untuk diimplementasikan dalam ekosistem birokrasi Indonesia.

### Layer 2 — Domain Layer

Layer kedua bertugas mengorganisasi data pemerintah berdasarkan domain fungsional yang jelas, sehingga setiap domain memiliki standar format dan klasifikasi data yang disepakati. Haslhofer dan Klas (2010) dalam survei mereka di ACM Computing Surveys menegaskan bahwa standardisasi metadata adalah prasyarat mutlak bagi interoperabilitas semantik: tanpa keseragaman struktur dan tata nama data, sistem-sistem tidak dapat saling memahami data satu sama lain meskipun secara teknis sudah terhubung melalui API.

Model ini mengidentifikasi lima domain prioritas berdasarkan rekomendasi World Bank dalam kajian Satu Data Indonesia (Maghfirra, 2024):

| Domain | Instansi Pemilik (*Data Owner*) | Dasar Pemilihan |
|--------|--------------------------------|-----------------|
| Kependudukan | Kemendagri / Dukcapil | NIK sebagai identitas dasar semua domain lain |
| Kesehatan | Kementerian Kesehatan | Data peserta BPJS, rekam medis, penyakit menular |
| Pendidikan | Kemendikbudristek | Data peserta didik, ijazah, beasiswa |
| Ekonomi & Perdagangan | Kementerian Ekonomi / BI | Data transaksi, perizinan usaha, UMKM |
| Keuangan Negara | Kemenkeu / BPS | Anggaran, realisasi belanja, data statistik nasional |

Dalam domain ini, prinsip arsitektur *Data Mesh* (Dehghani, 2020) menjadi relevan: setiap domain mengelola datanya sendiri sebagai "produk data" yang siap dikonsumsi oleh domain lain, tanpa harus menyerahkan fisik database-nya ke satu tempat terpusat. Kontrol tetap terdesentralisasi di domain masing-masing, namun terikat oleh standar metadata bersama yang ditetapkan di Layer 1.

### Layer 3 — Interoperability Layer

Setelah Layer 1 dan Layer 2 terbentuk, Layer 3 menyediakan infrastruktur teknis pertukaran data antar domain. Ini adalah lapisan yang selama ini coba dibangun secara prematur oleh banyak inisiatif SPBE — tanpa fondasi dua layer di bawahnya. 

Komponen utama Layer 3 tidak sekadar API tradisional, melainkan mengadopsi elemen **Distributed Data-Sharing** seperti pada model GLASS (ArXiv, 2022):
- **National API Exchange (*Government Service Bus*):** Middleware terpusat yang menjadi titik pertukaran sesuai Permenkomdigi No. 6 Tahun 2025.
- **Federated Data Catalog:** Direktori metadata terpusat yang mendaftarkan seluruh aset data pemerintahan, memungkinkan instansi untuk menemukan keberadaan (*discoverability*) suatu data tanpa sistem pusat harus menyedot isi (*raw content*) data tersebut.
- **Privacy-Preserving Semantic Bridge:** Mekanisme pemetaan otomatis antar skema metadata domain yang memastikan pertukaran data aman, di mana instansi pemilik memiliki otonomi untuk mengawasi jejak akses datanya secara transparan.

### Layer 4 — Service Layer

Layer teratas adalah eksekusi layanan yang dirasakan langsung oleh masyarakat dan pembuat kebijakan. Dengan fondasi tiga layer di bawahnya berjalan, Service Layer memungkinkan:

- **Layanan *Citizen-Centric* Berbasis *Single-View*:** Warga cukup teridentifikasi sekali di Dukcapil. Setiap kali warga mengajukan layanan di instansi lain (misal beasiswa Kemendikbud), model distribusi data otomatis akan memverifikasi syarat tanpa mengharuskan warga mengunggah KTP berulang kali, sesuai prinsip _once-only principle_.
- **Dashboard Kebijakan *Real-Time*:** Pembuat kebijakan di tingkat pusat dapat mengeksekusi *query* komprehensif melintasi seluruh domain untuk merumuskan simulasi dampak kebijakan tanpa memindahkan wujud fisik basis data masing-masing instansi.
- **Fondasi *Federated AI Government* 2045:** Wirtz et al. (2019) dan World Bank menegaskan integrasi data sebagai syarat mutlak pemanfaatan kecerdasan buatan. Melalui arsitektur terdesentralisasi ini, infrastruktur siap menopang algoritma *Federated Learning* ─ model AI masa depan milik pemerintah dapat "belajar" kebijakan dari server antar-kementerian, menciptakan kecerdasan analitik level dewa tanpa membahayakan kedaulatan data di tiap institusi.

### Novelty Model Ini

Kebanyakan inisiatif integrasi aplikasi SPBE Indonesia selama ini bersifat *technology-first*, mencoba mengkoneksikan ratusan API tanpa terlebih dahulu merapikan arsitektur tata kelola organisasi, sehingga berujung pada penolakan *data owner* serta lahirnya silo-silo baru yang saling tak kompatibel (BRIN, 2023).

Novelty utama dari gagasan ini terletak pada **sintesis tiga spektrum literatur global** yang secara orisinil dirangkai untuk menjawab tantangan negara berkembang berskala besar seperti Indonesia. Proposal ini meleburkan: 1) Preskripsi tata kelola korporasi *Data Management Body of Knowledge* (DAMA-DMBOK) untuk pembenahan fondasi regulatif, 2) Prinsip otonomi *Data Mesh* per domain kepenanggungjawaban, serta 3) Model mutakhir pertukaran *Citizen-Centric Distributed Data-Sharing* (GLASS) yang menawarkan paradigma terdesentralisasi *privacy-preserving*. Sintesis gagasan ini menjamin orisinalitas riset dalam menggabungkan perbaikan struktural dengan kelayakan teknologi futuristik secara komprehensif.

### Output PKM yang Dihasilkan

Sebagai gagasan konseptual, model ini menghasilkan empat output yang terukur:

1. **Model Arsitektur 4-Layer** — diagram dan deskripsi lengkap model Governance → Domain → Interoperability → Service Layer
2. **Framework Tata Kelola Data Federatif** — skema peran *Data Owner* & *Data Steward* lintas kementerian beserta mekanisme penetapan standar metadata bersama
3. **Blueprint Standar Metadata per Domain** — rancangan kamus data (*data dictionary*) untuk 5 domain prioritas
4. **Roadmap Implementasi Bertahap 2025–2045** — tabel 4-fase dengan target, aktor, dan indikator keberhasilan per fase
