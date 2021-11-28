<?php

require 'user.php';

$username = $_GET['u'];

$result = isUsernameExist($username);

// echo $max;
echo json_encode($result);
?>