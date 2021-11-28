<?php
echo('<link rel="stylesheet" href="../css/dashboardstylesheet.css" type="text/css">'); 
session_start();
include_once "dorayakiFunctions.php";

$db = new MyDB();

if(isset($_POST["submit"])) {
    displayAll();
} 
?>