<?php
    require_once 'dorayakiFunctions.php';

    $drop = "DROP TABLE user;";

    $sql ="
    CREATE TABLE IF NOT EXISTS user(
        id INTEGER PRIMARY KEY,
        email TEXT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        is_admin NUMBER(1)
    );";

    // execute($drop);
    execute($sql);

    // menambah user setelah register(?)
    function addUser($email, $username, $password, $is_admin) {
        $query ="
        INSERT INTO user(email, username, password, is_admin)
        VALUES ('$email', '$username', '$password', '$is_admin');";
        
        execute($query);
    }

    // addUser("xx@gmail.com", "xx", "x4x4", 1);
    function isUsernameExist($username) {
        global $db;

        $query = "
        SELECT * FROM user
        WHERE username = '$username';
        ";

        $result = $db->query($query)->fetchArray();
        $found = false;

        if($result) {
            $found = true;
        }

        return $found;
    }

    function getUsernameById($id) {
        global $db;

        $query = "
        SELECT * FROM user
        WHERE id = '$id';
        ";

        $result = $db->query($query)->fetchArray();

        return $result['username'];
    }

    // var_dump(getUsernameById(2));
    // if (isUsernameExist('lolo')) {
    //     echo 'exist';
    // } else {
    //     echo 'not found';
    // }
    // $db->close(); 