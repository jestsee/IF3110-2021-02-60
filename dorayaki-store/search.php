<?php
    //include_once "index.php";
    session_start();
    echo('<link rel="stylesheet" href="css/dashboardstylesheet.css" type="text/css">'); 
    class MyDB extends SQLite3 { 
        function __construct() { 
            $this->open('includes/dorayaki.db'); 
        } 
    }
    $db = new MyDB();
    if(isset($_POST["submit"])) {
        echo "<div class='header'><ul>
        <li class='navitemleft'><a href=\"index.php\"><img src='css/logos2.jpg' width='150' height='50' style='padding: 0; margin: 0;'></a></li>
        <form action='search.php' method='post'><li class='navitemsearch'><input type='text' name='cari' placeholder='Search here :D'></li>
        <li class='navitemsearch'><button type='submit' name='submit'>Search</button></li></form>";
        $cari = $_POST['cari'];
        $page = 1;
        if(isset($_SESSION['level'])) {
            if($_SESSION['level']=='user') {
                echo "<li class='navitem'><a href=\"logout.php\">Log Out</a></li>
                </ul>
                </div>";
                gethasilsearch($cari,$page);
            }
        
            else if ($_SESSION['level']=='admin') {
                echo"<div class='kanan'>";
                echo "<li class='navitem'><a href=\"logout.php\">Log Out</a></li>";
                echo "<li class='navitem'><form action= 'insertVariantPage.php' method='post' enctype='multipart/form-data'><button type='submit' name='submit'>Insert New Variant</button></form></li>
                </div>
                </ul>
                </div>";
                gethasilsearch($cari,$page);
        }
    }
    }
    $page = 1;
    if(!empty($_GET['page'])) {
        $page = $_GET['page'];
        if(false === $page) {
            $page = 1;
        }
    }
    if($_SERVER['REQUEST_METHOD']=='POST') {
        $cari=$_POST['cari'];
        $limit = 3;
        $queryAll = "SELECT * FROM dorayaki WHERE nama LIKE '%$cari%'";
        $resultAll = $db->query($queryAll);
        $count = 0;
        while ($user=$resultAll->fetchArray()){
            $count = $count + 1;
        }
        $countPage = ceil($count/$limit);
        if(isset($_POST['Previous']) || isset($_POST['Next']) || isset($_POST['First']) || isset($_POST['Last'])) {
            echo "<div class='header'><ul>
            <li class='navitemleft'><a href=\"index.php\"><img src='css/logos2.jpg' width='150' height='50' style='padding: 0; margin: 0;'></a></li>
            <form action='search.php' method='post'><li class='navitemsearch'><input type='text' name='cari' placeholder='Search here :D'></li>
            <li class='navitemsearch'><button type='submit' name='submit'>Search</button></li></form>";    
            if($_SESSION['level']=='user') {
                echo "<li class='navitem'><a href=\"logout.php\">Log Out</a></li>
                </ul>
                </div>";
            }
            else if ($_SESSION['level']=='admin') {
                echo"<div class='kanan'>";
                echo "<li class='navitem'><a href=\"logout.php\">Log Out</a></li>";
                echo "<li class='navitem'><form action= 'insertVariantPage.php' method='post' enctype='multipart/form-data'><button type='submit' name='submit'>Insert New Variant</button></form></li>
                </div>
                </ul>
                </div>";
        }
        if (isset($_POST['Previous'])) {
            if($page <= 0) {
              $page = 1;
            }else {
              $page = $page - 1;
            }
            gethasilsearch($cari,$page);
        } else if(isset($_POST['Next'])) {
            echo "<br>";
            $page = $page + 1;
            gethasilsearch($cari,$page);
        }    
        else if(isset($_POST['First'])) {
            echo "<br>";
            $page = 1;
            gethasilsearch($cari,$page);
        } 
        else if(isset($_POST['Last'])) {
            echo "<br>";
            $page = $countPage;
            gethasilsearch($cari,$page);
        }     
    }
}
    function gethasilsearch($cari,$page){
        global $db;
        $limit = 3;
        // build query
        $offset = ($page - 1) * $limit;
        if($offset <= 0) {
          $offset = 0;
        }
        echo "<br>";
        echo "<table border=1>";
        $query = "SELECT * FROM dorayaki WHERE nama LIKE '%$cari%' LIMIT " . $offset . "," . $limit;
        $queryAll = "SELECT * FROM dorayaki WHERE nama LIKE '%$cari%'";
        echo'<div class="wrapper">
        <div class="isi">';
        $result = $db->query($query);
        $resultAll = $db->query($queryAll);
        $count = 0;
        while ($user=$result->fetchArray()){
            echo "<div class='responsif'> <div class='gambar'> <a href='includes/displayVariant.inc.php?id=" . $user['id'] .  ".'><img src='includes/" . $user['gambar'] . "' alt='Gambar Dorayaki' width='100' height='50'> <div class='deskripsi'> <p>" . $user['nama'] . "</p><p>" . $user['deskripsi']. "</p><p>Harga: " . $user['harga'] . "</p><p>Stok :" . $user['stok'] . "</p></div></a></div></div>";
        }
        while ($user=$resultAll->fetchArray()){
            $count = $count + 1;
        }
        echo "<form action='" . $_SERVER['PHP_SELF'] . "?page={$page}'method='POST'>";
        $countPage = ceil($count/$limit);
        echo "<br><br><br><br><br><br><br><br><br><br>";
        echo "<div class='centered'>";
        echo "<p> Page " . $page . "</p>";
        if($page>1) {
            echo  "<button type='submit' name='First'><<</button>";
            echo  "<button type='submit' name='Previous'>" . ($page - 1) ."</button>";
        }
        if($page<$countPage) {
            echo  "<button type='submit' name='Next'>" . ($page + 1) ."</button>";
            echo  "<button type='submit' name='Last'>>></button>";
        }
        echo  "<input type='hidden' name='cari' value='" . $cari ."'></button>";
        echo "</form>";
        echo'</div>
        </div>';
    }
        
?>
