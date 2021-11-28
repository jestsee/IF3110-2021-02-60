<?php
echo('<link rel="stylesheet" href="../css/dashboardstylesheet.css" type="text/css">'); 
session_start();

include_once "dorayakiFunctions.php";

$db = new MyDB();

if(isset($_SESSION['level'])) {
    if($_SESSION['level']=='admin') {
        if(isset($_POST["delete"])) {
            $id = $_POST["delete"];
            
            deleteVariant($id);
            header("location: ../index.php?delete=success");
            // TODO : di-handle di index untuk nampilin kalo udh sukses
        } 
    }
}
?>
