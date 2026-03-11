DAFTAR ISI
DAFTAR ISI.......................................................................................................i
DAFTAR GAMBAR..........................................................................................ii
DAFTAR TABEL .............................................................................................iii
DAFTAR LAMPIRAN .....................................................................................iv
BAB 1. PENDAHULUAN.................................................................................. 1
1.1 Latar Belakang............................................................................................... 1
1.2 Rumusan Gagasan.......................................................................................... 2
1.3 Tujuan............................................................................................................ 3
1.4 Manfaat.......................................................................................................... 3
1.5 Luaran............................................................................................................ 4
BAB 2. GAGASAN ............................................................................................ 4
2.1 Kondisi Terkini yang Menjadi Pemicu Gagasan ............................................. 4
2.2 Solusi yang Ditawarkan: Rancangan Model 4-Layer...................................... 6
2.3 Pihak-Pihak yang Terlibat.............................................................................. 8
2.4 Langkah Strategis & Timeline Implementasi.................................................. 9
2.5 Prediksi Dampak Sistemik ........................................................................... 11
BAB 3. KESIMPULAN ................................................................................... 13
DAFTAR PUSTAKA....................................................................................... 13
LAMPIRAN ..................................................................................................... 17
Lampiran 1. Biodata Ketua dan Anggota, serta Dosen Pendamping.................... 17
Lampiran 2. Susunan Tim Pengusul dan Pembagian Tugas................................ 21
Lampiran 3. Surat Pernyataan Ketua Tim Pengusul............................................ 22
Lampiran 4. Hasil Uji Periksa Similaritas Proposal ............................................ 23

DAFTAR GAMBAR
Gambar 2.1 Model Interpoberabilitas SPBE Federated Data Governance (4-Layer).................................................................. Error! Bookmark not defined.

DAFTAR TABEL
Tabel 2.1 Arsitektur Rancangan Model 4-Layer Interoperabilitas SPBE............... 7
Tabel 2.2 Aktor dan Peran dalam Model Interoperabilitas SPBE.......................... 8
Tabel 2.3 Roadmap Implementasi 4 Fase (2025–2045) ...................................... 10
Tabel 2.4 Potensi Risiko dan Strategi Mitigasi ................................................... 11

DAFTAR LAMPIRAN
Lampiran 1. Biodata Ketua dan Anggota, serta Dosen Pendamping.................... 17
Lampiran 2. Susunan Tim Pengusul dan Pembagian Tugas................................ 21
Lampiran 3. Surat Pernyataan Ketua Tim Pengusul............................................ 22
Lampiran 4. Hasil Uji Periksa Similaritas Proposal ............................................ 23

# BAB 1. PENDAHULUAN
## 1.1 Latar Belakang
Indonesia tengah melangkah menuju Visi Indonesia Emas 20245 yang menempatkan transformasi digital birokrasi sebagai pilar utama pembangunann. Namun, transformasi digital pemerintahan sering dipandang hanya sebagai pengembangan aplikasi baru atau pemanfaatan teknologi mutakhir seperti Artificial Intelligence (AI) dan big data. Namun digitalisasi tanpa fondasi tata kelola data yang kuat justru berpotensi memperbesar masalah yang sudah ada. Sistem digital mampu mempercepat pengambilan keputusan, tetapi apabila data yang digunakan tidak akurat, tidak terstandarisasi, atau tidak memiliki kejelasan kepemilikan, maka dampak kesalahan yang dihasilkan juga akan menjadi lebih cepat dan lebih luas. Studi komprehensif terhadap proyek e-government menemukan bahwa 35% inisiatif mengalami kegagalan total dan 50% lainnya tergolong kegagalan parsial akibat kurang diperhatikannya aspek tata kelola dan budaya organisasi (Heeks, 2003). Pola kegagalan serupa masih terdokumentasi dua dekade kemudian: tingkat keberhasilan penuh proyek TI di sektor publik dilaporkan hanya berkisar antara 15 hingga 30%, dengan faktor organisasional dan sosial yang konsisten menjadi penyebab utama (Al-Hussaini, 2021).
Kondisi tersebut tercermin dalam implementasi Sistem Pemerintahan Berbasis Elektronik (SPBE) di Indonesia. Laporan Ombudsman RI mencatat terdapat sekitar 27.400 aplikasi milik pemerintah pusat dan daerah yang mayoritas beroperasi secara silo dan menyebabkan pemborosan anggaran TI yang tidak terukur. Belanja TI pemerintah pusat mencapai Rp25,4 triliun pada APBN 2022, tetapi sebagian besar terfragmentasi tanpa standar interoperabilitas yang mengikat. Berbagai inisiatif integrasi sistem pemerintahan di Indonesia selama ini lebih banyak menitikberatkan pada integrasi teknis antaraplikasi dan platform. Pendekatan ini penting, namun tanpa fondasi tata kelola data lintas instansi yang jelas, integrasi teknis berisiko menghasilkan konektivitas sistem yang rapuh dan tidak berkelanjutan. Laporan Indeks SPBE Nasional (2022) menegaskan hal ini: aspek interoperabilitas secara persisten menjadi domain dengan nilai terendah, menahan indeks nasional Indonesia bergeming pada angka 2,34 dari skala 5. Situasi ini menunjukkan bahwa permasalahan utama bukan terletak pada keterbatasan teknologi, melainkan pada belum terbentuknya mekanisme tata kelola data lintas instansi yang terstandarisasi dan operasional.
Dalam konteks Indonesia, berbagai inisiatif seperti Satu Data Indonesia, pengembangan portal data nasional, serta platform interoperabilitas SPBE telah menunjukkan kemajuan dalam aspek standar metadata dan integrasi teknis. Namun mekanisme tata kelola data lintas instansi yang operasional—termasuk penetapan kepemilikan data, tanggung jawab kualitas data, dan forum koordinasi pengelolaan data—belum berkembang secara memadai. BRIN (2023) mengungkap bahwa berbagai inisiatif parsial tersebut kerap berujung pada resistensi birokrasi. Hal ini terjadi karena , yang mengabaikan mekanisme tata kelola data lintas instansi yang berfungsi sebagai penghubung operasional antarinisiatif belum tersedia secara memadai.
Ketiadaan mekanisme tata kelola tersebut menimbulkan berbagai konsekuensi, termasuk rendahnya kepercayaan antarinstansi untuk berbagi data serta ketergantungan pada perjanjian kerja sama bilateral yang tidak terstandarisasi. Pengalaman Estonia menunjukkan bahwa ketika mekanisme tata kelola data antarsistem berhasil dibangun secara sistematis melalui ekosistem X-Road, negara tersebut mampu memangkas biaya administrasi publik hingga 2% dari PDB per tahun dan menghemat lebih dari 2000 jam kerja setiap tahunnya (e-Estonia, 2025). Hal serupa terbukti di negara berkembang: India memperlihatkan bahwa sistem identitas digital yang terinteroperasi melalui Aadhaar mampu mendorong inklusi keuangan dari 25% (2008) menjadi lebih dari 80% hanya dalam beberapa tahun—sebuah lompatan yang tanpa digitalisasi terpadu diperkirakan membutuhkan hingga 47 tahun (Thukral & Dagar, 2025). Kedua preseden ini menegaskan bahwa transformasi digital pemerintah perlu didekati melalui governance-first approach, yaitu dengan memastikan kejelasan kepemilikan data, standar metadata bersama, dan mekanisme koordinasi lintas instansi sebelum integrasi teknis dilakukan.
Berdasarkan kondisi tersebut, transformasi digital Indonesia membutuhkan sebuah terobosan paradigma yang beralih dari sekadar integrasi teknis menuju integrasi berbasis tata kelola. Diperlukan sebuah arsitektur yang mampu menjembatani otonomi data antarinstansi dengan standar nasional yang mengikat agar layanan publik digital dapat terintegrasi secara berkelanjutan.

## 1.2 Rumusan Gagasan
Sebagai upaya menjawab tantangan tersebut, gagasan ini mengusulkan Rancangan Model Interoperabilitas SPBE berbasis Federated Data Governance untuk mendukung Integrasi Layanan Publik Digital Indonesia—sebuah model arsitektur sistem informasi berlapis yang menempatkan tata kelola data sebagai fondasi utama sebelum integrasi teknis antarsistem pemerintahan dibangun. Berbeda dengan pendekatan sentralisasi absolut yang sering memicu resistensi birokrasi, model federasi memungkinkan setiap instansi tetap memiliki otonomi atas sistemnya, tetapi wajib tunduk pada standar interoperabilitas yang disepakati secara kolektif. Ketidakjelasan data owner, perbedaan standar metadata antarsistem, serta ketiadaan mekanisme berbagi data bersama yang selama ini luput dari perhatian (Putra, Santoso, & Hasibuan, 2023) menjadi hambatan struktural yang dijawab melalui adaptasi kerangka kerja Data Management Body of Knowledge (DAMA-DMBOK). Kerangka kerja ini menyediakan praktik terbaik tata kelola data, meliputi penetapan data owner, metadata management, dan data architecture—aspek-aspek yang justru menjadi akar persoalan SPBE saat ini. Model ini tidak bertujuan menggantikan sistem yang telah ada, melainkan menyediakan kerangka bersama yang menjamin setiap sistem dapat saling berkomunikasi secara terstandar..
Sejalan dengan identifikasi masalah di atas, gagasan ini difokuskan untuk menjawab tiga rumusan pertanyaan berikut:
1. Bagaimana kondisi tata kelola data yang terdokumentasi dalam literatur menghambat interoperabilitas sistem informasi lintas kementerian dalam implementasi SPBE di Indonesia?
2. Bagaimana prinsip-prinsip framework DAMA-DMBOK dapat diadaptasi untuk merancang model interoperabilitas berlapis (4- Layer Model) yang sesuai dengan konteks pemerintahan multi-instansi?
3. Bagaimana mekanisme operasional model tersebut dapat mendukung pertukaran dan integrasi data lintas instansi secara berkelanjutan dalam layanan publik digital?

## 1.3 Tujuan
Berdasarkan rumusan masalah yang diidentifikasi, gagasan ini disusun dengan tiga tujuan yang saling berkesinambungan:
1. Mengidentifikasi kondisi tata kelola data yang menghambat interoperabilitas SPBE lintas kementerian di Indonesia, dengan mengacu pada kajian Putra, Santoso, dan Hasibuan (2023) yang mendokumentasikan fragmentasi sistem sebagai tantangan utama implementasi SPBE.
2. Merancang model interoperabilitas berlapis (4-Layer Model) berbasis kerangka kerja DAMA-DMBOK yang dapat diadaptasi untuk konteks pemerintahan multiinstansi, terdiri dari : Governance Layer, Domain Layer, Interoperability Layer, dan Service Layer.
3. Menyusun peta jalan implementasi bertahap (roadmap) yang realistis untuk adopsi model tata kelola data nasional dalam rentang 2025–2045, mengikuti pendekatan phased implementation yang direkomendasikan dalam konteks Satu Data Indonesia (Maghfirra, 2024).

## 1.4 Manfaat
Apabila model yang diusulkan dapat diadopsi sebagai kerangka referensi pengembangan arsitektur digital pemerintah, gagasan ini diproyeksikan memberikan manfaat nyata bagi tiga pihak utama:
1. Bagi Pemerintah dan Pembuat Kebijakan
a. Efisiensi Anggaran Teknologi Informasi: model ini menyediakan standar bersama sehingga komponen sistem dapat digunakan secara shared services, berpotensi mengurangi duplikasi penganggaran yang didokumentasikan oleh Yuliana dkk. (2023).
b. Kebijakan Publik yang Lebih Berbasis Data: mekanisme single source of truth memungkinkan pengambilan kebijakan lebih akurat dan real-time.
c. Peningkatan Indeks SPBE: model ini memberikan jalur terstruktur pada aspek interoperabilitas yang secara konsisten menjadi domain paling lemah dalam evaluasi SPBE.
2. Bagi Masyarakat sebagai Pengguna Layanan Publik
a. Kemudahan Akses Layanan Terpadu: masyarakat tidak perlu mengisi data yang sama berulang kali untuk layanan di instansi berbeda; identitas kependudukan yang sudah terverifikasi di Dukcapil dapat langsung digunakan untuk layanan kesehatan, pendidikan, maupun perpajakan.
b. Layanan Darurat dan Sosial yang Lebih Responsif: integrasi data yang distandardisasi memungkinkan respons lintas instansi yang lebih cepat untuk pencairan bantuan sosial, rujukan layanan kesehatan, dan penanganan kedaruratan.
3. Bagi Pengembangan Keilmuan Sistem Informasi
a. Kontribusi Akademik: gagasan ini mengisi celah penelitian tentang adaptasi kerangka kerja manajemen data korporat (DAMA-DMBOK) ke dalam konteks pemerintahan multi-instansi yang masih sangat sedikit dikaji di Indonesia.
b. Model Referensi bagi Penelitian Selanjutnya: rancangan 4-Layer yang dihasilkan dapat menjadi landasan bagi penelitian lanjutan untuk menguji atau mengembangkan mekanisme implementasi di domain pemerintahan yang lebih spesifik.

## 1.5 Luaran
Luaran yang diharapkan dari gagasan futuristik ini adalah sebagai berikut:
1. Model Arsitektur 4-Layer Interoperability: Berupa rancangan teknis dan tata kelola yang mengadaptasi kerangka kerja DAMA-DMBOK ke dalam ekosistem SPBE, yang terdiri dari Governance Layer, Domain Layer, Interoperability Layer, dan Service Layer.
2. Peta Jalan (Roadmap) Implementasi Nasional 2025–2045: Dokumen strategis tahapan adopsi model Federated Data Governance yang terbagi menjadi fase fondasi, fase integrasi, dan fase optimasi layanan publik digital nasional.
3. Artikel Ilmiah: Sebuah naskah ilmiah berjudul "Rancangan Model Interoperabilitas SPBE Berbasis Federated Data Governance untuk Mendukung Integrasi Layanan Publik Digital Indonesia" yang siap dipublikasikan pada jurnal atau prosiding seminar nasional di bidang Sistem Informasi/Administrasi Publik.

# BAB 2. GAGASAN
## 2.1 Kondisi Terkini yang Menjadi Pemicu Gagasan
Tantangan interoperabilitas sistem informasi antarinstansi pemerintah bukanlah persoalan yang unik bagi Indonesia. Eynon dan Margetts (2007) mengidentifikasi bahwa hambatan terbesar dalam adopsi e-government di berbagai negara adalah siloed thinking kecenderungan setiap unit organisasi untuk bekerja secara tertutup dan melindungi datanya sendiri. Hambatan ini bersifat organisasional dan kultural, bukan teknis. Bahkan ketika infrastruktur teknologi memadai, tanpa mekanisme koordinasi yang mengikat, integrasi tidak akan terjadi secara berkelanjutan.
Di Indonesia, fenomena ini terdokumentasi secara sistematis. Kajian Putra, Santoso, dan Hasibuan (2023) menemukan bahwa fragmentasi sistem adalah tantangan yang paling dominan: setiap kementerian membangun infrastruktur digitalnya sendiri tanpa standar pertukaran data yang mengikat, menghasilkan data silo yang mengakibatkan duplikasi dan inkonsistensi informasi di hampir seluruh sektor pemerintahan.
Kondisi ini bahkan terjadi pada implementasi yang dianggap berhasil. Pemerintah Kota Tangerang berhasil membangun Super Mantab yang mengintegrasikan lebih dari 30 modul layanan pemerintah daerah secara internal. Namun sistem ini tidak dapat bertukar data dengan KPU, BPJS, BPS, maupun kementerian di tingkat nasional (Nugroho, Hamid, & Pratama, 2021). Ini bukan kegagalan teknologi Super Mantab secara teknis berfungsi baik. Ini adalah kegagalan ekosistem: tidak ada standar data bersama yang memungkinkan sistem-sistem tersebut untuk saling berkomunikasi secara semantik.
Dampak ketiadaan tata kelola data lintas instansi paling nyata dirasakan pada penyaluran bantuan sosial pandemi Covid-19. Latif dan Pangestu (2022) mendokumentasikan bahwa kegagalan utamanya bukan pada korupsi saja, tetapi juga disebabkan inkonsistensi data: Data Terpadu Kesejahteraan Sosial (DTKS) milik Kemensos tidak tersinkronisasi dengan data kependudukan Kemendagri, sehingga bantuan perlindungan sosial program PEN senilai Rp233 triliun tersebut tidak tersalurkan secara tepat sasaran. Akar masalahnya konsisten: tidak ada data owner yang bertanggung jawab atas konsistensi data lintas sistem, dan tidak ada standar pertukaran data yang mengikat antarinstansi.
Pemerintah Indonesia sebenarnya telah merespons tantangan ini melalui serangkaian regulasi. Perpres No. 132 Tahun 2022 telah menyediakan cetak biru Arsitektur SPBE Nasional. Perpres No. 82 Tahun 2023 mendorong percepatan GovTech. Permenkomdigi No. 6 Tahun 2025 menetapkan standar teknis terkini. Namun seperti yang diidentifikasi oleh Putra dkk. (2023), regulasi-regulasi ini mengatur apa yang harus dibangun secara teknis, tetapi tidak menjawab siapa yang bertanggung jawab atas data dan bagaimana standar pengelolaannya disepakati antarinstansi.
Secara kelembagaan, implementasi pengelolaan data pemerintah di Indonesia saat ini berjalan secara terpisah. Standarisasi metadata banyak dipimpin oleh BPS melalui statistik sektoral, integrasi sistem dikembangkan melalui arsitektur SPBE, sementara penyediaan data publik difasilitasi melalui portal Satu Data Indonesia. Meskipun ketiga komponen ini penting, koordinasi tata kelola yang menghubungkan ketiganya secara operasional masih terbatas. Akibatnya, bahkan inisiatif Satu Data Indonesia (SDI) yang diamanatkan Perpres No. 39/2019 pun mengalami stagnasi. BRIN (2023) mengungkap bahwa program SDI menghadapi hambatan serius: perbedaan standar metadata lintas kementerian membuat integrasi sulit secara komputasi, sementara pendekatan implementasi yang top-down tanpa forum kolaborasi teknis antarpemilik data justru menimbulkan resistensi. Dari pola ini teridentifikasi satu akar masalah yang konsisten: mekanisme tata kelola data lintas instansi belum tersedia—tidak ada kejelasan tentang pemilik data, tidak ada standar metadata yang mengikat, dan tidak ada forum yang memiliki otoritas untuk menyepakati standar tersebut.
Pola ini membentuk kesenjangan struktural yang dapat dipetakan pada dua dimensi. Secara kelembagaan, BPS sebagai pembina data statistik nasional dan KemenPPN/Bappenas sebagai koordinator forum SDI belum terhubung secara operasional dengan arsitektur SPBE yang dikembangkan Kemkomdigi, sehingga standardisasi metadata, integrasi sistem, dan penyediaan data publik berjalan di tiga jalur yang terpisah tanpa hub kelembagaan yang mengikat ketiganya. Secara arsitektur, inisiatif SPBE selama ini langsung menyasar lapisan teknis tanpa membangun fondasi kepemilikan data dan standar metadata terlebih dahulu. Kesenjangan inilah yang menjadi akar dari kegagalan interoperabilitas yang berulang dan yang membutuhkan solusi berbasis tata kelola.

## 2.2 Solusi yang Ditawarkan: Rancangan Model 4-Layer
Klischewski dan Scholl (2008) menegaskan bahwa interoperabilitas teknis saja tidak akan menghasilkan manfaat nyata jika kualitas dan standar data dari sistem-sistem sumber masih berbeda-beda. Berlandaskan premis inilah gagasan ini mengusulkan Rancangan Model Interoperabilitas SPBE Berbasis Federated Data Governance sebagai sebuah kerangka arsitektur sistem informasi berlapis. Model ini mengadopsi prinsip governance-first: memastikan bahwa kejelasan kepemilikan data, standar metadata, dan mekanisme tata kelola sudah tersedia sebelum integrasi teknis dilakukan. Model ini dirancang secara berjenjang dari fondasi ke atas, terdiri dari empat layer yang saling bergantung sebagaimana disajikan dalam Gambar dan Tabel 2.1:

Tabel 2.1 Arsitektur Rancangan Model 4-Layer Interoperabilitas SPBE
Layer | Nama & Fungsi Utama | Komponen Kunci
Layer 4 | Service Layer (Layanan publik terintegrasi yang dirasakan langsung oleh masyarakat) | Portal terpadu, Super-App Gov, single view NIK, dashboard kebijakan lintas domain, fondasi AI Government 2045
Layer 3 | Interoperability Layer (Infrastruktur teknis pertukaran data antardomain) | API Exchange Nasional (Government Service Bus), Data Catalog Nasional, Semantic Bridge antar skema metadata
Layer 2 | Domain Layer (Pengorganisasian data berdasarkan 5 domain fungsional prioritas) | 5 domain: Kependudukan (Dukcapil), Kesehatan (Kemenkes), Pendidikan (Kemendikbud), Ekonomi (BI), Keuangan Negara (Kemenkeu/BPS) dengan standar metadata per domain (Data Mesh)
Layer 1 | Fondasi Governance Layer (Fondasi tata kelola yang harus tersedia sebelum layer lain dapat berfungsi) | Data Owner (Eselon I per K/L), Data Steward Committee (SK KemenPAN-RB), Kebijakan Metadata Bersama – Non Invasive Data Governance (Seiner, 2014)

Yang membedakan model ini dari upaya integrasi SPBE sebelumnya adalah pendekatan berlapis yang dimulai dari governance. Kebanyakan inisiatif SPBE Indonesia selama ini langsung menyasar Layer 3 (integrasi teknis) tanpa membangun Layer 1 dan Layer 2 terlebih dahulu, sehingga menghasilkan koneksi yang rapuh dan tidak berkelanjutan. Model ini secara eksplisit menempatkan penetapan data owner, standarisasi metadata, dan mekanisme tata kelola ebagai prasyarat—bukan sebagai tambahan di akhir—dari seluruh proses integrasi.
Dalam Layer 2, prinsip arsitektur Data Mesh (Dehghani, 2020) menjadi relevan: setiap domain mengelola datanya sendiri sebagai “produk data” yang siap dikonsumsi oleh domain lain, tanpa harus menyerahkan fisik database-nya ke satu tempat terpusat. Kontrol tetap terdesentralisasi di domain masing-masing, namun terikat oleh standar metadata bersama yang ditetapkan di Layer 1. Permana dan Susanto (2024) telah membuktikan secara empiris bahwa pendekatan desain tata kelola berbasis DAMA-DMBOK dapat diimplementasikan dalam konteks Indonesia, menghasilkan standar metadata yang ketat sekaligus membuka ruang integrasi operasional antardepartemen.

## 2.3 Pihak-Pihak yang Terlibat
Keberhasilan implementasi model interoperabilitas ini bergantung pada keterlibatan aktif dari sejumlah aktor kelembagaan yang memiliki kewenangan, kompetensi, dan data yang saling melengkapi. Eynon dan Margetts (2007) menekankan bahwa integrasi lintas instansi tidak dapat berjalan tanpa adanya boundary-spanning organization, lembaga atau forum yang memiliki otoritas untuk mengoordinasikan berbagai kepentingan. Dalam model ini, peran tersebut diemban secara kolektif oleh sejumlah aktor kelembagaan sebagaimana diurakan dalam Tabel 2.2 berikut. 

Tabel 2.2 Aktor dan Peran dalam Model Interoperabilitas SPBE
Aktor | Peran dalam Model | Layer Terkait
Kemkomdigi | Koordinator arsitektur teknologi SPBE nasional; menetapkan standar API dan protokol interoperabilitas; pembina Government Service Bus | Layer 3–4
KemenPAN-RB | Koordinator kebijakan implementasi SPBE lintas K/L; menerbitkan SK penetapan jabatan fungsional Data Steward di setiap kementerian | Layer 1
BSSN | Menetapkan dan mengaudit standar keamanan informasi (Peraturan BSSN No.4/2021) pada semua lapisan pertukaran data | Layer 3
Kemenkeu | Instansi pilot utama untuk Layer 1–2 sistem SAKTI dan SPAN adalah ERP pemerintah paling matang di Indonesia | Layer 1–2
Kemendagri / Dukcapil | Data Owner Domain Kependudukan mengelola basis data NIK nasional (SIAK) yang menjadi identitas digital dasar bagi semua domain lain | Layer 2
Kemenkes, Kemendikbud, BPS | Data Owner Domain Kesehatan, Pendidikan, dan Statistik Nasional domain prioritas berikutnya dalam pilot standarisasi metadata | Layer 2
Pemkot Tangerang | Model implementasi daerah Super Mantab sebagai prototipe integrasi lokal yang membuktikan kemampuan teknis sudah ada di level daerah | Layer 3–4
BRIN / Perguruan Tinggi | Pengembangan standar metadata, riset evaluasi maturity model, dan kajian independent implementasi per fase | Layer 1–2
Data Steward Committee | Forum koordinasi lintas K/L yang menyepakati dan menegakkan standar metadata bersama; bukan lembaga baru melainkan formalisasi via SK Menpan | Layer 1

Data Steward Committee yang dibentuk di bawah koordinasi KemenPAN-RB, menjadi simpul koordinasi utama, tanpa memerlukan pembentukan lembaga baru melalui undang-undang.
Peran BPS dan KemenPPN/Bappenas bersifat struktural dan tidak dapat diabaikan: keduanya adalah aktor yang diamanatkan langsung oleh Perpres No. 39/2019 sebagai pengelola ekosistem Satu Data Indonesia. Dalam model ini, keduanya berfungsi sebagai hub kelembagaan yang menghubungkan standar teknis (Governance Layer) dengan agenda kebijakan data nasional—analog dengan peran LNSW yang menjadi titik temu data ekspor-impor dari puluhan K/L tanpa mengambil alih sistem masing-masing instansi.

## 2.4 Langkah Strategis & Timeline Implementasi
Implementasi model interoperabilitas SPBE berbasis federated data governance tidak dapat dilakukan secara revolusioner atau sekaligus. Pengalaman Estonia membuktikan bahwa pencapaian ekosistem e-government kelas dunia membutuhkan waktu hampir dua dekade dimulai dari penetapan kebijakan dasar pada awal 2000-an hingga X-Road menghubungkan lebih dari 900 sistem pada periode berikutnya (Kalvet, 2012). Roadmap Indonesia 2025–2045 yang diusulkan di sini adalah bentang waktu 20 tahun dengan empat fase yang saling bergantung.
Pendekatan ini mengikuti prinsip Non-Invasive Data Governance (Seiner, 2014): perubahan dimulai dari formalisasi apa yang sudah ada, bukan membangun ulang dari nol. Bank Dunia juga merekomendasikan bahwa integrasi data berskala nasional harus dimulai dari domain yang paling krusial secara bertahap, bukan mengintegrasikan semua Kementerian sekaligus (Maghfirra, 2024).

Tabel 2.3 Roadmap Implementasi 4 Fase (2025–2045)
1 (2025–2027) | Fondasi Governance | Audit tata kelola data di lima Kementerian/Lembaga (K/L) pilot; pemetaan data owner dan standar data existing per domain; pembentukan Data Steward Committee via SK KemenPAN-RB; penyusunan kebijakan metadata nasional pertama | SK Data Steward Committee terbit; peta silo data 5 domain tersedia; data owner tiap domain terdefinisi resmi
2 (2027–2030) | Standardisasi Domain | Penetapan Standar Metadata Nasional (National Metadata Registry) untuk 5 domain prioritas; piloting API antar 5 K/L (Government Service Bus versi awal); formalisasi kamus data per domain | Metadata Registry nasional aktif; API lintas 5 K/L berfungsi; Indeks SPBE mulai naik di aspek interoperabilitas
3 (2030–2035) | Integrasi Nasional | Rollout Government Service Bus ke seluruh 34+ K/L; Data Catalog Nasional beroperasi penuh; Single-View NIK berbasis Dukcapil tersedia di semua layanan publik; dashboard kebijakan lintas kementerian aktif | Indeks SPBE Nasional mencapai >= 3,5 dari skala 5; warga dapat mengakses seluruh layanan dengan 1 identitas NIK
4 (2035–2045) | AI Government | Penerapan Analytical AI berbasis data lintas kementerian untuk prediksi kebutuhan layanan; Autonomous AI pilot untuk rekomendasi kebijakan; Indonesia sebagai benchmark tata kelola data pemerintah di ASEAN | Sistem AI pemerintah beroperasi dengan data terintegrasi; Indonesia masuk 5 besar government AI readiness ASEAN

## 2.5 Prediksi Dampak Sistemik
Apabila model interoperabilitas SPBE berbasis federated data governance ini dapat diadopsi secara bertahap oleh pemerintah, dampak yang diproyeksikan tidak hanya bersifat teknis, tetapi sistemik dan lintas sektor. Dampak tersebut dapat dikelompokkan dalam empat dimensi.
A. Efisiensi Pemerintahan: Hentikan Duplikasi Anggaran TI
Salah satu pemborosan paling nyata dari fragmentasi SPBE adalah duplikasi pembangunan sistem dengan fungsi serupa di Kementerian yang berbeda. Kajian Yuliana dkk. (2023) tentang Kementerian BUMN mengungkap bahwa ketiadaan standar interoperabilitas memicu pengadaan aplikasi yang berulang dan penyimpanan data yang redundan. Dengan model ini, komponen sistem dapat digunakan secara shared services satu standar API, satu direktori data nasional sehingga anggaran yang selama ini terfragmentasi dapat dialihkan ke pengembangan kualitas layanan.
B. Peningkatan Kualitas Layanan Publik: Warga di Pusat
Silo mentality yang mendominasi birokrasi Indonesia saat ini berdampak langsung pada warga: formulir yang diisi berulang, dokumen yang dikumpulkan berkali-kali, dan waktu tunggu layanan yang panjang. Dengan terwujudnya Layer 4 (Service Layer) model ini, layanan berbasis single-view NIK memungkinkan warga cukup terdaftar sekali di Dukcapil untuk mengakses semua layanan pemerintah. Respons layanan sosial pun lebih cepat, pencairan bansos dan rujukan kesehatan dapat memanfaatkan data warga secara real-time tanpa rekonsiliasi manual. Pengalaman India dengan sistem identitas tunggal memperkuat proyeksi ini. Thukral dan Dagar (2025) membuktikan bahwa Aadhaar—sistem identitas digital yang mencakup 97% populasi India—mendorong inklusi keuangan hanya dalam beberapa tahun. Kunci keberhasilan utamanya adalah standar interoperabilitas yang menghubungkan sistem yang sudah ada, persis prinsip Layer 2 dan Layer 4 model ini. Tetapi berbeda dengan Aadhaar yang menyentralisasikan data biometrik dan menimbulkan risiko privasi, model federated yang diusulkan menjaga data tetap di instansi asal dan hanya diakses melalui standar bersama.
C. Penyelamatan Program Satu Data Indonesia
BRIN (2023) mengidentifikasi bahwa program Satu Data Indonesia menghadapi stagnasi akibat dua masalah mendasar: perbedaan standar metadata lintas instansi dan pendekatan top-down yang menciptakan resistensi. Model ini secara langsung menjawab keduanya: Layer 1 (Governance) membangun mekanisme Data Steward Committee yang bersifat horizontal dan kolaboratif, sementara Layer 2 (Domain) menetapkan standar metadata bersama per domain yang mengikat secara konsensus. Model ini bukan bersaing dengan SDI model ini adalah mekanisme implementasi yang selama ini belum dimiliki SDI.
D. Fondasi AI Government 2045
Wirtz, Weyerer, dan Geyer (2019) menegaskan bahwa penerapan Analytical AI dan Autonomous AI di pemerintahan mensyaratkan data yang berkualitas, konsisten, dan dapat diakses lintas instansi. Tanpa ekosistem interoperabilitas, sistem AI pemerintah hanya bisa beroperasi dengan data parsial dari satu instansi. Dengan ekosistem Layer 1–4 yang berjalan pada 2035–2045, pemerintah Indonesia akan memiliki data lintas 34+ kementerian yang distandardisasi, fondasi bagi predictive analytics kebutuhan layanan publik, dan infrastruktur untuk pemodelan kebijakan berbasis data nasional yang utuh. McKinsey Global Institute menproyeksikan bahwa sistem identitas digital yang terintegrasi penuh berpotensi membuka nilai ekonomi setara 3-13% PDB, dengan rata-rata 6% untuk negara berkembang (Thukral & Dagar, 2025). Angka ini bukan spekulatif, Aadhaar terbukti berkontribusi antara 2,5%–4,3% terhadap PDB tahunan India hanya melalui efisiensi autentikasi lintas sektor, Indonesia, dengan skala ekonomi yang jauh lebih besar dan fragmentasi data yang lebih dalam, berpotensi memperoleh manfaat serupa apabila ekosistem interoperabilitas ini berhasil dibangun. Model interoperabilitas SPBE ini bukan sekadar proyek integrasi sistem—melainkan investasi infrastruktur data nasional yang hasilnya akan dirasakan selama beberapa dekade ke depan.

# BAB 3. KESIMPULAN
Rancangan Model Interoperabilitas SPBE Berbasis Federated Data Governance yang diusulkan dalam naskah ini merupakan jawaban sistemik atas kegagalan integrasi layanan digital pemerintah—bukan dengan menambah aplikasi baru atau sentralisasi data secara paksa, melainkan dengan menetapkan aturan kepemilikan dan standar data yang disepakati bersama. Berbeda dengan inisiatif sebelumnya yang cenderung terjebak pada pendekatan top-down dan langsung melompat pada perakitan teknis tanpa tata kelola yang mengikat (BRIN, 2023), model empat layer ini mengunggulkan pendekatan governance-first.
Realisasi gagasan ini sangat layak dieksekusi (feasible) karena tidak membutuhkan perombakan struktur birokrasi, penambahan anggaran infrastruktur secara masif, maupun penerbitan undang-undang baru. Mengikuti prinsip Non-Invasive Data Governance (Seiner, 2014), model ini dibangun di atas fondasi regulasi yang sudah tersedia, yakni Perpres No. 132/2022 tentang Arsitektur SPBE dan Permenkomdigi No. 6/2025 tentang Standar Teknis Aplikasi. Aktor-aktor penggeraknya pun telah siap beroperasi: Kemkomdigi sebagai koordinator arsitektur teknologi, KemenPAN-RB yang cukup menerbitkan SK pembentukan Data Steward Committee, BSSN sebagai pengawal standar keamanan, serta Kemenkeu dan Dukcapil sebagai instansi pilot tahap awal, serta BPS dan KemenPPN/Bappenas sebagai hub kelembagaan yang menghubungkan standar data nasional dengan agenda Satu Data Indonesia.
Meskipun terlihat ambisius, implementasi penuh ekosistem interoperabilitas ini dapat dicapai secara proporsional dalam bentang waktu 20 tahun (2025–2045). Periode ini sangat realistis jika mengambil preseden dari Estonia, yang juga membutuhkan waktu dua dasawarsa untuk membangun dan mematangkan ekosistem X-Road hingga menjadi benchmark global (Kalvet, 2012). Empat fase implementasi yang dirancang—Fondasi Governance (2025–2027), Standarisasi Domain (2027–2030), Integrasi Nasional (2030–2035), dan AI Government (2035–2045) memastikan transisi yang berkesinambungan.
Bila gagasan ini diterapkan secara persisten, dampak diproyeksikan menjangkau berbagai aspek: penghematan APBN dari penurunan duplikasi pengadaan sistem TI, peningkatan skor domain interoperabilitas pada Indeks SPBE Nasional, dan pada puncaknya, Indonesia memiliki infrastruktur data yang tangguh dan terintegrasi penuh sebagai prasyarat krusial bagi penerapan kecerdasan buatan di sektor publik (Wirtz et al., 2019). Dengan merintis federated data governance hari ini, Indonesia tengah meletakkan fondasi yang kokoh menuju tata kelola pemerintahan masa depan yang responsif, terintegrasi, dan presisi demi menyongsong visi Indonesia Emas 2045.

# DAFTAR PUSTAKA
Al-Hussaini, Y. 2021. Why do most e-government projects fail? (Part I). LinkedIn. https://www.linkedin.com/pulse/why-do-most-e-government-projects-fail-part-i-yousuf-al-hussaini/. Diakses tanggal 8 Maret 2026.
Badan Riset dan Inovasi Nasional (BRIN). 2023. Masih Top-Down: BRIN Ungkap Hambatan Implementasi Satu Data Indonesia (SDI). URL: https://www.brin.go.id/news/121875/masih-top-down-brin-ungkap-hambatan-implementasi-satu-data-indonesia. Diakses tanggal 8 Maret 2026.
Badan Siber dan Sandi Negara. 2021. Peraturan BSSN Nomor 4 Tahun 2021 tentang Pedoman Manajemen Keamanan Informasi Sistem Pemerintahan Berbasis Elektronik dan Standar Teknis dan Prosedur Keamanan Sistem Pemerintahan Berbasis Elektronik. URL: https://peraturan.bpk.go.id/Details/174275/peraturan-bssn-no-4-tahun-2021. Diakses tanggal 8 Maret 2026.
DAMA International. 2017. DAMA-DMBOK: Data Management Body of Knowledge. Edisi ke-2. Technics Publications. New Jersey.
Dehghani, Z. 2020. The Data Mesh Shift. URL: https://www.thoughtworks.com/content/dam/thoughtworks/documents/whitepaper/tw_whitepaper_data_mesh_English.pdf. Diakses tanggal 8 Maret 2026.
e-Estonia. 2025. e-Estonia guide. https://e-estonia.com/wp-content/uploads/eestonia_guide_08-04-2025.pdf. Diakses tanggal 8 Maret 2026.
Eynon, R. dan H. Margetts. 2007. Organisational Solutions for Overcoming Barriers to eGovernment. European Journal of ePractice. 1 (1):72–85.
Haslhofer, B. dan W. Klas. 2010. A Survey of Techniques for Achieving Metadata Interoperability. ACM Computing Surveys (CSUR). 42 (2):1-37.
Heeks, R. 2003. Most eGovernment-for-Development Projects Fail: How Can Risks be Reduced?. iGovernment Working Paper Series. 14:1-32.
Heeks, R. 2006. Implementing and Managing eGovernment: An International Text. SAGE Publications. London.
Kalvet, T. 2012. Innovation: A Factor Explaining e-Government Success in Estonia. Electronic Government: An International Journal. 9 (2):142–157.
Kementerian Keuangan Republik Indonesia. 2021. Informasi APBN 2022: Melanjutkan dukungan pemulihan ekonomi dan reformasi struktural. Jakarta: Kementerian Keuangan Republik Indonesia
Kementerian Komunikasi dan Digital. 2025. Peraturan Menteri Komunikasi dan Digital Nomor 6 Tahun 2025 tentang Standar Teknis Aplikasi SPBE. Jakarta.
Kementerian Komunikasi dan Informatika RI. 2019. Peraturan Presiden Nomor 95 Tahun 2018 tentang Sistem Pemerintahan Berbasis Elektronik. Jakarta.
Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi. 2022. Laporan Indeks SPBE Nasional 2022. KemenPAN-RB. Jakarta.
Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi. 2024. Akselerasi Pemerintahan Digital Melalui Pemanfaatan Arsitektur SPBE. URL: https://www.menpan.go.id/site/berita-terkini/akselerasi-pemerintahan-digital-melalui-pemanfaatan-arsitektur-spbe. Diakses tanggal 8 Maret 2026.
Klischewski, R. dan H.J. Scholl. 2008. Information Quality as Capstone in Negotiating e-Government Integration, Interoperability, and Cooperability. Government Information Quarterly. 25 (2):203–225.
Latif, I. S. dan Pangestu, I. A. 2022. 'Problematika penyalahgunaan bantuan sosial pada masa pandemi', JUSTISI, 8(2), hlm. 95-107.
Loutas, N., dkk. 2022. GLASS: A Citizen-Centric Distributed Data-Sharing Model within an e-Governance Architecture. arXiv preprint. arXiv:2203.08781.
Maghfirra, D. 2024. Satu Data Indonesia: Bridging the Governance Gap. URL: https://thedocs.worldbank.org/en/doc/15f75c2212bc4df3aa1fc764e8af7346-0070012024/related/Dini-Maghfirra-Satu-Data-Indonesia-ENG.pdf. Diakses tanggal 8 Maret 2026.
Nugroho, R.A., A.H. Hamid dan D. Pratama. 2021. Evaluasi Layanan Digital Berbasis ERP di Kota Tangerang: Studi Super Mantab. Jurnal Studi Pemerintahan. 12 (3):310–330.
OECD. 2019. Data Governance in the Public Sector. OECD Digital Government Studies. OECD Publishing. Paris.
Ombudsman Republik Indonesia. 2022. Dualisme Interoperabilitas Data Sektor Pelayanan Publik Menuju Sistem Pemerintahan Berbasis Elektronik (SPBE). URL: https://ombudsman.go.id/news/download/pwkinternal--dualisme-interoperabilitas-data-sektor-pelayanan-publik-menuju-sistem-pemerintahan-berbasis-elektronik-spbe. Diakses tanggal 8 Maret 2026.
Pemerintah Indonesia. 2019. Peraturan Presiden Nomor 39 Tahun 2019 tentang Satu Data Indonesia. Jakarta.
Pemerintah Indonesia. 2022. Peraturan Presiden Nomor 132 Tahun 2022 tentang Arsitektur Sistem Pemerintahan Berbasis Elektronik Nasional. Jakarta.
Permana, R.M. dan T.D. Susanto. 2024. Data Governance Design Based on DAMA-DMBOK Framework: A Review and Case Study in Indonesia. International Journal of Research and Review. 11 (8):241-255.
Pratama, A. 2023. Urgensi Kebijakan Berbasis Data (Data-Driven Policy) dan Residu Silo Mentality pada Birokrasi Pemerintahan. Jurnal Parlementer. 8 (1):112-126.
Putra, A.S., H.B. Santoso dan Z.A. Hasibuan. 2023. Mapping SPBE Challenges in Indonesia: A Domain Architecture Perspective. Jurnal Sistem Informasi. 19 (1):1-18.
Seiner, R.S. 2014. Non-Invasive Data Governance: The Path of Least Resistance and Greatest Success. Technics Publications. New Jersey.
Themistocleous, M. dan Z. Irani. 2001. Benchmarking the Benefits and Barriers of Application Integration. Benchmarking: An International Journal. 8 (4):317–331.
Thukral, A. dan Dagar, L. (2025) 'India's digital public infrastructure: Analyzing UPI and Aadhaar in GDP growth and cost optimization', Journal of Emerging Investigators, hlm. 1-10.
UN Global Pulse Asia Pacific. 2024. New Administration, New Governance: Envisioning the Trajectory of Data Governance in Indonesia. URL: https://medium.com/un-global-pulse-ap/new-administration-new-governance-envisioning-the-trajectory-of-data-governance-in-indonesia-605542bd1fd5. Diakses tanggal 8 Maret 2026.
Wiradharma, A. dan L.E. Nugroho. 2020. Evaluasi Implementasi Sistem Pemerintahan Berbasis Elektronik di Indonesia: Studi Kasus Kementerian Keuangan. Jurnal Informatika dan Rekayasa Perangkat Lunak. 2 (1):45–58.
Wirtz, B.W., J.C. Weyerer dan C. Geyer. 2019. Artificial Intelligence and the Public Sector—Applications and Challenges. International Journal of Public Administration. 42 (7):596–615.
World Bank. 2020. Unraveling Data’s Gordian Knot: Enablers and Safeguards for Trusted Data Sharing in the New Economy. World Bank Group. Washington DC.
Yuliana, dkk. 2023. Analisis Implementasi SPBE pada Kementerian BUMN: Tantangan dan Rekomendasi. Inovasi: Jurnal Ekonomi, Keuangan, dan Manajemen. 19 (2):340–350.

# LAMPIRAN
Lampiran 1. Biodata Ketua dan Anggota, serta Dosen Pendamping
Biodata Ketua
A. Identitas Diri
1. Nama Lengkap: Beryl Cholif Arrahman Rahardjo
2. Jenis Kelamin: Laki-laki / Perempuan
3. Program Studi: S1 Sistem Informasi – Business Analytics
4. NIM: 2902828720
5. Tempat dan Tanggal Lahir: Banyumas, 3 Maret 1998
6. Alamat E-mail: beryl.rahardjo@binus.ac.id
7. Nomor Telepon/HP: 085710158581

C. Penghargaan Yang Pernah Diterima
Semua data yang saya isikan dan tercantum dalam biodata ini adalah benar dan dapat dipertanggungjawabkan secara hukum. Apabila di kemudian hari ternyata dijumpai ketidaksesuaian dengan kenyataan, saya sanggup menerima sanksi.
Demikian biodata ini saya buat dengan sebenarnya untuk memenuhi salah satu persyaratandalam pengajuan PKM-GFT.
Jakarta, 8 Maret 2026
Ketua Tim
Beryl Cholif Arrahman Rahardjo
NIM 2902828720

Lampiran 2. Susunan Tim Pengusul dan Pembagian Tugas
1. Beryl Cholif Arrahman Rahardjo | Penulis pertama | S1 Sistem Informasi | Menyusun bab 1-3 dan 
2. Faris Aulia Rahman | Penulis kedua | S1 Sistem Informasi | Melakukan document proofread, Menambahkan pembahasan di Bab 1 dan Bab 2
3. Rizqi Puji Sukmawati | Penulis ketiga | S1 Sistem Informasi | 
4.  Dosen Pendamping | Dosen Pendamping | Membimbing dan mengarahkan karya yang diajukan

Lampiran 3. Surat Pernyataan Ketua Tim Pengusul
SURAT PERNYATAAN KETUA TIM PENGUSUL
Yang bertanda tangan di bawah ini:
Nama Ketua Tim : Beryl Cholif Arrahman Rahardjo
Nomor Induk Mahasiswa : 2902828720
Program Studi : S1 Sistem Informasi – Business Analytics
Nama Dosen Pendamping :
Perguruan Tinggi : Universitas Bina Nusantara
Judul Proposal PKM : Rancangan Model Interoperabilitas SPBE Berbasis Federated Data Governance untuk Mendukung Integrasi Layanan Publik Digital Indonesia

Dengan ini menyatakan bahwa proposal PKM-GFT saya dengan judul yang diusulkan untuk tahun anggaran 2026 adalah:
1. Asli karya kami, belum pernah dibiayai oleh lembaga atau sumber dana lain.
2. Penggunaan kecerdasan buatan/ artificial intelligence (AI) mengikuti syarat dan ketentuan yang berlaku sesuai dengan Panduan GenAI Belmawa (https://s.id/PanduanGenAI)

Bilamana di kemudian hari ditemukan ketidaksesuaian dengan pernyataan ini, maka saya bersedia dituntut dan diproses sesuai dengan ketentuan yang berlaku dan mengembalikan seluruh biaya yang sudah diterima ke kas Negara.
Demikian pernyataan ini dibuat dengan sesungguhnya dan sebenar – benarnya.
Jakarta, 8 Maret 2026
Yang menyatakan, (Meterai)
Beryl Cholif Arrahman Rahardjo
NIM 2902828720

Lampiran 4. Hasil Uji Periksa Similaritas Proposal
(Turtitin, iThenticate atau yang lainnya) dengan indeks similaritas masimum 25%
