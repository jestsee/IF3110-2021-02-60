<?php

require 'dorayakiFunctions.php';

$id = $_GET['id'];

$arr = getInfoById($id);
$max = $arr[1];
$terjual = $arr[2];
$harga = $arr[3];

// echo $max;
echo json_encode($arr);
?>