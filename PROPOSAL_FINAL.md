# PROPOSAL PKM-GFT

## Satu Pintu untuk Sebelas Domain: Rancangan Model Data Governance Nasional sebagai Fondasi Kematangan Manajemen Data Pemerintah Indonesia 2045

---


# BAB 1

## PENDAHULUAN


# 1.1 Latar Belakang
 

---

Bayangkan seorang ibu di pelosok daerah yang gagal menerima Bantuan Sosial (Bansos) semata-mata karena Nomor Induk Kependudukan (NIK) di Dukcapil tidak tersinkronisasi dengan basis data penerima bantuan di Kementerian Keuangan. Sang ibu dipaksa menjadi "kurir dokumen" antar-instansi, mengurus fotokopi ke berbagai loket birokrasi, sementara negara telah menghabiskan anggaran besar untuk digitalisasi. Skenario permasalahan nyata ini adalah potret dari kegagalan interoperabilitas sistem administrasi hari ini (Rusmini, 2025). Apabila masalah mendasar fragmentasi data ini tidak terpecahkan, maka visi besar Indonesia Emas 2045 yang bertingkat pada *AI Government* niscaya akan sulit direalisasikan.

Namun, realitas hari ini menunjukkan bahwa visi arsitektur masa depan tersebut sedang dibangun di atas fondasi manajemen data yang rapuh. Ditinjau dari standar kerangka kerja global DAMA-DMBOK (*Data Management Body of Knowledge*), penguasaan atas aset informasi menuntut kematangan pada 11 (sebelas) domain esensialâ€”mulai dari arsitektur, kualitas, keamanan, hingga interoperabilitas data (DAMA International, 2017). Ironisnya, di pemerintahan Indonesia saat ini, tidak ada satu pun dari kesebelas domain tersebut yang diimplementasikan secara komprehensif. Temuan Ombudsman RI (2022) mengonfirmasi keberadaan 27.400 aplikasi milik instansi pusat dan daerah yang beroperasi secara ego sektoral, membuktikan masifnya fragmentasi. Kondisi ini didukung oleh studi Vetiansyah et al. (2025) yang mengevaluasi maturitas manajemen data di sektor publik Indonesia, serta divalidasi oleh indeks nasional:

| Kategori Domain DAMA-DMBOK | Status Kematangan Riil Sektor Publik | Sumber Pembuktian Akademik/Empiris |
| :--- | :--- | :--- |
| **Data Governance** (Tata Kelola Utama) | Parsial / Belum Terstandardisasi Lintas Sektor | **KemenPAN-RB (2024)**: Indeks SPBE Nasional 2023 tertahan di skor 2,79 karena kebijakan tata kelola terpadu belum efektif diterapkan. |
| **Data Architecture, Metadata, & Modeling** | Rendah (Level 0 â€“ 1) / Tidak Ada Standar Baku | **Vetiansyah et al. (2025)**: Evaluasi dinas daerah menunjukkan domain Metadata Management kerap berada di Level 0 (tidak fungsional). |
| **Data Integration, Security, & Quality** | Silo-Based / Tertutup di Masing-masing Instansi | **Wahyuni et al. (2024); Ombudsman (2022)**: Kegagalan interoperabilitas disebabkan kelemahan koordinasi dari puluhan ribu aplikasi otonom. |

Kekacauan arsitektur ini berakar pada satu hal: absennya tata kelola data (*Data Governance*) nasional yang dipatuhi bersama. Dalam hierarki kematangan DAMA-DMBOK, *Data Governance* bukanlah satu di antara banyak rincian teknis, melainkan instrumen inti (*core enabler*) yang mengaktifkan 10 domain lainnya (Sargiotis, 2024). Tanpa *governance* yang menetapkan kepemilikan data (*data ownership*), menyeragamkan ontologi, dan menyinergikan metadata antar institusi, inisiatif integrasi teknologi secanggih apa pun akan terhambat oleh kelemahan kolaborasi institusional (Wahyuni et al., 2024).

Contoh empiriknya tergambar nyata pada pencapaian Kota Tangerang melalui aplikasi *Super Mantab* (Nugroho, Hamid, & Pratama, 2021). Meski sistem ERP daerah ini berhasil merangkum 30 modul pemerintahan secara mengesankan di level komputasi awan lokal, sistem tersebut nyaris lumpuh (*blind spot*) manakala ditekan untuk bertukar data sektoral seperti sinkronisasi dengan BPJS Kesehatan Pusat atau *database* Pendidikan Nasional. Akar sumbatannya bukanlah spesifikasi *API Gateway*, melainkan absennya standar regulasi yang memaksa institusi kementerian untuk saling memetakan metodologi struktur datanya terlebih dahulu (*semantic incompatibility*).
 
Model pendekatan yang memandang manajemen data sebatas urusan instalasi peranti lunak tidak lagi memadai (Thomas, 2019). Mengukuhkan infrastruktur SPBE tanpa membenahi kerangka tata kelolanya terlebih dulu sama halnya dengan mendirikan gedung pencakar langit di atas tanah rawa. Oleh karenanya, menempatkan model kerja *Federated Data Governance* bukan lagi sebuah pilihan pelengkap, melainkan prasyarat fundamental. Menguasai alur koordinasi, metadata, dan jaminan kualitas informasi di seluruh instansi penyelenggara negara merupakan titik pijak utama tata administrasi digital. Artinya, tata kelola data tidak sekadar menyelesaikan masalah teknis operasional, melainkan bertindak sebagai pilar utama transformasi institusi digital publik untuk menyongsong masa depan (Cretu, 2025).


# 1.2 Rumusan Masalah


---

Berdasarkan paparan pada latar belakang, teridentifikasi bahwa kegagalan agregasi dan kelumpuhan interoperabilitas SPBE Nasional tidak berakar dari keterbatasan infrastruktur teknologi, melainkan pada kelemahan struktural manajemen data (*data management immaturity*). Model pengelolaan data pemerintah belum bersandar pada kerangka *best-practice* mendunia seperti DAMA-DMBOK, sehingga 11 domain penting pengelolaannya beroperasi serampangan di bawah bayang-bayang ego sektoral.

Merespons krusialnya pembangunan kapasitas penopang ini, gagasan **"Satu Pintu untuk Sebelas Domain: Rancangan Model Data Governance Nasional sebagai Fondasi Kematangan Manajemen Data Pemerintah Indonesia 2045"** diusulkan. Ini bukanlah proposal teknis perangkat lunak baru, melainkan desain orkestrasi struktural multi-instansi. 

Agar desain konsepsional ini terarah dan tajam, tiga batasan masalah utama (*research questions*) dirumuskan sebagai berikut:

1. Bagaimana *Data Governance* (Tata Kelola Data) secara arsitektural menjadi prasyarat tunggal (*core enabler*) untuk mengaktifkan 10 domain kematangan manajemen data lainnya menurut sintesis DAMA-DMBOK konteks kelembagaan?
2. Bagaimana rancangan adaptasi *Federated Data Governance* yang dapat menyatukan tata kelola (seperti pertukaran metadata dan pembagian peran *data steward*) di tengah silorisasi lanskap birokrasi pemerintahan Indonesia?
3. Apa tiga langkah strategis pertama yang paling mengikat dan *non-invasive* untuk dieksekusi pemerintah dalam mendirikan embrio ekosistem tata kelola data berskala nasional menuju 2045?


# 1.3 Tujuan


---

Sejalan dengan konstruksi masalah yang telah ditetapkan, penulisan gagasan futuristik tertulis ini diarahkan untuk menuntaskan sasaran-sasaran analitis konkret berikut ini:

1. **Menganalisis dan Memetakan Peran Sentral Tata Kelola Data.** 
Membuktikan secara epistemologis dan konseptual (mengacu DAMA-DMBOK) bahwa *Data Governance* merupakan gerbang mutlak yang membongkar kelumpuhan 10 komponen manajemen mahadata, seperti kualitas, keamanan, dan metadata dalam kerangka SPBE nasional.

2. **Merancang Model Terapan *Federated Data Governance* Pemerintah.** 
Mengonstruksikan sebuah arsitektur tata kelola data yang dapat menembus tembok ego sektoral 34 kementerian/lembaga. Hal ini melibatkan integrasi konsep *Data Mesh* dan pendekatan distribusif inovatif tanpa intervensi penyitaan *database* mentah lintas lembaga (*privacy-preserving*).

3. **Merumuskan Peta Jalan (Tiga Langkah Krusial) Paling Strategis.** 
Memberikan cetak biru operasional awalâ€”jauh melampaui retorika visi abstrakâ€”tentang tiga inisiatif struktural pertama yang paling masuk akal dieksekusi oleh Kementerian PANRB dan instansi agregator lain selaku aktor *orchestrator* tata kelola negara.



# BAB 2

## GAGASAN


# 2.1 Kondisi Pemicu: Pelajaran dari Kematangan Data *India Stack*


---

Kebutuhan mendesak untuk merumuskan ulang fondasi integrasi digital tidak lahir dari ruang hampa. Praktik masa lalu yang hanya berfokus pada pengadaan aplikasi dibandingkan pengembangan arsitektur datanya telah menciptakan "utang teknis" (*technical debt*) yang menghambat interoperabilitas. Mencari referensi ideal dari negara Skandinavia layaknya Estonia (X-Road)â€”dengan populasi 1,3 juta jiwa dan corak birokrasi tunggalâ€”adalah langkah kurang relevan secara pengorganisasian bagi negara berdemografi raksasa bersistem desentralisasi seperti Indonesia.

Alih-alih berkaca pada Eropa, pemicu gagasan ini mengambil studi efektivitas pada model **India Stack** di Asia Selatan. Menghadapi 1,4 miliar penduduk dan kompleksitas birokrasi negara bagian, Pemerintah India tidak menyatukan seluruh data populasi ke dalam satu peladen (*server*) terpusat raksasa (Zollmann dkk., 2022). Sebaliknya, mereka mendirikan arsitektur interoperabilitas berbasis Tata Kelola Data (*Data Governance*) bernama DEPA (*Data Empowerment and Protection Architecture*). 

Dalam arsitektur *India Stack*, identitas biometrik (Aadhaar) dikelola oleh otoritas kependudukan, sedangkan jalur pertukaran keuangan (UPI) dijaga oleh otoritas finansial. Mereka mampu memproses lintas transaksi dalam volume masif bukan akibat sentralisasi pangkalan data, melainkan karena perumusan *data ownership*, standar metadata, dan arsitektur perizinan (*consent mechanism*) diharmonisasi secara struktural. Meskipun sukses memecah *silosasi*, model DEPA pada *India Stack* tetap mengundang diskursus akademis terkait celah pelindungan privasi warganya, sebuah catatan penting yang menggarisbawahi perlunya adopsi arsitektur berbasis *privacy-by-design* sejak awal perancangan (World Bank, 2020).

Pencapaian maupun kelemahan India menyajikan sebuah tesis rasional: rancang bangun integrasi pemerintahan berskala rasaksa adalah omong kosong tanpa adanya kerangka regulasi tata kelola data antarlembaga yang tegas. Mengingat evaluasi SPBE Indonesia yang masih berkutat pada inefisiensi arsitektur dan fragmentasi pengelolaan kementerian-lembaga, hadir kebutuhan mendesak untuk mengadopsi struktur *Federated Data Governance* berkualitas matang (merujuk pada *DAMA-DMBOK*) sebagai prasayarat kematangan teknokratik Indonesia 2045.


# 2.2 Solusi yang Ditawarkan: Satu Pintu Mengaktifkan Sepuluh Domain 


---

Sebagai antitesis dari integrasi proyektif (pengadaan *API* masif tanpa dasar), gagasan ini menawarkan **"Satu Pintu untuk Sebelas Domain: Rancangan Model Federated Data Governance."** Ini adalah model konseptual *best-practice* berstandar DAMA-DMBOK (*Data Management Body of Knowledge*) yang disesuaikan (*tailored*) untuk membedah kebuntuan birokrasi pemerintah kompartemental (kementerian vertikal dan lembaga horizontal).

Konsep sentral di balik arsitektur ini bukanlah menyusun teknologi baru, melainkan melantik hierarki manajerial (*governance first*). Dari total 11 domain kematangan, 10 domain krusial lainnya—yaitu *Data Architecture, Data Modeling, Data Storage, Data Security, Data Integration, Document Content, Reference & Master Data, Data Warehousing, Metadata*, dan *Data Quality*—mustahil ditegakkan jika pintu utamanya, **Data Governance**, belum terbentuk (DAMA International, 2017).

Berikut adalah kerangka adaptasinya bagi birokrasi Indonesia:

### 1. Titik Episentrum: *Governance* Sebagai Pintu Masuk
Model ini menetapkan tata kelola sebagai regulasi induk (*umbrella policy*) lintas kementerian. Solusi yang ditawarkan mengeksekusi prinsip *Non-Invasive Data Governance* dari Seiner (2014) di mana perubahan struktur birokrasi kementerian dikunci serendah mungkin, melainkan memformalisasi siapa pejabat/pengambil keputusan yang secara definitif menduduki kursi **Data Owner** (Menteri/Dirjen), **Data Steward** (Eselon teknis penjaga kualitas), maupun komite metadata nasional.

### 2. Efek Domino: Mengaktifkan 10 Domain Kematangan
*   **Domain *Metadata* dan *Data Architecture*:** Begitu komite *Steward* lintas kementerian terbentuk di pintu *Governance*, langkah pertama adalah penyeragaman ontologi. Kolom "Nomor Induk Pegawai" di BKN harus bermakna dan berkarakter persis dengan kolom serupa di *database* Taspen maupun KemenPAN-RB.
*   **Domain *Data Security* dan *Data Quality*:** Menjadi tanggung jawab *Data Owner*. Kedaulatan data dipertahankan dengan memvonis siapa yang berhak mengubah, menghapus, atau memvalidasi suatu baris informasi penduduk (misal: hanya fungsionaris Dukcapil yang berhak merombak status pernikahan).

### 3. Ekosistem Integrasi Lanjutan: *Federated Data Mesh* dan *GLASS*
Secara operasional (saat *governance* sudah ditegakkan), pertukaran data tidak menggunakan arsitektur peleburan sentralistis (*Data Lake* Nasional raksasa). Mengacu pada inovasi ekosistem interoperabilitas terpadu Uni Eropa—*Citizen-Centric Distributed Data-Sharing* model GLASS (Loutas dkk., 2022) dan filosofi desentralisasi *Data Mesh* (Dehghani, 2020)—setiap kementerian beroperasi layaknya *node* independen penyedia "produk data". Data dikonsolidasi *on-the-fly* (serta merta) dan kembali ke asalnya tanpa pernah diunduh atau dipindahkan ke pusat secara duplikatif, menjamin keselamatan mutlak di era rawan retas dan patuh pada prinsip privasi tingkat tinggi (*privacy-preserving sharing*).

Model ini mengakhiri friksi: birokrasi Indonesia dapat beralih menembus dinding-dinding sektoral secara komprehensif tanpa kementerian harus menderita fobia "kehilangan kontrol" atas rekam jejak aset elektroniknya.


# 2.3 Pihak-Pihak yang Membantu Mengimplementasikan Gagasan


---

Rancangan tata kelola ini dirumuskan untuk dijalankan pada tingkat koordinasi kementerian strategis dengan formasi kelembagaan berikut:

1. **Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi (KemenPAN-RB):** Bertindak sebagai pemangku kebijakan utama tata laksana pemerintahan. Posisinya krusial karena KemenPAN-RB memegang tuas otoritas Reformasi Birokrasi, memungkinkan kewajiban penetapan *Data Owner/Steward* diikat secara formal pada indeks evaluasi kinerja lembaga (SPBE).

2. **Kementerian Komunikasi dan Digital RI:** Bertanggung jawab pada dimensi pelaksanaan teknikal. Kemenkomdigi, melalui INA Digital, berfungsi mengawal kerangka arsitektur interoperabilitas agar mematuhi standar ontologi nasional, memastikan platform penghubung hanya mengizinkan *Application Programming Interface* (API) yang lolos verifikasi komite *governance*.

3. **Badan Siber dan Sandi Negara (BSSN):** Mengawasi domain keamanan siber (*Data Security Domain*). Mengingat sifat pertukaran data yang *federated*, peranan BSSN penting untuk menjaga skema verifikasi transaksi dan audit akses antarlembaga bebas dari intrusi eksternal operasional lintas entitas.

4. **Kementerian/Lembaga Prioritas (Lima Domain Agregator Historis):** Dukcapil Kemendagri (Kependudukan), Kemenkeu (Perpajakan/Bansos), Kemenkes (SatuSehat), Kemendikbudristek (Pendidikan), dan BPS (Statistik). Kelimanya dipilih sebagai percontohan fase penyesuaian awal mengingat entitas-entitas ini menyumbang porsi sirkulasi data layanan masyarakat terbesar dalam ekosistem pemerintahan Indonesia (Nugroho et al., 2021).


# 2.4 Tiga Langkah Kritis Tahap Awal dan Manajemen Risiko


---

Integrasi arsitektur data nasional tidak boleh terjebak dalam peta jalan ilusi (*roadmap*) 20 tahun yang kerap layu sebelum berkembang akibat pergantian konstelasi birokrasi. Visi besar ini harus dikonversi menjadi pergerakan gesit yang dapat dirasakan gempakannya seketika. Menggantikan visi *top-down* yang serampangan (BRIN, 2023), realisasi diusulkan lewat **Tiga Inisiatif Struktural Pertama yang Kritis**:

### Langkah Pertama: Deklarasi Mutlak *Data Owner* (0-6 Bulan)
Mewajibkan 5 Kementerian Agregator (Kependudukan, Kesehatan, Pendidikan, Keuangan, Statistik) untuk memformalkan pengambil keputusan eselon I sebagai *Data Owner* berlandaskan SK Menteri PAN-RB. Tanpa ada orang dengan otoritas untuk mengatakan "ya" atau "tidak" pada sebuah pertukaran data yang tertulis nama dan NIP-nya secara legal-formal, seluruh investasi teknologi integrasi selanjutnya dijamin gagal. 

### Langkah Kedua: Konsensus Kamus Metadata Lintas Lima Domain (6-12 Bulan)
*Data Steward* teknis dari kelima kementerian dikarantina secara definitif (Komite *Governance*) guna menseragamkan definisi taksonomi dasar: menyamakan format ontologi identitas umur, status pernikahan, hingga klasifikasi alamat. Standarisasi ini menjadi fondasi "bahasa yang sama" yang kemudian wajib ditaati (*compliance*) oleh aplikasi dan *vendor* SI apa pun di instansi masing-masing ke depannya.

### Langkah Ketiga: Orkestrasi Pertukaran *Federated* Eksekusi Percontohan (1 - 2 Tahun)
Uji coba implementasi mekanisme pertukaran aman *privacy-preserving* berbasis platform *Government Service Bus* antar sistem yang sudah ber-metadata seragam. Fokus diarahkan pada integrasi 1 skenario krusial, misalnya pembaruan status penerima subsidi dari Kemenkeu yang menembak pembaruan kelayakan NIK dari server Dukcapil secara otonom (*machine-to-machine*). Ini menjadi *success story* pembuktian bahwa sentralisasi perizinan tidak membutuhkan *data center* gabungan yang merampas ranah fungsional masing-masing.

---

### Potensi Risiko dan Hambatan Implementasi Tertinggi (Heeks Gap)

Eksekusi tiga langkah cepat ini bukan tanpa turbulensi. Studi Richard Heeks (2003) ihwal masifnya proyek e-Gov dunia yang gagal (35-50% layu) mengidentifikasi *Design-Reality Gap*â€”jurang antara desain akademis rasional teoretis dengan kultur irasional birokrasi institusional.

| Identifikasi Risiko (*Design-Reality Gap*) | Akar Permasalahan | Strategi Mitigasi Proaktif |
|--------------------------------------------|-------------------|-------------------|
| **Ego Sektoral Defensif** | Ketakutan "disalahkan" atas penyalahgunaan akses (*Trust Deficit*) serta keengganan kehilangan kendali "Kerajaan Data" sektoral. | Adopsi prinsip *Non-Invasive Data Governance* dan arsitektur *GLASS Data Mesh*. Data statis selamanya diam di server instansi bersangkutan. Mereka tidak kehilangan kontrol atas fisik *database*, sehingga kecurigaan institusional pupus. |
| **Resistensi Perubahan Format (*Migration Cost*)** | Beban psikologis teknisi daerah atau dinas harus merombak struktur tabel lama ke pedoman *Metadata* nasional terbaru. | Pelaksanaan terpusat, dan integrasi dengan skema *punishment and reward* anggaran TIK dari Bappenas/Kemenkeu. Anggaran IT rutin baru dicairkan seiring dengan tingkat kepatuhan penyesuaian metadata unit pengguna bersangkutan. |

Melalui langkah mitigasi ini, proposal desain *Data Governance* ini dijamin steril dari jebakan halusinasi utopis. Ia membumi pada problem sosiologis negara dan memberikan pisau bedah yang presisi mengatasi *inertia* di tubuh pemerintahan.







# BAB 3

## KESIMPULAN


# 3.1 Kesimpulan: Menegakkan Kedaulatan Data Indonesia 2045


---

Visi Indonesia Emas 2045 dan operasionalisasi ekosistem *AI Government* tidak akan dapat tercapai optimal selama inisiatif pelayanan publik digital masih beroperasi secara parsial di bawah hambatan inersia instansi. Ketersediaan infrastruktur dan keberadaan puluhan ribu aplikasi otonom sejauh ini belum mampu menghasilkan efisiensi tata kelola manakala diadang perancangan yang lemah pada level *semantic* dan *governance*. Kemacetan perwujudan interoperabilitas SPBE yang historis berakar pada masalah sistemik, yakni absennya standardisasi Tata Kelola Data (*Data Governance*) lintas lembaga.
 
Sesuai pijakan teori yang dibuktikan oleh kerangka DAMA-DMBOK, *Data Governance* tidak bertindak sebatas prosedur pelengkap, melainkan komponen penggiat utama (*core enabler*) yang melandasi perwujudan 10 pilar operasionalisasi data (salah satunya metadata silang ranah). Tanpa penerapan *governance* yang baku, inisiasi pilar manajerial data lainnya niscaya akan kembali tersendat dalam fragmentasi arsitektur.

Menghindari risiko sentralisasi *Data Lake* yang rentan peretasan dan konflik birokrasi, model *Federated Data Governance* memberikan alternatif desain desentralisasi yang telah diadopsi dengan sukses oleh India (melalui studi kasus kesiapan arsitektur *India Stack*). Hal mendasar untuk mengakselerasinya di Indonesia diuraikan lewat Tiga Langkah Kritis Pertama: komitmen deklarasi kepemilikan peladen (*Data Owner*); simplifikasi konsensus metadata agregator; dan transisi pengujian uji silang bertahap. Rekomendasi prosedur rasional tersebut memastikan mitigasi hambatan kultural birokrasi, sembari memangkas duplikasi belanja APBN teknologi.

Pada akhirnya, perdebatan seputar transformasi SPBE harus segera digeser dari obsesi infrastruktur perangkat keras menuju penyelesaian struktural konsolidasi tata kelola institusi. Kesimpulan dari gagasan ini bermuara pada kesadaran mendasar: **negara yang membiarkan kebingungan atas kepemilikan dan standar pengujian validasi datanya antarunit kementerian-lembaga belumlah memenuhi kualifikasi tata laksana pemerintah digital yang berdaulat secara holistik**. Terwujudnya *Data Governance* secara fungsional di seluruh aparatur bukan sebatas pencapaian administrasi operasional, melainkan fondasi mutlak yang memperkukuh eksistensi kedaulatan pertahanan sipil elektronik Negara Kesatuan Republik Indonesia di era kecerdasan komputasi modern.


# Daftar Pustaka

Berikut adalah daftar referensi lengkap yang dikutip secara langsung dalam penulisan naskah proposal PKM-GFT (Bab 1 – Bab 3), disusun menurut gaya pengutipan *Harvard Style*.

---

Badan Riset dan Inovasi Nasional (BRIN). (2023). *Masih Top-Down: BRIN Ungkap Hambatan Implementasi Satu Data Indonesia (SDI)*. Pusat Riset Pemerintahan Dalam Negeri BRIN. https://www.brin.go.id/news/121875/masih-top-down-brin-ungkap-hambatan-implementasi-satu-data-indonesia

Cretu, V. (2025). Future-Ready Public Institutions: Rethinking Data Governance Through Maturity Assessment. *Economy and Sociology*. https://economy-sociology.ince.md/index.php/Economy_and_Sociology/article/view/231

DAMA International. (2017). *DAMA-DMBOK: Data Management Body of Knowledge* (2nd ed.). Technics Publications.

Dehghani, Z. (2020). *The Data Mesh Shift*. Thoughtworks Whitepaper. https://www.thoughtworks.com/content/dam/thoughtworks/documents/whitepaper/tw_whitepaper_data_mesh_English.pdf

Heeks, R. (2003). Most eGovernment-for-Development Projects Fail: How Can Risks be Reduced?. *iGovernment Working Paper Series*, 14. Institute for Development Policy and Management, University of Manchester.

Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi (KemenPAN-RB). (2024). *Keputusan Menteri PANRB No. 13/2024 tentang Hasil Evaluasi SPBE Tahun 2023*. KemenPAN-RB.

Loutas, N., dkk. (2022). GLASS: A Citizen-Centric Distributed Data-Sharing Model within an e-Governance Architecture. *arXiv preprint*, arXiv:2203.08781. https://arxiv.org/abs/2203.08781

Nugroho, R. A., Hamid, A. H., & Pratama, D. (2021). Evaluasi Layanan Digital Berbasis ERP di Kota Tangerang: Studi Super Mantab. *Jurnal Studi Pemerintahan*, 12(3), 310–330.

Ombudsman Republik Indonesia. (2022). *Dualisme Interoperabilitas Data Sektor Pelayanan Publik Menuju Sistem Pemerintahan Berbasis Elektronik (SPBE)*. Laporan Kajian Kebijakan Internal. https://ombudsman.go.id/news/download/pwkinternal--dualisme-interoperabilitas-data-sektor-pelayanan-publik-menuju-sistem-pemerintahan-berbasis-elektronik-spbe

Rusmini, R. (2025). Rethinking e-government failure: a readiness-based analysis of Indonesian regions. *Cogent Social Sciences*, 11(1).

Sargiotis, D. (2024). *Data Governance Maturity Models: Assessing and Enhancing Your Program*. Springer. 

Seiner, R. S. (2014). *Non-Invasive Data Governance: The Path of Least Resistance and Greatest Success*. Technics Publications.

Thomas, M. A. (2019). Data management maturity assessment of public sector organizations. *Government Information Quarterly*.

Vetiansyah, R. A., Lelitasari, A., Ilyasa, R., & Satria, R. G. (2025). Maturity Level of Data Management at The Department of Tourism, Youth and Sports. *Eduvest - Journal of Universal Studies*, 5(9), 11379-11391.

Wahyuni, H., et al. (2024). Maturity of Cross-Organizational E-Government Interoperability. *Cogent Business & Management*.

World Bank. (2020). *Unraveling Data's Gordian Knot: Enablers and Safeguards for Trusted Data Sharing in the New Economy*. World Bank Group.

Zollmann, J., Kotecha, V., & Singh, A. (2022). India’s Data Empowerment and Protection Architecture: An evaluation of a new framework for federated data governance. *Journal of Cyber Policy*. https://doi.org/10.1080/23738871.2022.2131338
