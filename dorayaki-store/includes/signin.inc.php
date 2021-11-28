<?php
session_start();

// TODO:
// ( ) abis login set session status admin/user
// ( ) cookie id diganti sama id user
include_once "user.php";

$db = new MyDB();

// USER LOGIN
if(isset($_POST["submit"])) {
    
    $usn = $_POST["usn"];
    $pw = $_POST["pw"]; // plaintext password entered by the user

    require_once 'functions.inc.php';

    $query = "SELECT * FROM user where username = '$usn';";

    $result = $db->query($query);
    while ($row=$result->fetchArray()) {
        // the hash of the password that can be stored in the database
        $hash = password_hash($row['password'], PASSWORD_DEFAULT);
    }

    $row = $result->fetchArray();
    
    // verify the hash against the password entered
    $verify = password_verify($pw, $hash);

    // kalo username dan password cocok
    if($verify) {
        // buat cookie berlakunya semenit
        $_SESSION['login'] = true;
        setcookie('id', $row['id'], time()+300,'/');
        setcookie('key', hash('sha256', $usn), time()+300,'/');
        if($row['is_admin']==1) {
            $_SESSION['level'] = 'admin';
            header("location: ../admin.php");
        }
        else {
            $_SESSION['level'] = 'user';
        }
        header("location: ../index.php");
    } else {
        // username dan password tidak cocok
        // echo 'PASSWORD DAN USERNAME TIDAK COCOK';
        header("location: ../login.php?msg=failed");
    }
    
    // kalo salah satu kotak kosong
    if(emptyInputSignIn($usn, $pw) !== false) { 
        header("location: ../login.php?error=emptyinput");
        exit();
    }
    // TODO : menangani salah password atau username

    // header("location: ../loginuser.php");

} 

else {
    header("location: ../login.php");
    exit();
}
