<?php

require_once 'includes/functions.inc.php';

session_start();
checkCookie(); // cek masih login ga
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/variantstylesheet.css" rel="stylesheet">
    <title>Document</title>
</head>

<body>
    <!-- tempat datanya berubah 
      TODO DDU DU DDU DU:
    ( ) habis klik beli di halaman detail varian bakal direct ke sini
    ( ) kalo bisa pas dari halaman detail ke sini tuh ngepass id dorayaki 
        dorayakinya buat dapet info stok dan harga gitu2
    (v) terdapat tombol + - buat stok
    (v) terdapat tombol beli
    (v) harga pada layar realtime (jumlah * harga satuan)
    (v) stok jumlah pembelian maksimal diupdate secara real-time
    (v) stok baru berkurang setelah pencet tombol beli
    ( ) nanganin kasus kalo statechange ga ready
    -->
    <?php
    echo "<div class='centered'>";
    if (isset($_POST["nama"])) {
        $nama = $_POST["nama"];
        echo "<p>" . $nama . "</p>";
    }
    if (isset($_POST["foto"])) {
        $foto = $_POST["foto"];
        echo "<div><img src='includes/" . $foto . "' width='100' height='50'>";
    }
    ?>
    <form id="punya-user" method="post">
        <input type="number" name="stok" min="1" max="100" id="stok">
        <button type="submit" name="beli" id="tombol-beli">Beli</button>
    </form>

    <form id="punya-admin" method="post">
        <input type="number" name="stok" min="0" max="100" id="stok-admin">
        <button type="submit" name="ubah" id="tombol-ubah">Tambah Stok</button>
    </form>

    <!-- tempat datanya berubah -->
    <div id="container">

        <!-- tampilin harga dan stok secara real time disini -->
        <p>Stok: <span id="stoknya"></span></p>
        <p>Terjual: <span id="terjual"></span></p>
        <p id="p-harga">Total harga: <span id="harga"></span></p>
    </div>

    <?php
    if (isset($_SESSION['level'])) {
        if ($_SESSION['level'] == 'admin') {
            // hide harga dan tombol beli
            echo "<script src='includes/bedainTampilan.js'></script>";
            echo "<script>hideAttributebyId('p-harga')</script>";
            echo "<script>hideAttributebyId('punya-user')</script>";
        } elseif ($_SESSION['level'] == 'user') {
            // hide tombol ubah
            echo "<script src='includes/bedainTampilan.js'></script>";
            echo "<script>hideAttributebyId('punya-admin')</script>";
        }
    }
    ?>

    </div>

    <script src="includes/stok.inc.js"></script>
    <script>
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        document.getElementById('punya-admin').action = "includes/kuranginStok.php?id=" + id;
        document.getElementById('punya-user').action = "includes/kuranginStok.php?id=" + id;
    </script>

</body>

</html>