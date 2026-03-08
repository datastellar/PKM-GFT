# 📋 PANDUAN BAB 2 — GAGASAN
*Target: 4–8 halaman | Bagian TERPANJANG dan TERPENTING*

---

## 🎯 Tujuan Bab 2
Membuktikan kepada reviewer bahwa:
1. **Gagasan ini futuristik** tapi realistis — bukan mimpi kosong
2. **Ada model yang konkret** — bukan hanya wacana, ada 4 layer yang jelas
3. **Ada stakeholder yang jelas** — siapa berbuat apa
4. **Ada roadmap** — tahapan yang logis dan terukur
5. **Dampaknya sistemik** — tidak hanya parsial

---

## 🧱 Thesis Statement Utama
> *"Interoperabilitas SPBE tidak bisa dimulai dari integrasi sistem (teknologi), tetapi harus dimulai dari tata kelola data dan penetapan data owner (governance). Pemerintah sudah punya regulasinya — yang belum ada adalah mekanisme tata kelola yang mengisi kesenjangan antar lembaga."*

**→ Dua kalimat ini adalah JAWABAN dari problem statement Bab 1. Seluruh Bab 2 membuktikan hal ini.**

---

## 🏗️ Model yang Diusulkan: Ekosistem Interoperabilitas 4-Layer

Model berjalan dari bawah (fondasi) ke atas (output), mengikuti prinsip *governance-first*:

```
┌─────────────────────────────────────────────┐
│  LAYER 4: SERVICE LAYER                     │  ← Output: Layanan publik terintegrasi
│  (Portal tunggal, Super-App Gov, e-Services)│
├─────────────────────────────────────────────┤
│  LAYER 3: INTEROPERABILITY LAYER            │  ← API Exchange, Data Catalog Nasional,
│  (API Gateway, Semantic Catalog, GSB)       │    Semantic Interoperability
├─────────────────────────────────────────────┤
│  LAYER 2: DOMAIN LAYER                      │  ← 5 domain, standar metadata per sektor
│  Kependudukan | Kesehatan | Pendidikan      │    (Domain-oriented data ownership)
│  Ekonomi | Keuangan Negara                  │
├─────────────────────────────────────────────┤
│  LAYER 1: GOVERNANCE LAYER  ← FONDASI       │  ← Data Owner + Data Steward Lintas K/L
│  (Data Owner, Steward, Metadata Policy)     │    Federated Governance (DAMA-DMBOK)
└─────────────────────────────────────────────┘
```

> **Kenapa urutannya begini?** Layer 1 (Governance) harus ada dulu sebelum Layer 2 bisa berstandar. Layer 2 harus terstandar dulu sebelum Layer 3 bisa bertukar data secara semantik (H4_ACM, D3_Klischewski). Urutan ini bukan arbitrer — ini berbasis akademik.

---

## ✅ Checklist Isi Bab 2

### 2.1 Kondisi Terkini yang Menjadi Pemicu 🔲
*Tujuan sub-seksi: Tunjukkan bahwa masalah NYATA, SPESIFIK, dan regulasi pun belum cukup.*

- [ ] **Fenomena global silo data di birokrasi** (C2_Eynon: *siloed thinking*)
- [ ] **Di Indonesia: terpetakan per domain** arsitektur SPBE (B4_Putra + E1–E4)
- [ ] **Regulasi sudah gencar, tapi gap masih ada:**
  - Perpres 95/2018: mandatkan interoperabilitas → realisasi masih rendah (B2, B3)
  - Perpres 132/2022: *blueprint* arsitektur ada → tapi siapa "Data Steward"-nya? (B6)
  - Perpres 82/2023: GovTech sudah didorong → tapi tanpa standar data bersama (B7)
  - Permenkomdigi 6/2025: standar teknis terbaru → masih pada level aplikasi, bukan governance (B8)
- [ ] **Bukti SDI stagnan** karena top-down tanpa mekanisme governance (E5_BRIN)
- [ ] **Contoh konkret domestik**: Super Mantab sukses tapi silo (C5_Nugroho)
- [ ] **Kontras benchmark**: Estonia berhasil dengan *governance-first* (C3_Kalvet, C4_Leenes)
- [ ] **Insight kunci** (1 kalimat tajam jembatan ke solusi): *"Kegagalan bukan karena kurang regulasi, tapi karena regulasi tidak disertai mekanisme tata kelola data yang jelas antar instansi."*

---

### 2.2 Solusi yang Ditawarkan: Model 4-Layer 🔲
*Tujuan sub-seksi: Jabarin modelnya layer per layer. Ini bagian TERPANJANG.*

- [ ] **Buka dengan definisi nama gagasan:**
  > *"Rancangan Model Interoperabilitas SPBE Berbasis Federated Data Governance adalah sebuah model arsitektur sistem informasi berlapis yang menempatkan tata kelola data sebagai fondasi utama pengintegrasian layanan publik lintas kementerian."*

- [ ] **Layer 1 — Governance Layer (FONDASI):**
  - Data Owner per domain (tingkat pimpinan/eselon I) → tanggung jawab strategis
  - Data Steward per domain (tingkat teknis) → implementasi standar sehari-hari
  - *Metadata Policy* terfederasi → "kamus data nasional" yang disepakati bersama
  - Dasar akademik: A1_DAMA_DMBOK2, A4_Seiner_NonInvasive, G4_DataGov_Scribd
  - 💡 *Tip penulisan*: Tekankan pendekatan *Non-Invasive* (Seiner, 2014) — tidak perlu UU baru, cukup regulasi turunan Perpres 95/2018

- [ ] **Layer 2 — Domain Layer:**
  - 5 domain prioritas: Kependudukan (Dukcapil), Kesehatan (Kemenkes), Pendidikan (Kemendikbud), Ekonomi (Kemenkeu/BI), Keuangan Negara (DJKN/BPS)
  - Tiap domain memiliki skema metadata baku sesuai standar nasional (G6_MDDS_India sebagai benchmark)
  - Referensi benchmark domain: India (G1_MDDS), Kanada (G2_Canada), World Bank SDI (G3)
  - ⭐ **Justifikasi urutan Domain sebelum Interoperability:** "Tanpa keseragaman struktur metadata di level domain (Layer 2), interoperabilitas semantik di Layer 3 tidak mungkin terjadi" — H4_ACM & D3_Klischewski (ini argumen terkuat pasal kenapa layer ini harus ada dulu)

- [ ] **Layer 3 — Interoperability Layer:**
  - API Exchange / Government Service Bus (D4_Themistocleous) → jalur pertukaran teknis
  - Data Catalog Nasional → direktori terpusat seluruh aset data domain
  - Semantic Interoperability → bahasa data antar sistem bisa saling dimengerti (H1_NIH, H3_CrossIndustry, H4_ACM)
  - Keselarasan dengan Permenkomdigi 6/2025 (B8) — standar teknis API pemerintah

- [ ] **Layer 4 — Service Layer:**
  - Layanan publik terintegrasi berbasis *single-view* NIK warga (H5_DAMA Integration)
  - Contoh sektoral: integrasi data medis (H2_Cubig), Social Protection (H6_UNPulse)
  - Fondasi AI Government 2045: D5_Wirtz, D1_Chen_BI_Analytics
  - Alignment dengan visi INA Digital (Perpres 82/2023 / B7)

- [ ] **Novelty gagasan ini:**
  > *"Adaptasi kerangka kerja DAMA-DMBOK — yang selama ini diterapkan di korporat — menjadi model tata kelola federasi antar instansi pemerintah. Ini yang membedakan dari proposal integrasi SPBE sebelumnya."*
  - Dukung dengan F1_DAMA_DMBOK_IJRR (bukti DMBOK bisa diimplementasikan di Indonesia)

---

### 2.3 Pihak yang Terlibat 🔲
*Tujuan sub-seksi: Reviewer harus yakin ini bisa dijalankan oleh aktor yang ada, bukan perlu lembaga baru.*

Sajikan dalam **tabel** dengan kolom: Aktor | Peran dalam Model | Referensi

| Aktor | Peran dalam Model | Referensi |
|-------|-------------------|-----------|
| Kemkomdigi | Koordinator arsitektur teknologi SPBE nasional + pembina standar API dan interoperabilitas | B2, B6, B8 |
| KemenPAN-RB | Koordinator implementasi SPBE + penetapan jabatan fungsional *Data Steward* lintas K/L | B9_KemenPANRB |
| BSSN | Penetapan standar keamanan informasi + audit keamanan di seluruh node interoperabilitas | B1, B10_BSSN |
| Kemenkeu | Instansi pilot Layer 1–2 — sistem digital paling matang (SAKTI, SPAN) | B5_Wiradharma |
| Kemendagri / Dukcapil | Wali Domain Kependudukan — *Data Owner* basis NIK sebagai identitas digital utama | E7_Dukcapil |
| Pemkot Tangerang | Model implementasi daerah — Super Mantab sebagai prototipe integrasi lokal | C5_Nugroho |
| BRIN / Perguruan Tinggi | Riset standar metadata + evaluasi independen model implementasi | E5_BRIN |
| *Data Steward Committee* | Forum koordinasi lintas K/L — dibentuk via SK Menpan, bukan butuh UU baru | A4_Seiner |

---

### 2.4 Langkah Strategis & Timeline 🔲
*Tujuan sub-seksi: Reviewer harus percaya ini punya jalan nyata, bukan sekadar wacana.*

- [ ] **Argumen 20 tahun adalah realistis** (bukan terlalu lama): Estonia butuh dua dasawarsa untuk X-Road (C3_Kalvet) → ini preseden akademik yang sah
- [ ] **Pendekatan non-invasif** (A4_Seiner): tidak perlu merombak sistem yang ada — bangun di atasnya secara bertahap

**Tabel Roadmap 4 Fase:**

| Fase | Periode | Target Utama | Layer |
|------|---------|--------------|-------|
| Fase 1 | 2025–2027 | Audit tata kelola + pembentukan *Data Steward Committee* | Governance (1) |
| Fase 2 | 2027–2030 | Standarisasi Metadata Nasional + Pilot 5 K/L | Governance + Domain (1–2) |
| Fase 3 | 2030–2035 | Integrasi teknis API + Data Catalog Nasional | Interoperability (3) |
| Fase 4 | 2035–2045 | Layanan publik terintegrasi + AI Government | Service (4) |

- [ ] Benchmark roadmap: World Bank SDI phased approach (G3_WorldBank)
- [ ] 💡 *Tip*: Di Fase 1, sebutkan konkret 5 K/L yang jadi pilot (Kemendagri, Kemenkes, Kemendikbud, Kemenkeu, BPS) agar reviewer merasa yakin

---

### 2.5 Prediksi Dampak Sistemik 🔲
*Tujuan sub-seksi: Beri gambaran "how big is the prize" — baik jangka pendek maupun panjang.*

- [ ] **Efisiensi anggaran TI pemerintah** — hentikan duplikasi sistem serupa (B3, E1, E2)
- [ ] **Peningkatan Indeks SPBE nasional** sebagai indikator terukur yang sudah ada (B3_Indeks_SPBE_2022)
- [ ] **Program Satu Data Indonesia diselamatkan** dari stagnasi top-down ke pendekatan federasi (E5_BRIN)
- [ ] **Kebijakan berbasis data real-time** — tutup gap antara data pemerintah dan keputusan kabinet (E3_DataDrivenPolicy)
- [ ] **Fondasi AI Government 2045** — model ini adalah prasarat untuk sistem kecerdasan buatan pemerintah (D5_Wirtz, D1_Chen)
- [ ] **Single-View layanan publik bagi warga** — satu identitas untuk semua layanan (H5, H6)
- [ ] **Positioning Indonesia sebagai benchmark ASEAN** dalam tata kelola data pemerintah

---

### 2.6 Output PKM 🔲
*Tujuan sub-seksi: Jawab pertanyaan reviewer: "Apa yang konkret dihasilkan dari PKM ini?"*
*Letakkan di akhir Bab 2, sebelum penutup.*

- [ ] **Output 1 — Model Arsitektur 4-Layer**
  Diagram dan deskripsi model Governance → Domain → Interoperability → Service Layer

- [ ] **Output 2 — Framework Tata Kelola Data Federatif**
  Skema peran Data Owner & Data Steward lintas kementerian, beserta mekanisme penetapan standar metadata bersama

- [ ] **Output 3 — Blueprint Standar Metadata per Domain**
  Rancangan kamus data (*data dictionary*) untuk 5 domain prioritas (Kependudukan, Kesehatan, Pendidikan, Ekonomi, Keuangan Negara)

- [ ] **Output 4 — Roadmap Implementasi Bertahap (2025–2045)**
  Tabel 4-fase dengan target, aktor, dan indikator keberhasilan per fase

> 💡 *Tip: Urutkan output dari yang paling konseptual (model) ke yang paling operasional (roadmap). Ini menunjukkan kelengkapan gagasan.*

---

## 📎 Referensi Utama untuk Bab 2

| Referensi | Layer / Digunakan untuk |
|-----------|------------------------|
| `A1_DAMA_DMBOK2` ⭐ | Framework dasar — keseluruhan |
| `A4_Seiner_NonInvasive` | Argumen governance non-disruptif & realistis |
| `B4_Putra_Mapping_SPBE` ⭐ | Pemetaan masalah → pemetaan solusi per domain |
| `B6_Perpres132_ArsitekturSPBE` 🆕 | Konteks regulasi: *blueprint* sudah ada, tapi governance belum |
| `B7_Perpres82_GovTech` 🆕 | Konteks regulasi: GovTech/INA Digital sudah didorong |
| `B8_Permenkomdigi6_StandarTeknis` 🆕 | Keselarasan Layer 3 dengan standar teknis terbaru 2025 |
| `B1_BSSN_Keamanan_SPBE` | Keamanan di seluruh layer |
| `C2_Eynon_Barriers_eGov` | Hambatan organisasional → argumen *governance-first* |
| `C3_Kalvet_Estonia` | Benchmark model + justifikasi timeline 20 tahun |
| `D3_Klischewski_Interoperability` | Argumen urutan Layer 2 → Layer 3 (semantik) |
| `D4_Themistocleous_ERP_Integration` | Arsitektur Layer 3 (GSB/API) |
| `D5_Wirtz_AI_PublicSector` | Visi Layer 4 → AI Government 2045 |
| `E5_Hambatan_SDI_BRIN` | Mengapa model SDI top-down gagal |
| `F1_DAMA_DMBOK_IJRR` | Novelty: DMBOK bisa diterapkan di Indonesia |
| `G1_MDDS_India` | Benchmark Domain Layer (format metadata India) |
| `G3_SatuDataIndonesia_WorldBank` | Justifikasi 5 domain prioritas + roadmap |
| `G4_DataGov_DMBOK_Scribd` | Mekanisme Data Owner & Steward (Layer 1) |
| `H1_Semantic_Interop_NIH` | Dasar teori semantic interoperability (Layer 3) |
| `H4_Metadata_Semantic_ACM` | Argumen urutan Layer 2 mendahului Layer 3 ⭐ |
| `H6_DataGov_Indonesia_UNPulse` | Validasi internasional: Indonesia butuh governance-first |
| `I1_DataMesh_Thoughtworks` | Fundamen arsitektur desentralisasi per domain (Layer 2) |
| `I5_DataMesh_DAMA_Integration` | Jurnal: sinergi DAMA-DMBOK & prinsip Data Mesh |

---

## ⚠️ Hal yang HARUS DIHINDARI
- Jangan bicara API/teknis terlalu detail di 2.1 — itu wilayah 2.2
- Jangan pakai jargon "Data Mesh" sebagai nama utama di tulisan — pakai sebagai referensi cara kerja
- Jangan buat layer terkesan berdiri sendiri — ada anak panah logis yang menghubungkan satu ke atas
- Jangan lupa sebut *"non-invasif"* di bagian 2.4 — ini penting bagi reviewer yang skeptis soal implementasi

## 🎨 Tone yang Tepat
- **Bab 2.1**: Naratif kritis, berbasis data, seperti "landscape analysis"
- **Bab 2.2**: Deskriptif terstruktur, seperti "system design document" tapi tetap mudah dibaca
- **Bab 2.3**: Ringkas, berbasis tabel, efisien
- **Bab 2.4**: Optimistis tapi terukur — preseden Estonia jadi "jangkar" realisme
- **Bab 2.5**: Visioner tapi konkret, ada angka/indikator
