# Changelog
All notable changes to this project will be documented in this file.<br/>
**FORMAT TANGGAL : YYYY-MM-DD <br/>**

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Reminder
- Cek urutan variabel di halaman ReadCSV. Saat ini, timestamp ditempatkan pada kolom terakhir di dalam variabel dataset lokal milik halaman tersebut.
- Pikirkan cara untuk melakukan penskalaan pada variabel selain dummy. Fungsi ScaleDummy() mudah diimplementasikan karena datanya ada dalam satu chart, dan hanya chart itu saja. Dataset lain terpencar dalam tiga device yang berbeda, sehingga fungsi scaling nya perlu dibuat adaptif terhadap pilihan chart aktif.

## [0.4] - 2020-09-22

### Added
- Fitur Scaling pada bagian Eng. Unit Setup sekarang sudah difungsikan, tapi saat ini hanya untuk data dummy saja
- Kemampuan untuk menerima data lebih dari satu baterai. Versi ini dicobakan untuk data dari 2 device ADC yang terhubung dengan AI Signal Injector.
- Melengkapi komentar-komentar pada program (masih dalam proses, belum selesai)

### Changed
- Nama device disesuaikan dengan kasus nyata, tetapi dengan sinyal uji dari Signal Injector : Battery (4 tegangan + 1 arus), Motor_Stepper (2 tegangan), dan Controller (2 tegangan). Device Dummy masih ada.
- Jumlah data yang ditampilkan untuk Device pada chart disesuaikan

### Removed
- Data statis pada device selain device pertama dibuang (karena sudah ditambahkan data dari Signal Injector)

## [0.3] - 2020-09-15

### Added
- Folder ./backend/standalones/csvLogs yang memuat contoh-contoh file CSV yang bisa dibaca
- Program mandiri node_csv sebagai pembelajaran pembacaan CSV di node.js
- Halaman baru : Read CSV (sudah dengan isinya) dan Eng. Unit Setup (belum diisi)
- Melengkapi komentar-komentar pada program (masih dalam proses, belum selesai)

### Changed
- Referensi-referensi komponen DOM HTML diganti cara aksesnya menjadi ala React. <br /> 
    Contohnya ```document.getElementById``` menjadi ```this.<Sebuah nama Ref>.current```.
- Komponen Selector sekarang melewatkan prop berupa id device terpilih ke dalam ChartComp, dan interaksi update ChartComp didasarkan pada prop ini.

## [0.2] - 2020-09-09

### Added
- Halaman login, dan layout dasar dengan konsep React-Router
- User pertama "root" sebagai admin aplikasi
- Folder ./backend/standalones yang memuat snippet-snippet program yang berdiri sendiri. Berlaku juga sebagai folder sandboxing
- Folder  ./src/css yang memuat css global untuk seluruh komponen/layout
- Penggunaan (React-)Bootstrap untuk elemen-elemen UI

### Changed
- Data dummy menjadi data serial (Arduino di COM4)
- Komponen chart sekarang berhenti melakukan polling data dari server jika halaman yang memuatnya tidak aktif (di unmount)
- File aplikasi utama (App.js) sekarang tidak memuat MainWindow (komponen berisi chart), tetapi Router - yaitu modul yang menampilkan konten tergantung url aktif, yang dapat diubah dengan klik menu di bawah judul.

## [0.1] - 2020-09-04

### Added
- Fitur pembaca data serial (generator angka random di comment)
- [Sebuah server dummy](http://localhost:5000) yang hanya menampung GET data dari serial
- Folder ./backend untuk memuat aplikasi yang harus berjalan di balik layar (server)

### Changed
- Data dummy menjadi data serial (Arduino di COM4)
- Perlu 2 terminal untuk menjalankan dua file yang berbeda (node untuk server, npm start untuk client)

## [0.0] - 2020-09-02

### Added
- Upload awal

### Changed
- Perubahan basis program dari tampilan web statis (HTML-JS-PHP) ke React-app

### Removed
- Halaman login pada web statis
