# 1.1 Latar Belakang


---
Kami sempat membayangkan bagaimana pelayanan sektor publik di Indonesia akan berubah jika data yang ada di setiap instansi pemerintah dapat saling berinteraksi tanpa membawa tanda pengenal pun menggunakan bio identifikasi yang terdaftar di kesehatan saat kita lahir, kita dapat di identifikasi sebagai warga negara, kita butuh layanan apapun bukan cuma dapat diakses secara digital, namun juga sudah seamless tidak perlu mengunggah banyak hal, untuk keperluan beasiswa misalnya tidak perlu lagi melakukan mengunggah ijazah sebelumnya, atau ktp, surat keterangan, dan lain lain yang mana rudundant dan rawan salah. dan semuanya terkelola dengan baik dan aman, serta tetap memperhatikan privasi sesuai dengan 11 domain managjemen data (DAMA-DMBOK).

Integrasi data antar instansi pemerintah menjadi prasyarat utama bagi penyelenggaraan layanan publik digital yang efektif. Tanpa kemampuan sistem informasi untuk saling bertukar data secara akurat dan aman, digitalisasi pemerintahan hanya menghasilkan aplikasi yang berjalan sendiri-sendiri. Kebutuhan ini telah diakui secara resmi melalui Peraturan Presiden Nomor 95 Tahun 2018 tentang Sistem Pemerintahan Berbasis Elektronik (SPBE), yang menetapkan *interoperabilitas* sebagai salah satu prinsip dasar penyelenggaraan pemerintahan digital Indonesia (Kementerian Komunikasi dan Informatika RI, 2019). Tujuh tahun sejak regulasi itu diterbitkan, implementasi SPBE memang menunjukkan progres â€” namun kemajuan tersebut tidak merata. Aspek infrastruktur dan aplikasi terus berkembang, sementara aspek interoperabilitas dan tata kelola data lintas instansi justru paling tertinggal.

Laporan Indeks SPBE Nasional tahun 2022 mencatat nilai indeks nasional sebesar **2,34 dari skala 5** â€” angka ini memang telah melampaui target tahunan yang ditetapkan sebesar 2,30, namun masih berada pada kategori "Cukup" dan belum mencerminkan integrasi yang sungguh-sungguh lintas instansi (KemenPAN-RB, 2022). Yang lebih kritis, aspek interoperabilitas adalah domain yang secara konsisten paling rendah nilainya dan belum menunjukkan perbaikan berarti dari tahun ke tahun. Permasalahan ini bukan semata-mata soal teknologi. Berdasarkan kajian Putra, Santoso, dan Hasibuan (2023) melalui *systematic literature review* terhadap tantangan SPBE di Indonesia, ditemukan bahwa akar masalahnya adalah **fragmentasi sistem**: setiap kementerian membangun infrastruktur digitalnya sendiri-sendiri, tanpa standar data bersama, sehingga terjadi penggandaan data dan ketidakkonsistenan informasi di hampir seluruh sektor pemerintahan.

Gambaran nyata dari permasalahan ini dapat dilihat dari kasus Kota Tangerang. Pemerintah Kota Tangerang berhasil membangun sistem ERP pemerintah daerah bernama Super Mantab yang mengintegrasikan lebih dari 30 modul layanan â€” mulai dari keuangan, kepegawaian, hingga perizinan â€” secara terpadu dalam satu platform (Nugroho, Hamid, & Pratama, 2021). Pencapaian ini signifikan di tingkat lokal. Namun Super Mantab tidak dapat terhubung dengan sistem milik KPU, BPJS, BPS, maupun kementerian di tingkat nasional karena tidak ada standar pertukaran data yang disepakati bersama. Ini adalah contoh nyata bahwa kegagalan bukan pada kualitas teknologinya, melainkan pada ketiadaan aturan bersama tentang pengelolaan data.

Fenomena seperti ini bukan hanya terjadi di Indonesia. Eynon dan Margetts (2007) menemukan bahwa hambatan terbesar dalam *e-government* adalah *siloed thinking* â€” kecenderungan setiap unit pemerintah untuk bekerja secara terpisah tanpa koordinasi yang memadai. Namun pengalaman dari negara lain membuktikan bahwa masalah ini dapat diatasi. Estonia membangun platform interoperabilitas bernama X-Road yang menghubungkan lebih dari 900 sistem milik pemerintah, swasta, dan publik dalam satu jaringan data yang aman (Kalvet, 2012). Meskipun konteks Estonia â€” dengan populasi 1,3 juta jiwa dan birokrasi yang lebih homogen â€” berbeda signifikan dari Indonesia, prinsip utama di balik keberhasilannya tetap relevan untuk diadaptasi: bahwa transformasi digital yang berhasil tidak dimulai dari pengadaan teknologi, melainkan dari pembenahan cara pemerintah mengelola dan berbagi data (*governance-first*).

Urgensi permasalahan ini semakin menguat dengan hadirnya serangkaian regulasi terbaru. Peraturan Presiden Nomor 132 Tahun 2022 tentang Arsitektur SPBE Nasional menyediakan cetak biru (*blueprint*) agar sistem lintas kementerian dapat saling terhubung. Peraturan Presiden Nomor 82 Tahun 2023 kemudian mendorong percepatan transformasi digital melalui pembentukan GovTech nasional dan pengembangan sembilan Aplikasi SPBE Prioritas, termasuk platform INA Digital.

Namun, regulasi terbaru sekalipun â€” termasuk Peraturan Menteri Komunikasi dan Digital Nomor 6 Tahun 2025 yang menetapkan standar teknis pembangunan aplikasi pemerintah â€” menghadapi celah yang sama: mengatur *apa yang harus dibangun* secara teknis, tetapi tidak menjawab *siapa yang bertanggung jawab atas data* yang dihasilkan oleh masing-masing instansi dan *bagaimana standar pengelolaannya disepakati bersama*. Di sisi lain, Wirtz, Weyerer, dan Geyer (2019) mengingatkan bahwa penerapan kecerdasan buatan di sektor publik yang menjadi target pemerintah dalam Visi Indonesia Emas 2045 hanya bisa berjalan optimal jika didukung data pemerintah yang berkualitas, terstandar, dan dapat diakses lintas instansi.

Dengan demikian, persoalan utama interoperabilitas SPBE di Indonesia bukan terletak pada keterbatasan teknologi ataupun kekurangan regulasi, melainkan pada belum adanya mekanisme **tata kelola data** (*data governance*) lintas kementerian yang terstandarisasi â€” mencakup ketidakjelasan siapa pemilik data (*data owner*), perbedaan format dan standar metadata antar sistem, serta ketiadaan mekanisme berbagi data yang disepakati bersama. Oleh karena itu, diperlukan suatu model interoperabilitas yang tidak hanya berfokus pada integrasi teknologi, tetapi menempatkan tata kelola data sebagai fondasi utama dalam pertukaran data antar instansi pemerintah.




# 1.2 Rumusan Gagasan


---

Berdasarkan identifikasi masalah pada bagian sebelumnya, teridentifikasi bahwa kegagalan interoperabilitas SPBE di Indonesia tidak bermuara pada kekurangan regulasi atau keterbatasan teknologi â€” melainkan pada belum tersedianya mekanisme **tata kelola data** (*data governance*) yang terstandarisasi dan mengikat lintas kementerian. Ketidakjelasan *data owner*, perbedaan standar metadata antar sistem, serta ketiadaan mekanisme berbagi data bersama menjadi hambatan struktural yang selama ini luput dari perhatian (Putra, Santoso, & Hasibuan, 2023). Salah satu kerangka kerja yang dapat dijadikan landasan untuk menjawab masalah ini adalah **DAMA-DMBOK** (*Data Management Body of Knowledge*), yang menyediakan praktik terbaik dalam tata kelola data mencakup penetapan *data owner*, *metadata management*, dan *data architecture* â€” aspek-aspek yang justru menjadi akar persoalan SPBE saat ini.

Berdasarkan permasalahan tersebut, gagasan ini mengusulkan **Rancangan Model Interoperabilitas SPBE Berbasis *Federated Data Governance* untuk Mendukung Integrasi Layanan Publik Digital Indonesia**: sebuah model arsitektur sistem informasi berlapis yang menempatkan tata kelola data sebagai fondasi utama sebelum membangun integrasi teknis antar sistem pemerintahan. Model ini tidak bertujuan menggantikan sistem yang telah ada, melainkan menyediakan kerangka bersama yang menjamin setiap sistem dapat saling berkomunikasi secara terstandarisasi.

Sejalan dengan identifikasi masalah di atas, gagasan ini difokuskan untuk menjawab tiga rumusan pertanyaan berikut:

1. Bagaimana kondisi tata kelola data yang saat ini menghambat interoperabilitas sistem informasi lintas kementerian dalam implementasi SPBE di Indonesia?
2. Bagaimana prinsip-prinsip *framework* DAMA-DMBOK dapat diadaptasi untuk merancang model interoperabilitas berlapis (*4-layer model*) yang sesuai dengan konteks pemerintahan multi-instansi?
3. Bagaimana mekanisme operasional model tersebut dapat mendukung pertukaran dan integrasi data lintas instansi secara berkelanjutan dalam layanan publik digital?




# 1.3 Tujuan


---

Berdasarkan rumusan masalah yang diidentifikasi, gagasan ini disusun dengan tiga tujuan yang saling berkesinambungan:

1. **Mengidentifikasi kondisi tata kelola data yang menghambat interoperabilitas SPBE lintas kementerian di Indonesia**

   Tujuan ini berfokus pada pemetaan kesenjangan antara mandat regulasi SPBE dengan praktik pengelolaan data yang terjadi di lapangan. Dengan mengacu pada kajian Putra, Santoso, dan Hasibuan (2023) yang mendokumentasikan fragmentasi sistem sebagai tantangan utama implementasi SPBE, serta data Indeks SPBE 2022 yang menunjukkan aspek interoperabilitas sebagai domain paling lemah (KemenPAN-RB, 2022), tujuan ini berusaha membuktikan bahwa akar persoalan terletak pada ketiadaan mekanisme tata kelola data (*data governance*) yang terstandarisasi dan mengikat lintas instansi â€” bukan pada keterbatasan teknologi semata.

2. **Merancang model interoperabilitas berlapis (*4-Layer Model*) berbasis kerangka kerja DAMA-DMBOK yang dapat diadaptasi untuk konteks pemerintahan multi-instansi**

   DAMA-DMBOK (*Data Management Body of Knowledge*) menyediakan standar global pengelolaan data yang mencakup 11 area pengetahuan, dengan *Data Governance* sebagai inti yang mengatur penetapan wewenang, standar, dan kebijakan data secara terstruktur (DAMA International, 2017). Tujuan ini berfokus pada adaptasi prinsip-prinsip tersebut menjadi sebuah model arsitektur sistem informasi berlapis yang terdiri dari: Governance Layer, Domain Layer, Interoperability Layer, dan Service Layer. Model dirancang sebagai kerangka konseptual yang dapat menjadi referensi pengembangan arsitektur digital pemerintah, tanpa harus menggantikan sistem yang sudah berjalan.

3. **Menyusun peta jalan implementasi bertahap (*roadmap*) yang realistis untuk adopsi model tata kelola data nasional dalam rentang 2025â€“2045**

   Mengacu pada pendekatan *phased implementation* yang direkomendasikan Bank Dunia dalam konteks Satu Data Indonesia (Maghfirra, 2024), serta preseden Estonia yang membangun ekosistem X-Road selama dua dasawarsa (Kalvet, 2012), tujuan ini menghasilkan rancangan peta jalan empat fase yang bisa diadopsi pemerintah secara bertahap dan non-disruptif â€” dimulai dari pembenahan tata kelola di level Governance Layer, menuju layanan publik terintegrasi di Service Layer pada 2045.




# 1.4 Manfaat


---

Apabila model yang diusulkan dapat diadopsi sebagai kerangka referensi pengembangan arsitektur digital pemerintah, gagasan ini diproyeksikan memberikan manfaat nyata bagi tiga pihak utama:

### 1. Bagi Pemerintah dan Pembuat Kebijakan

- **Efisiensi Anggaran Teknologi Informasi** â€” Salah satu konsekuensi nyata dari fragmentasi sistem SPBE adalah duplikasi penganggaran: setiap kementerian membangun aplikasi dengan fungsi serupa secara terpisah tanpa koordinasi. Kajian Yuliana dkk. (2023) mencatat bahwa ketiadaan standar interoperabilitas berdampak pada tingginya duplikasi data dan inefisiensi pengadaan di lingkungan kementerian. Model yang diusulkan menyediakan standar bersama sehingga komponen sistem dapat digunakan bersama (*shared services*), mengurangi pemborosan ini secara struktural.

- **Kebijakan Publik yang Lebih Berbasis Data** â€” Ketidakkonsistenan data lintas kementerian saat ini membuat setiap instansi seringkali melaporkan angka yang berbeda untuk fenomena yang sama, sehingga keputusan kabinet tidak selalu berbasis data yang utuh dan terintegrasi. Model tata kelola yang diusulkan menghadirkan mekanisme *single source of truth* yang memungkinkan pengambilan kebijakan lebih akurat dan *real-time*.

- **Peningkatan Indeks SPBE** â€” Dengan nilai Indeks SPBE Nasional 2022 masih berada di 2,34 dari skala 5 pada kategori "Cukup" (KemenPAN-RB, 2022), terdapat ruang konkret untuk peningkatan. Model ini memberikan jalur terstruktur khususnya pada aspek interoperabilitas yang secara konsisten menjadi domain paling lemah dalam evaluasi SPBE.

### 2. Bagi Masyarakat sebagai Pengguna Layanan Publik

- **Kemudahan Akses Layanan Terpadu** â€” Ketika tata kelola data antar instansi sudah terstandarisasi, masyarakat tidak perlu lagi mengisi data yang sama berulang kali untuk layanan di instansi berbeda. Identitas kependudukan yang sudah terverifikasi di Dukcapil dapat secara langsung digunakan untuk layanan kesehatan (Kemenkes), pendidikan (Kemendikbud), maupun perpajakan â€” tanpa duplikasi administrasi.

- **Layanan Darurat dan Sosial yang Lebih Responsif** â€” Integrasi data yang terstandarisasi memungkinkan respon lintas instansi yang lebih cepat: pencairan bantuan sosial, rujukan layanan kesehatan, maupun penanganan kedaruratan bencana dapat memanfaatkan data warga yang sudah tersedia secara real-time, bukan menunggu proses rekonsiliasi data manual.

### 3. Bagi Pengembangan Keilmuan Sistem Informasi

- **Kontribusi Akademik dalam Ranah *e-Government* dan Tata Kelola Data** â€” Gagasan ini mengisi celah penelitian tentang adaptasi kerangka kerja manajemen data korporat (DAMA-DMBOK) ke dalam konteks pemerintahan multi-instansi yang kompleks â€” sebuah area yang masih sangat sedikit dikaji di Indonesia. UN Global Pulse (2024) sendiri mencatat bahwa Indonesia membutuhkan model *governance-driven public services* yang matang sebagai prasyarat agenda Indonesia Emas 2045.

- **Model Referensi bagi Penelitian Selanjutnya** â€” Rancangan model 4-layer yang dihasilkan dapat menjadi landasan bagi penelitian lanjutan, baik di tingkat S1 maupun S2, untuk menguji, mengevaluasi, atau mengembangkan mekanisme implementasi di domain atau konteks pemerintahan yang lebih spesifik.




# 2.1 Kondisi Terkini yang Menjadi Pemicu Gagasan


---

Tantangan interoperabilitas sistem informasi antar instansi pemerintah bukanlah persoalan yang unik bagi Indonesia. Eynon dan Margetts (2007) mengidentifikasi bahwa hambatan terbesar dalam adopsi *e-government* di berbagai negara adalah *siloed thinking* â€” kecenderungan setiap unit organisasi untuk bekerja secara tertutup dan melindungi datanya sendiri. Hambatan ini bersifat organisasional dan kultural, bukan teknis. Bahkan ketika infrastruktur teknologi memadai, tanpa mekanisme koordinasi yang mengikat, integrasi tidak akan terjadi secara berkelanjutan (Eynon & Margetts, 2007).

Di Indonesia, fenomena ini terdokumentasi secara sistematis. Kajian Putra, Santoso, dan Hasibuan (2023) yang memetakan tantangan implementasi SPBE berdasarkan domain arsitektur menemukan bahwa fragmentasi sistem adalah tantangan yang paling dominan: setiap kementerian membangun infrastruktur digitalnya sendiri tanpa standar pertukaran data yang mengikat, menghasilkan silo data yang mengakibatkan duplikasi dan inkonsistensi informasi di hampir seluruh sektor pemerintahan. Yuliana dkk. (2023) memperkuat temuan ini dengan studi kasus di Kementerian BUMN, di mana sistem digital antar unit kerja tidak dapat saling berkomunikasi meskipun berada di bawah satu atap kementerian yang sama.

Kondisi ini bahkan terjadi pada implementasi yang dianggap berhasil. Pemerintah Kota Tangerang berhasil membangun Super Mantab, sebuah sistem ERP yang mengintegrasikan lebih dari 30 modul layanan pemerintah daerah secara internal. Namun sistem ini tidak dapat bertukar data dengan KPU, BPJS, BPS, maupun kementerian di tingkat nasional (Nugroho, Hamid, & Pratama, 2021). Ini bukan kegagalan teknologi â€” Super Mantab secara teknis berfungsi baik. Ini adalah kegagalan ekosistem: tidak ada standar data bersama yang memungkinkan sistem-sistem tersebut untuk saling berkomunikasi secara semantik.

Klischewski dan Scholl (2008) menegaskan bahwa interoperabilitas teknis saja tidak cukup. Ketiga dimensi harus berjalan bersama: integrasi teknis, interoperabilitas sistem, dan *cooperability* organisasional. Yang terakhir inilah yang paling sering diabaikan â€” kemampuan antar organisasi untuk berkolaborasi berbagi data membutuhkan kejelasan siapa pemilik data, apa standarnya, dan siapa yang berwenang menjaga kualitasnya.

Pemerintah Indonesia sebenarnya telah merespons tantangan ini melalui serangkaian regulasi. Perpres No. 132 Tahun 2022 telah menyediakan cetak biru (*blueprint*) Arsitektur SPBE Nasional yang mengatur standar sistem agar dapat saling terhubung. Perpres No. 82 Tahun 2023 mendorong percepatan GovTech melalui sembilan Aplikasi SPBE Prioritas. Permenkomdigi No. 6 Tahun 2025 menetapkan standar teknis terkini yang lebih operasional. Namun demikian, seperti yang diidentifikasi oleh Putra dkk. (2023), regulasi-regulasi ini mengatur *apa* yang harus dibangun secara teknis, tetapi tidak menjawab *siapa yang bertanggung jawab atas data* dan *bagaimana standar pengelolaannya disepakati antar instansi*.

Akibatnya, bahkan inisiatif data terpusat nasional pun mengalami stagnasi. BRIN (2023) mengungkap bahwa program Satu Data Indonesia (SDI) menghadapi hambatan serius: perbedaan standar metadata lintas kementerian membuat integrasi sulit secara komputasi, sementara pendekatan implementasi yang *top-down* tanpa forum kolaborasi teknis antar pemilik data justru menimbulkan resistensi dari bawah. Program yang dirancang untuk menyatukan data nasional malah menghadapi tembok yang sama â€” ketiadaan mekanisme tata kelola data yang fungsional di tingkat lintas instansi.

Kontras tajam datang dari pengalaman Estonia. Meskipun konteks demografis dan birokrasinya berbeda, Estonia berhasil membangun platform X-Road yang menghubungkan lebih dari 900 sistem pemerintahan dalam satu ekosistem berbagi data yang aman â€” dimulai bukan dari pengadaan teknologi baru, melainkan dari penetapan siapa yang memiliki data apa, dan aturan apa yang berlaku dalam pertukaran data (Kalvet, 2012). Prinsip *governance-first* inilah yang menjadi titik keberangkatan Estonia, dan itulah juga yang selama ini absen dari pendekatan Indonesia.

Dari keseluruhan gambaran ini, teridentifikasi satu pola yang konsisten: regulasi sudah ada dan terus diperkuat, investasi infrastruktur teknologi terus berjalan, namun interoperabilitas yang sesungguhnya tidak terjadi karena **mekanisme tata kelola data lintas instansi belum tersedia**. Tidak ada kejelasan tentang pemilik data, tidak ada standar metadata yang mengikat antar domain, dan tidak ada forum yang memiliki otoritas untuk menyepakati dan menegakkan standar tersebut. Inilah pemicu utama gagasan yang diuraikan dalam proposal ini.




# 2.2 Solusi yang Ditawarkan: Rancangan Model 4-Layer


---

Berdasarkan identifikasi kondisi dan kesenjangan yang diuraikan pada bagian sebelumnya, gagasan ini mengusulkan **Rancangan Model Interoperabilitas SPBE Berbasis *Federated Data Governance*** sebagai sebuah kerangka arsitektur sistem informasi berlapis yang dapat dijadikan referensi pengembangan ekosistem pertukaran data antar kementerian di Indonesia. Model ini tidak bertujuan menggantikan sistem yang sudah ada, melainkan menyediakan fondasi tata kelola yang memungkinkan sistem-sistem tersebut untuk saling berkomunikasi secara terstandarisasi.

Berbeda dari pendekatan integrasi yang lazim — yang cenderung langsung menghubungkan sistem secara teknis melalui API — model ini mengadopsi prinsip *governance-first*: memastikan bahwa kejelasan kepemilikan data, standar metadata, dan mekanisme tata kelola sudah tersedia sebelum integrasi teknis dilakukan. Klischewski dan Scholl (2008) menegaskan bahwa interoperabilitas teknis saja tidak akan menghasilkan manfaat nyata jika kualitas dan standar data dari sistem-sistem sumber masih berbeda-beda. Oleh karena itu, model ini dirancang secara berjenjang dari fondasi ke atas, sebagaimana digambarkan dalam diagram berikut:

```
+---------------------------------------------------------+
¦  LAYER 4: SERVICE LAYER                                 ¦
¦  Layanan Publik Terintegrasi — Portal, Super-App Gov    ¦
+---------------------------------------------------------¦
¦  LAYER 3: INTEROPERABILITY LAYER                        ¦
¦  API Exchange — Data Catalog Nasional — Semantic Bridge ¦
+---------------------------------------------------------¦
¦  LAYER 2: DOMAIN LAYER                                  ¦
¦  5 Domain Prioritas dengan Standar Metadata Baku        ¦
¦  [Kependudukan | Kesehatan | Pendidikan | Ekonomi       ¦
¦   | Keuangan Negara]                                    ¦
+---------------------------------------------------------¦
¦  LAYER 1: GOVERNANCE LAYER  ?-- FONDASI                 ¦
¦  Data Owner + Data Steward + Kebijakan Metadata Bersama ¦
+---------------------------------------------------------+
           ? setiap layer bergantung pada layer di bawahnya
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

Komponen utama Layer 3:

- **API Exchange Nasional (*Government Service Bus*):** Mengadopsi konsep *Enterprise Application Integration* (Themistocleous & Irani, 2001) yang diadaptasi ke konteks pemerintahan — sebuah middleware terpusat yang menjadi titik pertukaran antar sistem domain, sesuai standar teknis yang ditetapkan Permenkomdigi No. 6 Tahun 2025.
- **Data Catalog Nasional:** Direktori terpusat yang mendaftarkan seluruh aset data domain beserta metadata standar, memungkinkan instansi manapun untuk menemukan dan memahami data yang tersedia tanpa harus menghubungi instansi pemilik secara manual.
- **Semantic Bridge:** Mekanisme pemetaan otomatis antar skema metadata domain yang berbeda, memastikan bahwa data yang keluar dari Domain Kependudukan bisa langsung dipahami oleh Domain Kesehatan, misalnya, tanpa proses konversi manual.

### Layer 4 — Service Layer

Layer teratas adalah output yang dirasakan langsung oleh masyarakat dan pembuat kebijakan. Dengan fondasi tiga layer di bawahnya berjalan, Service Layer memungkinkan:

- **Layanan Publik Berbasis *Single-View* NIK:** Warga cukup teridentifikasi sekali melalui Dukcapil, dan data identitasnya dapat mengalir secara otomatis ke semua layanan pemerintah yang membutuhkan — dari BPJS hingga perpajakan hingga beasiswa pendidikan.
- **Dashboard Kebijakan Lintas Domain:** Pembuat kebijakan dapat mengakses data terintegrasi dari seluruh domain untuk mendukung pengambilan keputusan yang lebih akurat dan *real-time*.
- **Fondasi *AI Government* 2045:** Wirtz, Weyerer, dan Geyer (2019) menegaskan bahwa penerapan kecerdasan buatan di sektor publik mensyaratkan data yang berkualitas, konsisten, dan dapat diakses lintas instansi — kondisi yang hanya terwujud jika ketiga layer di bawahnya sudah berfungsi.

### Novelty Model Ini

Yang membedakan model ini dari upaya integrasi SPBE sebelumnya adalah pendekatan berlapis yang dimulai dari governance. Kebanyakan inisiatif SPBE Indonesia selama ini langsung menyasar Layer 3 (integrasi teknis) tanpa membangun Layer 1 dan Layer 2 terlebih dahulu, sehingga menghasilkan koneksi yang rapuh dan tidak berkelanjutan. Model ini secara eksplisit menempatkan penetapan *data owner*, standarisasi metadata, dan mekanisme tata kelola sebagai prasyarat — bukan sebagai tambahan di akhir — dari seluruh proses integrasi.

### Output PKM yang Dihasilkan

Sebagai gagasan konseptual, model ini menghasilkan empat output yang terukur:

1. **Model Arsitektur 4-Layer** — diagram dan deskripsi lengkap model Governance ? Domain ? Interoperability ? Service Layer
2. **Framework Tata Kelola Data Federatif** — skema peran *Data Owner* & *Data Steward* lintas kementerian beserta mekanisme penetapan standar metadata bersama
3. **Blueprint Standar Metadata per Domain** — rancangan kamus data (*data dictionary*) untuk 5 domain prioritas
4. **Roadmap Implementasi Bertahap 2025–2045** — tabel 4-fase dengan target, aktor, dan indikator keberhasilan per fase




# 2.3 Pihak-Pihak yang Terlibat


---

Keberhasilan implementasi model interoperabilitas ini bergantung pada keterlibatan aktif dari sejumlah aktor kelembagaan yang memiliki kewenangan, kompetensi, dan data yang saling melengkapi. Eynon dan Margetts (2007) menekankan bahwa integrasi lintas instansi tidak dapat berjalan tanpa adanya *boundary-spanning organization* â€” lembaga atau forum yang memiliki otoritas untuk mengkoordinasikan berbagai kepentingan dan standar yang berbeda. Dalam model ini, peran tersebut diemban secara kolektif oleh *Data Steward Committee* yang dibentuk di bawah koordinasi KemenPAN-RB, tanpa memerlukan pembentukan lembaga baru melalui undang-undang.

Tabel berikut merangkum pihak-pihak yang terlibat beserta peran strategis masing-masing dalam model 4-layer yang diusulkan:

| No. | Aktor | Peran dalam Model | Layer Terkait | Referensi |
|-----|-------|-------------------|---------------|-----------|
| 1 | **Kemkomdigi** | Koordinator arsitektur teknologi SPBE nasional; menetapkan standar API dan protokol interoperabilitas; pembina platform pertukaran data (*Government Service Bus*) | Layer 3â€“4 | B2, B6, B8 |
| 2 | **KemenPAN-RB** | Koordinator kebijakan implementasi SPBE lintas K/L; menerbitkan SK penetapan jabatan fungsional *Data Steward* di setiap kementerian tanpa perlu UU baru | Layer 1 | B9_KemenPANRB |
| 3 | **BSSN** | Menetapkan dan mengaudit standar keamanan informasi (Peraturan BSSN No.4/2021) pada semua lapisan pertukaran data; memastikan keamanan di setiap node API Exchange | Layer 3 | B1, B10 |
| 4 | **Kemenkeu** | Instansi pilot utama untuk Layer 1â€“2 â€” sistem SAKTI dan SPAN adalah sistem ERP pemerintah paling matang di Indonesia; hasil evaluasi Wiradharma & Nugroho (2020) menunjukkan kesiapan teknis Kemenkeu sebagai node pertama | Layer 1â€“2 | B5_Wiradharma |
| 5 | **Kemendagri / Dukcapil** | *Data Owner* Domain Kependudukan â€” mengelola basis data NIK nasional (SIAK) yang menjadi identitas digital dasar bagi semua domain lain; domain ini menjadi prioritas pertama dalam pilot Layer 2 | Layer 2 | E7_Dukcapil |
| 6 | **Kemenkes, Kemendikbudristek, BPS** | *Data Owner* Domain Kesehatan, Pendidikan, dan Statistik Nasional â€” ketiganya merupakan domain prioritas berikutnya dalam pilot standarisasi metadata Layer 2 | Layer 2 | B6, G3_WorldBank |
| 7 | **Pemkot Tangerang** | Model implementasi daerah â€” Super Mantab sebagai prototipe integrasi lokal yang membuktikan kemampuan teknis sudah ada di level pemerintah daerah, namun belum terkoneksi ke ekosistem nasional | Layer 3â€“4 | C5_Nugroho |
| 8 | **BRIN / Perguruan Tinggi** | Pengembangan standar metadata, riset evaluasi maturity model, dan kajian independen implementasi per fase â€” menjamin objektivitas dan basis akademik pengembangan model | Layer 1â€“2 | E5_BRIN |
| 9 | ***Data Steward Committee*** | Forum koordinasi lintas K/L yang menyepakati dan menegakkan standar metadata bersama; bukan lembaga baru melainkan formalisasi koordinasi yang sudah ada (*non-invasive governance* â€” Seiner, 2014); dibentuk via SK Menpan | Layer 1 | A4_Seiner |

Perlu dicatat bahwa model ini dirancang mengikuti prinsip *Non-Invasive Data Governance* (Seiner, 2014): tidak memerlukan penggantian sistem yang sudah ada atau pembentukan kelembagaan baru yang besar. Setiap aktor di atas sudah memiliki kewenangan dan infrastruktur yang relevan â€” yang diperlukan hanyalah formalisasi peran mereka dalam ekosistem bersama dan penetapan standar yang mengikat melalui mekanisme regulasi yang sudah tersedia. Permana dan Susanto (2024) telah membuktikan secara empiris bahwa pendekatan desain tata kelola berbasis DAMA-DMBOK dapat diimplementasikan dalam konteks Indonesia, menghasilkan standar metadata yang ketat sekaligus membuka ruang integrasi operasional yang luas antar departemen.




# 2.4 Langkah Strategis & Timeline Implementasi


---

Implementasi model interoperabilitas SPBE berbasis *federated data governance* tidak dapat dilakukan secara revolusioner atau sekaligus. Pengalaman Estonia membuktikan bahwa pencapaian ekosistem e-government kelas dunia membutuhkan waktu hampir dua dekade â€” dimulai dari penetapan kebijakan dasar pada awal 2000-an hingga X-Road menghubungkan lebih dari 900 sistem pada periode berikutnya (Kalvet, 2012). Roadmap Indonesia 2025â€“2045 yang diusulkan di sini adalah bentang waktu 20 tahun dengan empat fase yang saling bergantung, bukan empat proyek yang berjalan paralel.

Pendekatan ini mengikuti prinsip *Non-Invasive Data Governance* (Seiner, 2014): perubahan dimulai dari formalisasi apa yang sudah ada, bukan membangun ulang dari nol. Bank Dunia juga merekomendasikan hal serupa dalam kajian Satu Data Indonesia â€” bahwa integrasi data berskala nasional harus dimulai dari domain yang paling krusial secara bertahap, bukan mengintegrasikan semua kementerian sekaligus (Maghfirra, 2024).

---

### Tabel Roadmap 4 Fase (2025â€“2045)

| Fase | Periode | Nama Fase | Kegiatan Utama | Layer Aktif | Indikator Keberhasilan |
|------|---------|-----------|----------------|-------------|------------------------|
| **1** | 2025â€“2027 | **Fondasi Governance** | â€¢ Audit tata kelola data di 5 K/L pilot (Kemendagri, Kemenkes, Kemendikbud, Kemenkeu, BPS)<br>â€¢ Pemetaan *data owner* & standar data eksisting per domain<br>â€¢ Pembentukan *Data Steward Committee* via SK KemenPAN-RB<br>â€¢ Penyusunan kebijakan metadata nasional pertama | Layer 1 (Governance) | SK *Data Steward Committee* terbit; peta silo data 5 domain tersedia; *data owner* tiap domain terdefinisi resmi |
| **2** | 2027â€“2030 | **Standarisasi Domain** | â€¢ Penetapan Standar Metadata Nasional (*National Metadata Registry*) untuk 5 domain prioritas<br>â€¢ Piloting API antar 5 K/L (*Government Service Bus* versi awal)<br>â€¢ Formalisasi kamus data (*data dictionary*) per domain<br>â€¢ Evaluasi maturity model awal oleh BRIN | Layer 1â€“2 (Governance + Domain) | *Metadata Registry* nasional aktif; API lintas 5 K/L berfungsi; Indeks SPBE mulai naik di aspek interoperabilitas |
| **3** | 2030â€“2035 | **Integrasi Nasional** | â€¢ *Rollout Government Service Bus* ke seluruh 34+ K/L<br>â€¢ *Data Catalog Nasional* beroperasi penuh<br>â€¢ *Single-View* NIK berbasis Dukcapil tersedia di semua layanan publik<br>â€¢ Dashboard kebijakan lintas kementerian aktif (*real-time analytics*) | Layer 3 (Interoperability) | Indeks SPBE Nasional mencapai â‰¥ 3,5 dari skala 5; warga dapat mengakses seluruh layanan dengan 1 identitas NIK |
| **4** | 2035â€“2045 | **AI Government** | â€¢ Penerapan *Analytical AI* berbasis data lintas kementerian untuk prediksi kebutuhan layanan dan deteksi inefisiensi<br>â€¢ *Autonomous AI* pilot untuk rekomendasi kebijakan berbasis data nasional<br>â€¢ Posisi Indonesia sebagai benchmark tata kelola data pemerintah di ASEAN | Layer 4 (Service) | Sistem AI pemerintah beroperasi dengan data terintegrasi; Indonesia masuk 5 besar *government AI readiness* ASEAN |

---

### Justifikasi Setiap Fase

**Mengapa Fase 1 dimulai dari governance, bukan teknologi?**
Sesuai temuan BRIN (2023) tentang stagnasi Satu Data Indonesia, kegagalan integrasi selama ini justru terjadi karena langkah governance dilewati. Membangun teknologi tanpa *data owner* yang jelas dan standar metadata yang disepakati hanya akan menghasilkan koneksi yang rapuh â€” persis seperti Super Mantab yang teknologinya berfungsi tapi tidak bisa terhubung ke sistem nasional.

**Mengapa 5 K/L pilot, bukan semua sekaligus?**
Bank Dunia secara eksplisit merekomendasikan pendekatan bertahap berbasis domain prioritas untuk konteks Indonesia â€” tidak mengintegrasikan 40+ kementerian di tahun pertama (Maghfirra, 2024). Lima domain yang dipilih (Kependudukan, Kesehatan, Pendidikan, Ekonomi, Keuangan Negara) adalah domain yang datanya dibutuhkan oleh hampir semua kementerian lain, sehingga memiliki dampak multiplier tertinggi.

**Mengapa Fase 4 adalah AI Government?**
Wirtz, Weyerer, dan Geyer (2019) menegaskan bahwa penerapan AI yang bermakna di sektor publik mensyaratkan data yang berkualitas, konsisten, dan dapat diakses lintas instansi. Tanpa ekosistem interoperabilitas yang dibangun di Fase 1â€“3, sistem AI pemerintah tidak memiliki bahan bakar yang cukup. Layer 3 adalah prasyarat Layer 4, dan Fase 4 adalah *endgame* â€” kondisi yang menjadi tujuan akhir Visi Indonesia Emas 2045.

---

### Potensi Risiko dan Strategi Mitigasi

Sebuah kajian literatur terhadap kegagalan e-government oleh Heeks (2003) menemukan bahwa 35% proyek sistem pemerintah gagal total akibat *design-reality gap* â€” kesenjangan antara rancangan sistem dengan realitas organisasi yang menempatkan ego sektoral di atas rasionalitas teknis. Karenanya, implementasi model ini harus didampingi oleh mitigasi organisasional, bukan sekadar mitigasi teknologi:

| Identifikasi Risiko (*Design-Reality Gap*) | Akar Permasalahan | Strategi Mitigasi |
|--------------------------------------------|-------------------|-------------------|
| **Resistensi Berbagi Data / Ego Sektoral** | *Trust deficit* antar institusi dan ketakutan "disalahkan" jika data keluar (OECD, 2019) | Penggunaan model desentralisasi GLASS, di mana data tidak pernah diambil alih oleh kementerian lain, melainkan diam di instansi asal dan diakses secara *federated* |
| **Ketidakpatuhan Standar Domain** | Kultur operasional instansi (Heeks model) yang tidak sejalan dengan arahan pusat | Penetapan insentif *anggaran SPBE* dari Kemenkeu sebagai sanksi kepatuhan; alokasi pendanaan IT hanya cair jika instansi memenuhi standar metadata Layer 1 |
| **Kesulitan Migrasi Sistem Lama (Silo)** | Keengganan pegawai mengubah cara kerja administratif yang sudah nyaman bertahun-tahun | Pemilihan 5 K/L Prioritas sebagai pilot awal untuk menciptakan *success story*, bukan memaksakan integrasi 34 K/L secara serentak |

Dengan manajemen risiko ini, usulan model *Federated Data Governance* tidak beroperasi di "ruang hampa" utopis, melainkan berpijak pada lanskap riil sosiologis dan organisasional birokrasi pemerintahan Indonesia.




# 2.5 Prediksi Dampak Sistemik


---

Apabila model interoperabilitas SPBE berbasis *federated data governance* ini dapat diadopsi secara bertahap oleh pemerintah, dampak yang diproyeksikan tidak hanya bersifat teknis, tetapi sistemik dan lintas sektor. Dampak tersebut dapat dikelompokkan dalam empat dimensi berikut:

### A. Efisiensi Pemerintahan: Hentikan Duplikasi Anggaran TI

Salah satu pemborosan paling nyata dari fragmentasi SPBE adalah duplikasi pembangunan sistem dengan fungsi serupa di kementerian yang berbeda. Kajian Yuliana dkk. (2023) tentang Kementerian BUMN mengungkap bahwa ketiadaan standar interoperabilitas memicu pengadaan aplikasi yang berulang dan penyimpanan data yang redundan antar unit. Dengan model ini, komponen sistem dapat digunakan secara *shared services* — satu standar API, satu direktori data nasional — sehingga anggaran yang selama ini terfragmentasi dapat dialihkan ke pengembangan kualitas layanan.

Di samping penghematan langsung, koordinasi antar kementerian yang selama ini memerlukan komunikasi manual dan rekonsiliasi data ad-hoc dapat dipersingkat secara signifikan melalui pertukaran data terstandarisasi yang beroperasi otomatis.

### B. Peningkatan Kualitas Layanan Publik: Warga di Pusat

*Silo mentality* yang mendominasi birokrasi Indonesia saat ini berdampak langsung pada warga: formulir yang diisi berulang, dokumen yang dikumpulkan berkali-kali untuk instansi yang berbeda, dan waktu tunggu layanan yang panjang akibat proses verifikasi manual lintas instansi. Pratama (2023) menegaskan bahwa kerugian fragmentasi data bukan sekadar soal anggaran TI yang boros, melainkan kerugian strategis nasional berupa pengambilan keputusan yang tidak berbasis data utuh.

Dengan terwujudnya Layer 4 (Service Layer) model ini:
- **Layanan berbasis *single-view* NIK** — warga cukup terdaftar sekali di Dukcapil untuk mengakses semua layanan pemerintah tanpa mengisi ulang data identitas
- **Respons layanan sosial lebih cepat** — pencairan bansos, rujukan kesehatan, dan penanganan kedaruratan dapat memanfaatkan data warga yang tersedia secara *real-time* tanpa rekonsiliasi manual
- **Indeks SPBE nasional naik secara terstruktur** — model ini memberikan jalur konkret untuk meningkatkan aspek interoperabilitas dari nilai 2,34 (2022) menuju target = 3,5 pada Fase 3 tahun 2030–2035 (KemenPAN-RB, 2022)

### C. Penyelamatan Program Satu Data Indonesia

BRIN (2023) mengidentifikasi bahwa program Satu Data Indonesia menghadapi stagnasi akibat dua masalah mendasar: perbedaan standar metadata lintas instansi dan pendekatan *top-down* yang menciptakan resistensi. Model ini secara langsung menjawab keduanya:
- Layer 1 (Governance) membangun mekanisme *Data Steward Committee* yang bersifat horizontal dan kolaboratif — bukan *top-down*
- Layer 2 (Domain) menetapkan standar metadata bersama per domain yang mengikat secara konsensus

Dengan kata lain, model ini tidak bersaing dengan SDI — model ini adalah mekanisme implementasi yang selama ini belum dimiliki SDI. UN Global Pulse (2024) senada menganjurkan transisi dari pendekatan "menumpuk data untuk *dashboard*" menuju *governance-driven public services* — dan itulah persis yang ditawarkan model ini.

### D. Fondasi AI Government 2045: Investasi Infrastruktur Data Nasional

Dampak paling futuristik namun paling strategis dari model ini adalah menjadi prasarat sistem kecerdasan buatan di sektor publik. Wirtz, Weyerer, dan Geyer (2019) menegaskan bahwa penerapan *Analytical AI* dan *Autonomous AI* di pemerintahan mensyaratkan data yang berkualitas, konsisten, dan dapat diakses lintas instansi. Tanpa ekosistem interoperabilitas, sistem AI pemerintah hanya bisa beroperasi dengan data parsial dari satu instansi — hasilnya pun tidak akan komprehensif.

Dengan ekosistem Layer 1–4 yang berjalan pada 2035–2045, pemerintah Indonesia akan memiliki:
- Data lintas 34+ kementerian yang terstandarisasi dan dapat diakses secara terpadu
- Fondasi bagi *predictive analytics* kebutuhan layanan publik
- Infrastruktur untuk pemodelan kebijakan berbasis data nasional yang utuh

Ini menjadikan model interoperabilitas SPBE bukan sekadar proyek integrasi sistem — melainkan **investasi infrastruktur data nasional** yang hasilnya akan dirasakan selama beberapa dekade ke depan, selaras dengan Visi Indonesia Emas 2045.




# 3.1 Kesimpulan


---

Rancangan Model Interoperabilitas SPBE Berbasis *Federated Data Governance* yang diusulkan dalam naskah ini merupakan jawaban sistemik atas kegagalan integrasi layanan digital pemerintah â€” bukan dengan menambah aplikasi baru atau sentralisasi data secara paksa, melainkan dengan menetapkan aturan kepemilikan dan standar data yang disepakati bersama. Berbeda dengan inisiatif sebelumnya yang cenderung terjebak pada pendekatan *top-down* dan langsung melompat pada perakitan teknis tanpa tata kelola yang mengikat (BRIN, 2023), model empat layer ini mengunggulkan pendekatan *governance-first*. Standardisasi metadata per domain (Layer 2) yang diikat oleh forum tata kelola lintas kementerian (Layer 1) menjadi prasyarat mutlak sebelum pertukaran data melalui *Government Service Bus* (Layer 3) dapat melahirkan layanan terpadu yang sesungguhnya (Layer 4).

Realisasi gagasan ini sangat layak dieksekusi (*feasible*) karena tidak membutuhkan perombakan struktur birokrasi, penambahan anggaran infrastruktur secara masif, maupun penerbitan undang-undang baru. Mengikuti prinsip *Non-Invasive Data Governance* (Seiner, 2014), model ini dibangun di atas fondasi regulasi yang sudah tersedia, yakni Perpres No. 132/2022 tentang Arsitektur SPBE dan Permenkomdigi No. 6/2025 tentang Standar Teknis Aplikasi. Aktor-aktor penggeraknya pun telah siap beroperasi: Kementerian Komdigi sebagai koordinator arsitektur teknologi, Kementerian PAN-RB yang cukup menerbitkan SK pembentukan *Data Steward Committee*, BSSN sebagai pengawal standar keamanan, serta Kementerian Keuangan dan Dukcapil sebagai instansi *pilot* tahap awal yang sistemnya telah memadai. Kunci keberhasilan terletak pada pelembagaan komitmen bersama melalui forum tata kelola yang diusulkan.

Meskipun terlihat ambisius, implementasi penuh ekosistem interoperabilitas ini dapat dicapai secara proporsional dalam bentang waktu 20 tahun (2025â€“2045). Periode ini sangat realistis jika mengambil preseden dari Estonia, yang juga membutuhkan waktu dua dasawarsa untuk membangun, menguji, dan mematangkan ekosistem X-Road hingga menjadi *benchmark* global (Kalvet, 2012). Untuk memastikan transisi yang berkesinambungan, implementasi dirancang dalam empat *milestone* yang konkret:

| Tonggak | Tahun | Capaian Kunci |
|---------|-------|---------------|
| **Fase 1** | 2027 | Audit regulasi dan pembentukan *Data Steward Committee* lintas K/L telah disahkan |
| **Fase 2** | 2030 | Standar metadata 5 domain prioritas ditetapkan; sistem *pilot* K/L berhasil terintegrasi |
| **Fase 3** | 2035 | *Government Service Bus* beroperasi penuh secara nasional; Indeks SPBE mencapai target |
| **Fase 4** | 2045 | Layanan *single-view* NIK terwujud mutlak; fondasi *AI Government* berjalan optimal |

Bila gagasan ini diterapkan secara persisten, dampak sistemiknya akan menjangkau berbagai aspek dalam jangka pendek hingga panjang. Pada jangka pendek, penghematan APBN dari penurunan duplikasi pengadaan sistem TI antar kementerian dapat segera direalisasikan, bersamaan dengan peningkatan skor domain interoperabilitas pada Indeks SPBE Nasional yang pada tahun 2022 masih berada di 2,34 (KemenPAN-RB, 2022). Pada jangka menengah, kebijakan pemborosan ego sektoral akan terkikis, memungkinkan transisi nyata menuju layanan publik berbasis pengawasan sentral berskala dunia seperti yang dihimbau oleh UN Global Pulse (2024).

Pada puncaknya, model ini menempatkan Indonesia sebagai negara yang tak lagi mengejar ketertinggalan teknologi, melainkan memiliki infrastruktur data yang tangguh dan terintegrasi penuh. Ekosistem interoperabilitas ini merupakan prasyarat krusial yang harus dirampungkan agar penerapan kecerdasan buatan (*AI Government*) di sektor publik tidak berakhir sebagai fiksi (Wirtz et al., 2019). Dengan merintis *federated data governance* hari ini, Indonesia tengah membentangkan karpet merah menuju tata kelola pemerintahan masa depan yang responsif, terintegrasi, dan presisi demi menyongsong visi Indonesia Emas 2045.




# Daftar Pustaka

Berikut adalah daftar referensi lengkap yang dikutip secara langsung dalam penulisan naskah proposal PKM-GFT (Bab 1 â€“ Bab 3), disusun menurut gaya pengutipan *Harvard Style*.

---

Badan Riset dan Inovasi Nasional (BRIN). (2023). *Masih Top-Down: BRIN Ungkap Hambatan Implementasi Satu Data Indonesia (SDI)*. Pusat Riset Pemerintahan Dalam Negeri BRIN. https://www.brin.go.id/news/121875/masih-top-down-brin-ungkap-hambatan-implementasi-satu-data-indonesia

Badan Siber dan Sandi Negara. (2021). *Peraturan BSSN Nomor 4 Tahun 2021 tentang Pedoman Manajemen Keamanan Informasi Sistem Pemerintahan Berbasis Elektronik dan Standar Teknis dan Prosedur Keamanan Sistem Pemerintahan Berbasis Elektronik*. BSSN. https://peraturan.bpk.go.id/Details/174275/peraturan-bssn-no-4-tahun-2021

DAMA International. (2017). *DAMA-DMBOK: Data Management Body of Knowledge* (2nd ed.). Technics Publications.

Dehghani, Z. (2020). *The Data Mesh Shift*. Thoughtworks Whitepaper. https://www.thoughtworks.com/content/dam/thoughtworks/documents/whitepaper/tw_whitepaper_data_mesh_English.pdf

Eynon, R., & Margetts, H. (2007). Organisational Solutions for Overcoming Barriers to eGovernment. *European Journal of ePractice*, 1(1), 72â€“85.

Haslhofer, B., & Klas, W. (2010). A Survey of Techniques for Achieving Metadata Interoperability. *ACM Computing Surveys (CSUR)*, 42(2), 1-37. https://dl.acm.org/doi/10.1145/1509096.1509111

Heeks, R. (2003). Most eGovernment-for-Development Projects Fail: How Can Risks be Reduced?. *iGovernment Working Paper Series*, 14. Institute for Development Policy and Management, University of Manchester.

Heeks, R. (2006). *Implementing and Managing eGovernment: An International Text*. SAGE Publications.

Kalvet, T. (2012). Innovation: A Factor Explaining e-Government Success in Estonia. *Electronic Government: An International Journal*, 9(2), 142â€“157. https://doi.org/10.1504/EG.2012.046266

Kementerian Komunikasi dan Informatika RI. (2019). *Peraturan Presiden Nomor 95 Tahun 2018 tentang Sistem Pemerintahan Berbasis Elektronik*. Jakarta: Kemenkominfo.

Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi. (2022). *Laporan Indeks SPBE Nasional 2022*. KemenPAN-RB.

Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi. (2024). *Akselerasi Pemerintahan Digital Melalui Pemanfaatan Arsitektur SPBE*. KemenPAN-RB. https://www.menpan.go.id/site/berita-terkini/akselerasi-pemerintahan-digital-melalui-pemanfaatan-arsitektur-spbe

Klischewski, R., & Scholl, H. J. (2008). Information Quality as Capstone in Negotiating e-Government Integration, Interoperability, and Cooperability. *Government Information Quarterly*, 25(2), 203â€“225. https://doi.org/10.1016/j.giq.2007.04.010

Loutas, N., dkk. (2022). GLASS: A Citizen-Centric Distributed Data-Sharing Model within an e-Governance Architecture. *arXiv preprint*, arXiv:2203.08781. https://arxiv.org/abs/2203.08781

Maghfirra, D. (2024). *Satu Data Indonesia: Bridging the Governance Gap*. The World Bank Group Presentations. https://thedocs.worldbank.org/en/doc/15f75c2212bc4df3aa1fc764e8af7346-0070012024/related/Dini-Maghfirra-Satu-Data-Indonesia-ENG.pdf

Nugroho, R. A., Hamid, A. H., & Pratama, D. (2021). Evaluasi Layanan Digital Berbasis ERP di Kota Tangerang: Studi Super Mantab. *Jurnal Studi Pemerintahan*, 12(3), 310â€“330.

OECD. (2019). *Data Governance in the Public Sector*. OECD Digital Government Studies. DOI: https://doi.org/10.1787/9a1a7c61-en

Ombudsman Republik Indonesia. (2022). *Dualisme Interoperabilitas Data Sektor Pelayanan Publik Menuju Sistem Pemerintahan Berbasis Elektronik (SPBE)*. Laporan Kajian Kebijakan Internal. https://ombudsman.go.id/news/download/pwkinternal--dualisme-interoperabilitas-data-sektor-pelayanan-publik-menuju-sistem-pemerintahan-berbasis-elektronik-spbe

*Peraturan Presiden Nomor 132 Tahun 2022 tentang Arsitektur Sistem Pemerintahan Berbasis Elektronik Nasional*. JDIH BPK RI. https://peraturan.bpk.go.id/Details/234764/perpres-no-132-tahun-2022

*Peraturan Menteri Komunikasi dan Digital Nomor 6 Tahun 2025 tentang Standar Teknis Aplikasi SPBE*. JDIH.

Permana, R. M., & Susanto, T. D. (2024). Data Governance Design Based on DAMA-DMBOK Framework: A Review and Case Study in Indonesia. *International Journal of Research and Review*, 11(8), 241-255. https://www.ijrrjournal.com/IJRR_Vol.11_Issue.8_August2024/IJRR23.pdf

Pratama, A. (2023). Urgensi Kebijakan Berbasis Data (Data-Driven Policy) dan Residu Silo Mentality pada Birokrasi Pemerintahan. *Jurnal Parlementer*, 8(1), 112-126. https://ejournal.appihi.or.id/index.php/Parlementer/article/download/1409/1203/7270

Putra, A. S., Santoso, H. B., & Hasibuan, Z. A. (2023). Mapping SPBE Challenges in Indonesia: A Domain Architecture Perspective. *Jurnal Sistem Informasi*, 19(1), 1-18.

Seiner, R. S. (2014). *Non-Invasive Data Governance: The Path of Least Resistance and Greatest Success*. Technics Publications.

Themistocleous, M., & Irani, Z. (2001). Benchmarking the Benefits and Barriers of Application Integration. *Benchmarking: An International Journal*, 8(4), 317â€“331.

UN Global Pulse Asia Pacific. (2024). *New Administration, New Governance: Envisioning the Trajectory of Data Governance in Indonesia*. Medium Publications. https://medium.com/un-global-pulse-ap/new-administration-new-governance-envisioning-the-trajectory-of-data-governance-in-indonesia-605542bd1fd5

Wiradharma, A., & Nugroho, L. E. (2020). Evaluasi Implementasi Sistem Pemerintahan Berbasis Elektronik di Indonesia: Studi Kasus Kementerian Keuangan. *Jurnal Informatika dan Rekayasa Perangkat Lunak*, 2(1), 45â€“58.

Wirtz, B. W., Weyerer, J. C., & Geyer, C. (2019). Artificial Intelligence and the Public Sectorâ€”Applications and Challenges. *International Journal of Public Administration*, 42(7), 596â€“615. https://doi.org/10.1080/01900692.2018.1498103

Yuliana, dkk. (2023). Analisis Implementasi SPBE pada Kementerian BUMN: Tantangan dan Rekomendasi. *Inovasi: Jurnal Ekonomi, Keuangan, dan Manajemen*, 19(2), 340â€“350.




