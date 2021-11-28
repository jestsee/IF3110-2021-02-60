<?php
    session_start();
    include_once "user.php";

    // connect to db
    $pdo = new PDO('sqlite:user.db');

    if(isset($_POST["submit"])) {
        
        $newusername = $_POST["username"];
        $newpassword = $_POST["password"];
        $newemail = $_POST["email"];

        // cek username
        $result = isUsernameExist($newusername);
        if($result === true) {
            // username exist
            header("location: ../register.php?error=usernameExist");
            exit();
        }

        // cek email 
        if(!filter_var($newemail, FILTER_VALIDATE_EMAIL)) {
            header("location: ../register.php?error=invalidEmail");
            exit();
       }

        // add user baru 
        if((isset($_POST["username"])) && (isset($_POST["password"])) && (isset($_POST["email"]))){
            
            // masukin ke db
            addUser($newemail, $newusername, $newpassword, 0);

            // get id
            $query = "SELECT * FROM user where username = '$newusername';";
            $result = $db->query($query);
            $row = $result->fetchArray();
            
            // create cookie
            $_SESSION['login'] = true;
            setcookie('id', $row['id'], time()+300,'/');
            setcookie('key', hash('sha256', $newusername), time()+300,'/');
            $_SESSION['level'] = 'user';
            header("location: ../index.php");
            
        } else {
            header("location: ../register.php");
        }
    }
?>