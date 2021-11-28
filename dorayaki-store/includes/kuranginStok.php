<?php
require_once 'dorayakiFunctions.php';
require_once 'functions.inc.php';
require_once 'riwayat.php';

session_start();
checkCookie(); // cek masih login ga

$id = $_GET['id'];
$stokInput = $_POST["stok"];
echo $stokInput;

if (isset($_POST["beli"]) && isset($_SESSION['login'])) {
    // harus tetep masukin parameter id nya ke url
    if (empty($stokInput)) {
        header("location: ../beliDorayaki.php?id=" . $id);
        exit();
    }

    // kurangin stok di database by id
    beliDorayaki($id, $stokInput);
    $id_user = $_COOKIE['id'];
    beli($id_user, $id, $stokInput);

    // kasih pesan pembelian berhasil dilakukan di halaman berikutnya
    header("location: ../index.php?pembelian=true");
}

// elseif (isset($_POST["ubah"]) && isset($_SESSION['login'])) {
//     // harus tetep masukin parameter id nya ke url
//     if (empty($stokInput) && $stokInput!=0) {
//         header("location: ../beliDorayaki.php?id=".$id);
//         exit();
//     }

//     // replace stok dorayaki
//     changeStock($id, $stokInput);
//     $id_user = $_COOKIE['id'];
//     ubahStok($id_user, $id, $stokInput);

//     // kasih pesan stok berhasil diubah di halaman berikutnya
//     header("location: ../index.php?ubah=true");

// }

elseif (isset($_POST["ubah"]) && isset($_SESSION['login'])) {
    // harus tetep masukin parameter id nya ke url
    if (empty($stokInput) && $stokInput != 0) {
        header("location: ../beliDorayaki.php?id=" . $id);
        exit();
    }

    $varian = getNamabyId($id);

    $client1 = new SoapClient("http://localhost:8080/service/RequestService?wsdl");
    $params = array(
        'arg0' => $varian,
        'arg1' => $stokInput
    );
    $response2 = $client1->__soapCall("addRequest", array($params)); // gini cara pass parameternya


    // replace stok dorayaki
    // changeStock($id, $stokInput);
    $id_user = $_COOKIE['id'];
    ubahStok($id_user, $id, $stokInput);

    // kasih pesan stok berhasil diubah di halaman berikutnya
    header("location: ../index.php?ubah=true");
} else {
    header("location: ../beliDorayaki.php?id=" . $id);
    exit();
}
