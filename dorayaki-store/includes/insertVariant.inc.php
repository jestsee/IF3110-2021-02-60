<?php

if(isset($_POST["submit"])) {
    echo('<link rel="stylesheet" href="../css/dashboardstylesheet.css" type="text/css">'); 

    $target_path = "dorayakiImages/";

    $target_path = $target_path . basename( $_FILES['fileToUpload']['name']); 


    if(move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $target_path)) {
        //echo "The file ".  basename( $_FILES['fileToUpload']['name']). 
        //" has been uploaded";
    } else{
        //echo "There was an error uploading the file, please try again!";
    }


    session_start();

    include_once "dorayakiFunctions.php";

    $db = new MyDB();
        
    $name = $_POST["name"];
    $desc = $_POST["desc"]; 
    $price = $_POST["price"];
    $stock = $_POST["stock"];

    $img = "dorayakiImages/"  .  basename( $_FILES['fileToUpload']['name']);
    // echo($img);
    // echo("<img src='" . $img . "' width='500' height='600'>" );
    // diasumsiin kalo insert tuh terjualnya 0
    insertVariant($name, $desc, $price, $stock, 0, $img);
    header("location: ../index.php?insert=success");
} 
?>
