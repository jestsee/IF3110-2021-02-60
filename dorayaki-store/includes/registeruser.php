<?php
    function addnewuser($a,$b,$c){
        global $pdo;
        $hasil = $pdo->exec("INSERT INTO user(username, password, email, is_admin) VALUES('$a','$b','$c',0);");
    }
?>