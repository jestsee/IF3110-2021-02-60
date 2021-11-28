# Tugas Besar 1 IF3110

## Table of contents
* [Deskripsi](#deskripsi)
* [Daftar requirements](#requirement)
* [Cara instalasi](#install)
* [Cara menjalankan server](#server)
* [Screenshot](#screenshot)
* [Pembagian tugas](#tugas)
* [Authors](#author)

## Deskripsi
Stand by Dorayaki merupakan sebuah aplikasi web dimana pengguna dapat membeli dorayaki dengan berbagai macam rasa. Aplikasi web ini menerima 2 jenis pengguna, yaitu user dan admin. Untuk dapat mengakses aplikasi web, user perlu membuat akun terlebih dahulu pada laman registrasi, jika sudah memiliki akun, user dapat langsung login pada halaman login. Setelah login, aplikasi web akan menampilkan 10 pilihan dorayaki yang paling terkenal pada halaman web. Pada halaman tersebut, admin memiliki pilihan untuk menambah varian dorayaki yang dijual pada web. Kedua jenis pengguna dapat mencari dorayaki berdasarkan nama, melihat riwayat pembelian/pengubahan stok dorayaki, dan logout. Hasil pencarian dorayaki akan ditampilkan 3 produk per page. Ketika pengguna mengklik salah satu dorayaki yang ditampilkan, aplikasi web akan menampilkan informasi lebih detail terkait produk tersebut. Pada halaman detail produk, untuk user akan diberikan pilihan untuk membeli dorayaki, sedangkan admin diberikan pilihan untuk mengedit informasi atau menghapus data dorayaki.

## Daftar requirements
* PHP 8.0
* SQLite

## Cara instalasi 
* PHP : 
* 1. Download file dari https://www.php.net/downloads.php
* 2. Ekstrak file yang telah didownload
* 3. Pindahkan file ke folder C://
* 4. Tambahkan path menuju file PHP pada enviroment variables
* 
* SQLite :
* 1. Ubah nama file php.ini-development menjadi php.ini
* 2. Hapur ';' pada extension=pdo_sqlite dan extension=sqlite3 di file php.ini

## Cara menjalankan server
1. Buka command prompt
2. Mengarahkan command prompt ke folder tempat menyimpan file web aplikasi 
3. Mengetik 'php -S localhost:4000'
4. Mengklik link http://localhost:4000/ untuk membuka aplikasi web

## Screenshot
* Halaman login 
* ![image](https://user-images.githubusercontent.com/68498864/138392984-9d8b42ab-ac2d-4228-94ef-7edc187bd7d8.png)

* Halaman registrasi 
* ![image](https://user-images.githubusercontent.com/68498864/138392998-714a0933-b518-4a87-8842-094d72bb7421.png)

* Halaman dashboard (User)
* ![image](https://user-images.githubusercontent.com/68498864/138396527-d8695ff7-cdca-4fc1-9233-56c933a26783.png)


* Halaman display varian (User)
* ![image](https://user-images.githubusercontent.com/68498864/138395911-5e9abff9-378f-486b-928c-e359574103a6.png)

* Halaman riwayat 
* ![image](https://user-images.githubusercontent.com/68498864/138396549-597b5814-d92c-4454-a6ed-09cd23937e6a.png)

* Halaman pembelian (User)
* ![image](https://user-images.githubusercontent.com/68498864/138393456-49c1c1d3-6951-44af-a105-2c98bb57e712.png)

* Halaman insert new variant (Admin)
* ![image](https://user-images.githubusercontent.com/68498864/138393388-de47de59-00ef-4287-8cfd-57afc97d4159.png)

* Halaman pengubahan stok (Admin)
* ![image](https://user-images.githubusercontent.com/68498864/138395836-1dc4b31f-3929-43c2-a89c-bda3811d3a09.png)

* Halaman display varian (Admin)
* ![image](https://user-images.githubusercontent.com/68498864/138395880-2021b490-9c7f-4679-bd1b-9365daec8d58.png)


## Pembagian tugas
* Server side
 *Login: 13519011, 13519047
 *Registrasi: 13519213, 13519011
 *Search: 13519213, 13519047
 *Dashboard: 13519011, 13519213, 13519047
 *Pembelian: 13519011
 *Pengubahan stok: 13519011
 *Penambahan varian: 13519047
 *Penghapusan varian: 13519047
 *Detail varian: 13519011
 *Riwayat: 13519011
 
* Client side
 *Login: 13519213
 *Registrasi: 13519213
 *Search: 13519213, 13519047
 *Dashboard: 13519011, 13519213, 13519047
 *Pembelian: 13519011, 13519213
 *Pengubahan stok: 13519011
 *Penambahan varian: 13519213, 13519047
 *Detail varian: 13519011, 13519213
 *Riwayat: 13519011, 13519213
 *Responsive design : 13519213

* Tubes 2
 *SOAP insert variant : 13519213

## Authors
*13519011 Jesica
*13519047 Rhea Elka Pandumpi
*13519213 Clarisa Natalia Edelin
