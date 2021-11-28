<?php
    session_start();
    include_once "includes/functions.inc.php";

    // menangani error
    if(isset($_GET["error"])) {
        // ada kotak yang masih kosong
        if ($_GET["error"] == "emptyinput") {
            displayAlert("Ayo sign in yang benar");
        }
    }
    if (isset($_GET["msg"]) && $_GET["msg"] == "failed") {
        displayAlert("Wrong Username/Password");
    }

    // cek cookie
    // if(isset($_COOKIE['id']) && isset($_COOKIE['key'])) {
    //     // ambil infonya dulu
    //     $id = $_COOKIE['id'];
    //     $key = $_COOKIE['key'];

    //     // cek keynya cocok ga
    //     // user1 dummy
    //     if($key === hash('sha256','user1')) {
    //         $_SESSION['login'] = true;
    //     }
    // }

    if(isset($_COOKIE['key'])) {
        header("location: index.php");
    }
?>
<div class="split left">
    <img src="css/logos1.jpg" width="200" height="100">
</div>
<div class="split right">
    <img src="css/logos1.jpg" width="200" height="100">
        <div class="centered">
            <section class="signin-form">
                <link href="css/login.css" rel="stylesheet">
                <h2>Login</h2>
                <form action="includes/signin.inc.php" method="post">
                    <input type="text" name="usn" placeholder="Username..." required>
                    <input type="password" name="pw" placeholder="Password..." required>
                    <button type="submit" name="submit">login</button>
                    <br><br>
                </form>
                <a href="register.php">Don't have account? Register here!</a>

            </section>
        </div>
    </div>