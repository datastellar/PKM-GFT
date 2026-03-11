# 📁 STRUKTUR FOLDER PKM-GFT

```
PKM_GFT/
├── Kerangka.md              ← Kerangka resmi PKM-GFT 2025
├── guidance2.md             ← Problem statement & argumen inti
├── Referensi.md             ← Catatan sumber panduan PKM
├── Referensi2.md            ← Daftar pustaka awal
├── Referensi3.md            ← Tautan referensi baru (sudah dipecah ke folder)
│
├── referensi/               ← Satu file per referensi (57 total)
│   ├── 00_INDEX.md
│   ├── A1–A4_*.md           ← DAMA-DMBOK (Framework inti)
│   ├── B1–B8_*.md           ← SPBE Indonesia (Regulasi & tantangan)
│   ├── C1–C5_*.md           ← E-Government (Studi kasus)
│   ├── D1–D5_*.md           ← Interoperabilitas Teknis
│   ├── E1–E6_*.md           ← Problem & Fragmentasi SPBE (baru)
│   ├── F1–F5_*.md           ← Framework DAMA-DMBOK terapan (baru)
│   ├── G1–G6_*.md           ← Model Layer 1 & 2: Domain & Governance (baru)
│   ├── H1–H7_*.md           ← Model Layer 3 & 4: Interoperability & Service (baru)
│   └── I1–I11_*.md          ← Paradigma Data Mesh & Desentralisasi (baru)
│
├── bab1/                    ← BAB 1: PENDAHULUAN
│   ├── 00_panduan_bab1.md   ← Panduan & checklist isi Bab 1
│   ├── 01_latar_belakang.md ← ✅ Draft selesai
│   ├── 02_rumusan.md        ← ✅ Draft selesai
│   ├── 03_tujuan.md         ← 🔲 Siap diisi
│   └── 04_manfaat.md        ← 🔲 Siap diisi
│
├── bab2/                    ← BAB 2: GAGASAN (inti utama)
│   ├── 00_panduan_bab2.md   ← Panduan & checklist isi Bab 2
│   ├── 01_pemicu_gagasan.md ← 🔲 Siap diisi
│   ├── 02_solusi.md         ← 🔲 Siap diisi — Core: 4-Layer Model
│   ├── 03_stakeholder.md    ← 🔲 Siap diisi
│   ├── 04_langkah_strategis.md ← 🔲 Siap diisi
│   └── 05_prediksi_dampak.md   ← 🔲 Siap diisi
│
└── bab3/                    ← BAB 3: KESIMPULAN
    ├── 00_panduan_bab3.md   ← Panduan & checklist isi Bab 3
    └── 01_kesimpulan.md     ← 🔲 Siap diisi
```

---

## Model Utama Gagasan (Disepakati)

Arsitektur model ekosistem interoperabilitas yang diusulkan berjalan dari bawah ke atas:

```
[Layer 4: Service Layer]         ← Layanan publik terintegrasi (output)
[Layer 3: Interoperability Layer]← API exchange, Data Catalog, Semantic
[Layer 2: Domain Layer]          ← 5 domain (Pendekatan Data Mesh)
[Layer 1: Governance Layer]      ← FONDASI: Data Owner, Data Steward,
                                    Standar Metadata Nasional (DAMA-DMBOK)
```

> **Argumen inti:** *Governance terlebih dahulu — bukan integrasi teknis.*

---

## Status Penulisan

| Bagian | Status | Catatan |
|--------|--------|---------|
| Kerangka.md | ✅ Selesai | Format resmi PKM-GFT 2025 |
| referensi/ | ✅ Selesai | 43 referensi individual (Kat A–H) |
| bab1/01_latar_belakang.md | ✅ Selesai | Draft lengkap, 7 referensi |
| bab1/02_rumusan.md | ✅ Selesai | Draft tajam, 2 referensi |
| bab1/03_tujuan.md | 🔲 Belum diisi | — |
| bab1/04_manfaat.md | 🔲 Belum diisi | — |
| bab2/ | 🔲 Siap diisi | Bagian terpenting |
| bab3/ | 🔲 Siap diisi | Dikerjakan setelah Bab 2 |
