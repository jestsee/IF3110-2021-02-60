<?php

function emptyInputSignIn($usn, $pw) {
    $result = false; // deklarasi variabel
    if(empty($usn) || empty($pw)) {
        $result = true;
    }
    return $result;
}

function displayAlert($message) {
    echo '<script language="javascript">';
    echo 'alert("'.$message.'")';
    echo '</script>';
}

// buat cek cookienya, kalo cookie ga ada dia logout
// ditaroh di tiap halaman?
function checkCookie() {
    // cek cookie
    if(!isset($_COOKIE['id']) || !isset($_COOKIE['key'])) {

        // cek session ada ga
        if(isset($_SESSION['login'])) {
            header("location: logout.php");
        } // session ada, dibikin logout
    }

    // cek session, kalo belom login ga bisa akses halaman ini
    if(!isset($_SESSION['login'])) {
        header("location: login.php");
    }
}

function checkCookie1() {
    // cek cookie
    if(!isset($_COOKIE['id']) || !isset($_COOKIE['key'])) {

        // cek session ada ga
        if(isset($_SESSION['login'])) {
            header("location: ../logout.php");
        } // session ada, dibikin logout
    }

    // cek session, kalo belom login ga bisa akses halaman ini
    if(!isset($_SESSION['login'])) {
        header("location: ../login.php");
    }
}