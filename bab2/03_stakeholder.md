# 2.3 Pihak-Pihak yang Terlibat


---

Keberhasilan implementasi model interoperabilitas ini bergantung pada keterlibatan aktif dari sejumlah aktor kelembagaan yang memiliki kewenangan, kompetensi, dan data yang saling melengkapi. Eynon dan Margetts (2007) menekankan bahwa integrasi lintas instansi tidak dapat berjalan tanpa adanya *boundary-spanning organization* — lembaga atau forum yang memiliki otoritas untuk mengkoordinasikan berbagai kepentingan dan standar yang berbeda. Dalam model ini, peran tersebut diemban secara kolektif oleh *Data Steward Committee* yang dibentuk di bawah koordinasi KemenPAN-RB, tanpa memerlukan pembentukan lembaga baru melalui undang-undang.

Tabel berikut merangkum pihak-pihak yang terlibat beserta peran strategis masing-masing dalam model 4-layer yang diusulkan:

| No. | Aktor | Peran dalam Model | Layer Terkait | Referensi |
|-----|-------|-------------------|---------------|-----------|
| 1 | **Kemkomdigi** | Koordinator arsitektur teknologi SPBE nasional; menetapkan standar API dan protokol interoperabilitas; pembina platform pertukaran data (*Government Service Bus*) | Layer 3–4 | B2, B6, B8 |
| 2 | **KemenPAN-RB** | Koordinator kebijakan implementasi SPBE lintas K/L; menerbitkan SK penetapan jabatan fungsional *Data Steward* di setiap kementerian tanpa perlu UU baru | Layer 1 | B9_KemenPANRB |
| 3 | **BSSN** | Menetapkan dan mengaudit standar keamanan informasi (Peraturan BSSN No.4/2021) pada semua lapisan pertukaran data; memastikan keamanan di setiap node API Exchange | Layer 3 | B1, B10 |
| 4 | **Kemenkeu** | Instansi pilot utama untuk Layer 1–2 — sistem SAKTI dan SPAN adalah sistem ERP pemerintah paling matang di Indonesia; hasil evaluasi Wiradharma & Nugroho (2020) menunjukkan kesiapan teknis Kemenkeu sebagai node pertama | Layer 1–2 | B5_Wiradharma |
| 5 | **Kemendagri / Dukcapil** | *Data Owner* Domain Kependudukan — mengelola basis data NIK nasional (SIAK) yang menjadi identitas digital dasar bagi semua domain lain; domain ini menjadi prioritas pertama dalam pilot Layer 2 | Layer 2 | E7_Dukcapil |
| 6 | **Kemenkes, Kemendikbudristek, BPS** | *Data Owner* Domain Kesehatan, Pendidikan, dan Statistik Nasional — ketiganya merupakan domain prioritas berikutnya dalam pilot standarisasi metadata Layer 2 | Layer 2 | B6, G3_WorldBank |
| 7 | **Pemkot Tangerang** | Model implementasi daerah — Super Mantab sebagai prototipe integrasi lokal yang membuktikan kemampuan teknis sudah ada di level pemerintah daerah, namun belum terkoneksi ke ekosistem nasional | Layer 3–4 | C5_Nugroho |
| 8 | **BRIN / Perguruan Tinggi** | Pengembangan standar metadata, riset evaluasi maturity model, dan kajian independen implementasi per fase — menjamin objektivitas dan basis akademik pengembangan model | Layer 1–2 | E5_BRIN |
| 9 | ***Data Steward Committee*** | Forum koordinasi lintas K/L yang menyepakati dan menegakkan standar metadata bersama; bukan lembaga baru melainkan formalisasi koordinasi yang sudah ada (*non-invasive governance* — Seiner, 2014); dibentuk via SK Menpan | Layer 1 | A4_Seiner |

Perlu dicatat bahwa model ini dirancang mengikuti prinsip *Non-Invasive Data Governance* (Seiner, 2014): tidak memerlukan penggantian sistem yang sudah ada atau pembentukan kelembagaan baru yang besar. Setiap aktor di atas sudah memiliki kewenangan dan infrastruktur yang relevan — yang diperlukan hanyalah formalisasi peran mereka dalam ekosistem bersama dan penetapan standar yang mengikat melalui mekanisme regulasi yang sudah tersedia. Permana dan Susanto (2024) telah membuktikan secara empiris bahwa pendekatan desain tata kelola berbasis DAMA-DMBOK dapat diimplementasikan dalam konteks Indonesia, menghasilkan standar metadata yang ketat sekaligus membuka ruang integrasi operasional yang luas antar departemen.
