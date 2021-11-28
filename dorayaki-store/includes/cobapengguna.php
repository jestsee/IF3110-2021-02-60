<?php

    class MyDB extends SQLite3 {
        function __construct() {
            $this->open('user.db');
        }
    }

    $db = new MyDB();

    //define PDO - info about db file #connect to db through creating a pdo 
    $pdo = new PDO('sqlite:user.db');

    //NAMPILIN KEADAAN AWAL SQL
    //write sql
    $statement = $pdo->query("SELECT * FROM user");
    //run sql
    //$users = $statement->fetchAll(PDO::FETCH_ASSOC);
    //show to screen
    //echo "<pre>";
    //var_dump($users);
    //echo "</pre>";

    //variabel tester
    $userbaru = 'pembeli10';
    $passwordbaru = 'belibelibeli10';
    $emailbaru = 'pembeli10@mail.com';

    //fungsi cek apakah dah ada username yang sama #yang harusnya pake ajax WKWKWKWK ups
    function isUsernameExist($userbaru){
        global $db;
        global $pdo;
        $found = false;
        $query = "
        SELECT * 
        FROM infopengguna 
        WHERE username = '$userbaru';";

        $hasil = $pdo->query($query);
        $adatidaks = $hasil->fetchAll(PDO::FETCH_ASSOC);
        $result = $db->query($query)->fetchArray();
        if($adatidaks){
            $found = true;
            var_dump($found);
        }else{
            var_dump($found);
        }

        if($result){
            $found = true;
            var_dump($found);
        }else{
            var_dump($found);
        }

        return $found;
    }
    #driver test isUsernameExist
    //isUsernameExist($userbaru);

    //fungsi nambain pengguna baru ke database
    function addNewUser($userbaru, $passwordbaru, $emailbaru){
        global $pdo;
        $query = "INSERT INTO user(email, username, password, is_admin) VALUES('$emailbaru', '$userbaru','$passwordbaru',0);";

        $nambah = $pdo->query($query);
    }
    //driver test fungsi addNewUser
    //addNewUser($userbaru, $passwordbaru, $emailbaru);
    //$users = $statement->fetchAll(PDO::FETCH_ASSOC);
    //echo "<pre>";
    //var_dump($users);
    //echo "</pre>";

    //iteration
    //foreach($users as $row => $user){
        //untuk setiap baris => lakukan sesuatu #contoh utube dia print gitu tapi kan regis gak perlu print
    //}