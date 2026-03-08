# E7 — Sistem Kependudukan Nasional Berbasis NIK (Dukcapil, Kemendagri)

## 📖 Kutipan Lengkap (Harvard Style)
> Direktorat Jenderal Kependudukan dan Pencatatan Sipil, Kementerian Dalam Negeri. (2023). *Sistem Informasi Administrasi Kependudukan (SIAK): Pengelolaan Data Kependudukan Berbasis NIK*. Kemendagri. https://dukcapil.kemendagri.go.id

---

## 📌 Ringkasan
Direktorat Jenderal Kependudukan dan Pencatatan Sipil (Dukcapil) di bawah Kementerian Dalam Negeri mengelola **Sistem Informasi Administrasi Kependudukan (SIAK)** — basis data kependudukan nasional yang mencakup seluruh penduduk Indonesia berbasis Nomor Induk Kependudukan (NIK). SIAK telah digunakan oleh puluhan layanan pemerintah sebagai referensi identitas digital dasar (verifikasi data pemilih KPU, kepesertaan BPJS, data penerima bantuan sosial, dll.).

Poin kunci:
- NIK sebagai *primary key* identitas digital warga Indonesia yang diakui lintas kementerian
- SIAK telah diintegrasikan dengan sejumlah layanan pemerintah (KPU, BPJS, Kemenkeu)
- Dukcapil/Kemendagri adalah **Data Owner** untuk domain kependudukan — domain paling fundamental dalam model interoperabilitas nasional

---

## 💡 Ide/Poin yang Bisa Dikutip

### Untuk Bab 2.2 — Domain Layer (Domain Kependudukan)
- "Direktorat Jenderal Kependudukan dan Pencatatan Sipil (Dukcapil) berperan sebagai pengelola basis data kependudukan nasional berbasis Nomor Induk Kependudukan (NIK) yang menjadi referensi utama integrasi layanan pemerintah" (Kemendagri, 2023).
- Domain Kependudukan (Kemendagri/Dukcapil) adalah domain prioritas pertama dalam model Layer 2 karena NIK adalah identitas dasar yang dibutuhkan oleh hampir semua domain lain (kesehatan, pendidikan, ekonomi).

### Untuk Bab 2.3 — Tabel Stakeholder
- Kemendagri/Dukcapil sebagai **Wali Domain Kependudukan** — *Data Owner* yang bertanggung jawab penuh terhadap standar dan kualitas data kependudukan dalam ekosistem interoperabilitas nasional.

### Untuk Bab 2.5 — Prediksi Dampak
- Integrasi domain kependudukan yang baik secara langsung memungkinkan layanan publik berbasis *single-view* NIK: warga cukup terdaftar sekali di Dukcapil untuk bisa mengakses seluruh layanan publik.

---

## 🔗 Link Asli
https://dukcapil.kemendagri.go.id

## 🏷️ Tags
`Dukcapil` `Kemendagri` `NIK` `SIAK` `Kependudukan` `Domain Layer` `Data Owner` `Identitas Digital`
