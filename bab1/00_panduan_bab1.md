# 📋 PANDUAN BAB 1 — PENDAHULUAN
*Target: 2–3 halaman | Times New Roman 12pt | Spasi 1.15*

---

## 🎯 Tujuan Bab 1
Meyakinkan reviewer bahwa:
1. **Ada masalah nyata** yang signifikan, terdokumentasi, dan kompleks
2. **Masalah ini membutuhkan solusi jangka panjang** (tidak bisa diselesaikan PKM pendanaan biasa)
3. **Gagasan ini relevan** dan punya tujuan + manfaat yang jelas

---

## 🧱 Argumen Inti (dari guidance2.md)
> *"Interoperabilitas sistem informasi lintas kementerian merupakan prasyarat penting SPBE. Namun, upaya integrasi sering kali berfokus pada aspek teknologi tanpa didukung oleh tata kelola data yang terstandarisasi. Ketidakjelasan data owner, perbedaan standar data, serta lemahnya mekanisme pengelolaan lintas instansi menyebabkan pertukaran data tidak optimal. Oleh karena itu, diperlukan ekosistem interoperabilitas yang menempatkan data governance sebagai fondasi utama."*

**Formula 3 Komponen Reviewer (Mengapa proposal ini penting):**
1. **Apa masalahnya:** Kegagalan interoperabilitas SPBE (Silo data).
2. **Kenapa terjadi:** Bukan karena teknologi yang buruk, tapi karena *ketiadaan tata kelola (governance)* antar entitas kementerian.
3. **Penyelesaian:** Pendekatan arsitektur baru berbasis federasi *Data Governance* dengan standar DAMA-DMBOK.

**Alur logika Bab 1:**
```
Fragmentasi digital SPBE Indonesia (E1–E6, B3, B4)
  → Upaya pemerintah yang ada:
     - UU/Regulasi dasar: Perpres 95/2018 (B2)
     - Penguat Arsitektur: Perpres 132/2022 (B6) → cetak biru sudah ada
     - Akselerasi GovTech: Perpres 82/2023 (B7) → GovTech sudah didorong
     - Standar teknis baru 2025: Permenkomdigi 6/2025 (B8)
  → Gap yang tersisa: regulasi sudah kuat, tapi GOVERNANCE datanya tidak ada!
     (C2_Eynon: siloed thinking, E3: kebijakan tanpa data utuh, E5: SDI mandeg)
  → Benchmark global: Estonia berhasil bukan karena regulasi—tapi dari governance (C3, C4)
  → Urgensi futuristik: AI Government 2045 tidak mungkin tanpa fondasi ini (D5, H6)
  → Maka: diperlukan ekosistem interoperabilitas BERBASIS GOVERNANCE TERLEBIH DAHULU
```

> 💡 **Kunci Argumen:** Perpres 132/2022 dan Perpres 82/2023 justru memperkuat urgensi gagasan ini—pemerintah sudah punya *blueprint* & *driver* akselerasi, tapi belum punya **mekanisme tata kelola data** yang mengisi kesenjangan antar lembaga. PKM-GFT ini mengisi kekosongan itu.

---

## ✅ Checklist Isi Bab 1

### 1.1 Latar Belakang ✅ SELESAI
- [x] Gambaran kondisi SPBE Indonesia saat ini (B3_Indeks_SPBE_2022)
- [x] Fragmentasi sistem antar kementerian (B4_Putra — ⭐ referensi terkuat)
- [x] Contoh konkret: Super Mantab berhasil lokal tapi silo (C5_Nugroho)
- [x] Upaya pemerintah: Perpres 95/2018 sebagai fondasi SPBE (B2_Perpres95_2018)
- [x] Upaya penguatan: Perpres 132/2022 Arsitektur SPBE (B6) — regulasi *blueprint* sudah ada
- [x] Upaya akselerasi: Perpres 82/2023 GovTech + INA Digital (B7) — dorongan sudah ada
- [x] Update teknis: Permenkomdigi 6/2025 standar aplikasi SPBE (B8)
- [x] Gap yang tersisa: regulasi & arsitektur sudah kuat, tapi **tata kelola data** belum terstandar
- [x] Benchmark global: Estonia berhasil dengan X-Road (C3_Kalvet_Estonia)
- [x] Urgensi futuristik: AI pemerintah tidak bisa jalan tanpa data terintegrasi (D5_Wirtz)

### 1.2 Rumusan Gagasan ✅ SELESAI
- [x] 1 paragraf tajam (Pakai *Problem Statement* persis dari `guidance2.md` versi tajam)
- [x] Nama resmi gagasan: ***"Rancangan Model Interoperabilitas SPBE Berbasis Federated Data Governance untuk Mendukung Integrasi Layanan Publik Digital Indonesia"***
- [ ] *Self-correction*: Pastikan draft Bab 1.2 sudah memuat rumusan masalah spesifik:
  - Bagaimana kondisi tata kelola data saat ini?
  - Bagaimana usulan rancangan model arsitekturnya?
  - Bagaimana model ini mendukung pertukaran data secara praktis di SPBE?

### 1.3 Tujuan ✅ SELESAI
- [x] Tujuan 1: Menganalisis akar masalah fragmentasi arsitektur data pemerintah
- [x] Tujuan 2: Merancang model interoperabilitas berbasis DAMA-DMBOK (4-layer)
- [x] Tujuan 3: Menyediakan peta jalan implementasi bertahap (2025–2045)

### 1.4 Manfaat ✅ SELESAI
- [x] Bagi pemerintah: efisiensi anggaran TI, dukungan kebijakan berbasis data, Indeks SPBE naik
- [x] Bagi masyarakat: layanan publik lebih cepat & mudah (*single-window*, bantuan sosial)
- [x] Bagi akademik: model adaptasi DAMA-DMBOK pada konteks *e-Gov* multi-agensi S1 SI

---

## 📎 Referensi Utama untuk Bab 1

| Referensi | Digunakan untuk |
|-----------|-----------------|
| `B2_Perpres95_2018` | Dasar hukum SPBE — mengapa masalah ini sudah lama ada |
| `B3_Indeks_SPBE_2022` | Data konkret kondisi kematangan SPBE Indonesia |
| `B4_Putra_Mapping_SPBE` ⭐ | Bukti akademik fragmentasi SPBE (referensi terkuat) |
| `B6_Perpres132_ArsitekturSPBE` 🆕 | Perpres 132/2022: *blueprint* arsitektur sudah ada, tapi governance belum |
| `B7_Perpres82_GovTech` 🆕 | Perpres 82/2023: GovTech/INA Digital sudah didorong — *why now?* |
| `B8_Permenkomdigi6_StandarTeknis` 🆕 | Permen Komdigi 2025: standar teknis terbaru — konteks paling kekinian |
| `C3_Kalvet_Estonia` | Benchmark global (X-Road — governance-first terbukti berhasil) |
| `C5_Nugroho_SuperMantab` | Contoh konkret domestik (sukses lokal, gagal lintas instansi) |
| `D5_Wirtz_AI_PublicSector` | Urgensi futuristik: AI Gov 2045 butuh fondasi data terintegrasi |
| `E1_SPBE_BUMN` | Bukti fragmentasi di level kementerian/BUMN |
| `E3_DataDrivenPolicy` | Kerugian strategis: kebijakan negara tidak berbasis data utuh |
| `E5_Hambatan_SDI_BRIN` | Pengakuan resmi kegagalan SDI — solusi baru dibutuhkan |
| `H6_DataGov_Indonesia_UNPulse` | Validasi global (UN) atas urgensi *governance-first* |

---

## ⚠️ Hal yang HARUS DIHINDARI
- Jangan mulai dengan kalimat normatif hampa ("Dalam era globalisasi saat ini...")
- Jangan jelaskan DAMA-DMBOK atau 4-layer model di sini — itu masuk Bab 2
- Jangan terlalu teknis — Bab 1 adalah **"why"**, Bab 2 adalah **"how"**
- Jangan sebut domain-domain secara detail — itu Bab 2
