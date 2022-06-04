# 7DAYS Project - by UMNLife

* Mata Kuliah: Intro To Internet Technology
* Dosen: Pak Alexander Waworuntu

## Anggota

1. Aldrik Ciaputra (00000055871)
2. Joshua Hotama (00000056899)
2. Farion Tekry (00000056034)
4. Muhammad Daffa Akbari (00000055736)

## Video presentasi
[YouTube](https://youtu.be/xW7U0wtGH7s)

## Informasi umum mengenai projek
 
* Projek dibuat dengan menggunakan bahasa Inggris. Jika ingin memainkannya menggunakan bahasa Indonesia, harap menggunakan web translator
* Terdapat beberapa elemen yang interaktif di dalam projek, demi kenyamanan pemain dan visual
* Walaupun projek sudah 100% responsif, tetap disarankan untuk dimainkan pada PC atau perangkat berlayar lebar demi kenyamanan saat bermain
* Projek dibuat menggunakan [React](https://reactjs.org/), [Bootstrap](https://getbootstrap.com), dan [Framer-Motion](https://www.framer.com/motion/)

### Informasi Aset

* [icons8](https://www.icons8.com/)
* [freepik](https://www.freepik.com)

## Cara membuka game
> Pastikan kalian sudah menginstall nodeJS versi terbaru!
* Buat folder pada PC kalian
* Setelah itu <i>right click</i> didalam folder tersebut, dan pilih <i>Open In Terminal</i>
* Ketik <code>npx create-react-app sevendays</code> pada terminal
* Setelah selesai menginstall react, ketik <code>cd sevendays</code>
* Lalu, install beberapa packages berikut: 
 - <code>npm install jquery</code>
 - <code>npm install framer-motion</code>
 - <code>npm install react-router-dom@6</code>
* Setelah semuanya terinstall, (terminal jangan di close) <i>copy, paste, & replace</i> semua files yang ada di folder <strong>theGame</strong> ke dalam folder sevendays
* Setelah itu, di terminal ketik <code>npm start</code>

<strong>Happy gaming!</strong>

## Aturan permainan

### Masukkan Data
* Sebelum permainan, kalian akan diarahkan ke halaman /theChoosing untuk memilih avatar dan jurusan karakter kalian
* Terdapat 4 avatar dan 12 jurusan yang dapat kalian pilih (jurusan akan berpengaruh pada pilihan mata kuliah)
* Setelah itu, kalian bisa mengklik play

### Permainan
* Permainan akan dimulai pada hari Minggu, jam 00.00
* Cuaca pada permainan ini diambil dari [openWeatherAPI](https://openweathermap.org/)
* Di sini kalian diwajibkan untuk bertahan selama 7 hari
* Kita membagi tampilan gamenya menjadi 4 <i>sections</i>:
 - <strong><i>Top-section</i></strong> - Berisikan 5 status bar: hunger bar, happiness bar, romance bar, sleep bar, dan study bar
 - <strong><i>Left-section</i></strong> - Berisikan <i>list of buttons</i> yang jika di klik akan menambah / mengurangkan <i>certain</i> status bar. <i>List of buttons</i> ini juga akan berubah menyesuaikan lokasi kalian berada
 - <strong><i>Middle-section</i></strong> berisikan beberapa status pada karakter kalian, mulai dari nama, jurusan, hubungan, uang, dsb. Terdapat pula tombol <i>Open your phone</i> dan juga <i>Exit</i>
  - <strong><i>Right-section</i></strong> berisikan <i>list of buttons</i> yang jika di klik akan mengubah lokasi dan <i>background</i> pada game kalian. Pada <i>default</i>, lokasi kalian adalah <strong>Home</strong>. Terdapat 3 lokasi yang dapat kalian pilih: <strong>UMN, Starbucks, dan Summarecon</strong>
* Pada <strong>Home</strong>:
  - Tombol Eat: Menambah hunger bar. Time-skipping 30 menit
  - Tombol Sleep: Menambah sleep bar. Time-skipping 4 jam
  - Tombol Cook: Menambah hunger bar, happiness bar, dan mengurangkan sleep bar. Time-skipping 2 jam
  - Tombol Play: Mengurangkan hunger bar dan menambahkan happiness bar. Time-skipping 2 jam
  - Tombol Study Menambahkan study bar dan mengurangkan hunger bar, happiness bar, dan sleep bar. Time-skipping 3 jam
* Pada <strong>UMN</strong>:
  - Tombol mata kuliah akan menyesuaikan jurusan yang dipilih kalian. Setiap tombol di klik, akan menambahkan study dan mengurangkan hunger bar, happiness bar, dan sleep bar. Time-skipping 3 jam
* Pada <strong>Starbucks</strong>:
  - Beberapa tombol minuman: Mengurangkan uang sesuai dengan harga dan menambahkan hunger bar. Time-skipping 1 jam
  - Tombol barista: Menambahkan $15 dan mengurangkan hunger bar, happiness bar, dan sleep bar. Time-skipping 4 jam
* Pada <strong>Summarecon</strong>:
  - Tombol date: Mengurangkan $15 dan menambahkan romance bar. Time-skipping 1 jam
  - Tombol Eat: Mengurangkan $5 serta sleep bar dan menambahkan hunger bar. Time-skipping 30 menit 
  - Tombol shopping: Mengurangkan $20 dan menambahkan happiness bar. Time skipping 2 jam
  - Tombol movie: Mengurangkan $15 dan menambahkan happiness bar. Time-skipping 2 jam
  - Tombol salon: Mengurangkan $15 dan menambahkan happiness bar. Time-skipping 1 jam
* Setelah 7 hari, kalian akan diarahkan ke halaman /theEndGame untuk melihat evaluasi game kalian
  
### Fitur Money 
* Game ini memiliki fitur uang. Kita menghasilkan uang setiap harinya sebesar $50
* Jika uang mencapai -$50, permainan akan game over 
* Uang bisa digunakan di <strong>Starbucks</strong> dan <strong>Summarecon</strong>
* Uang juga bisa didapat melalui bekerja <i>part-time</i> sebagai barista di <strong>Starbucks</strong>

### Fitur Romance
* Selagi kalian sibuk untuk kuliah, kalian dapat menikmati fitur romance yaitu merupakan fitur membuat pasangan
* Kalian hanya mengklik button date yang ada di <strong>Summarecon</strong> atau fitur panggilan/pesan yang ada di phone
* Masukkan nama pasangan kalian dan mengklik <i>Create Date</i>
* <strong><i>Keep in mind</i></strong>: Avatar pasangan masih belum berdampak pada permainan. Mungkin di <i>future updates</i>

### Fitur Phone
* Terdapat 2 sections dalam phone: <strong>Date widget section</strong> dan <strong>news section</strong>
* Berita yang tertera pada phone diambil dari [newsAPI](https://newsapi.org/)
* Selain berita, kalian dapat mengakses fitur romance yaitu untuk menghubungi pasangan kalian melalui fitur pesan atau panggilan

### Fitur Waktu & Cuaca
* Background yang ditampilkan akan menyesuaikan waktu & cuaca pada permainan, 
* Menggunakan cuaca di <strong>Tangerang</strong>