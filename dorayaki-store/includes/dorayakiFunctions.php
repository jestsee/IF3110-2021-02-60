<?php
    // Fungsi-fungsi yang mengatur database dorayaki
    
    // OPEN DATABASE
    class MyDB extends SQLite3 {
        function __construct() {
            $this->open('dorayaki.db');
        }
    }
    $db = new MyDB(); //harus ada ini di setiap fungsi

    // if(!$db) {
    //     echo $db->lastErrorMsg();
    // } else {
    //     echo "Opened database successfully<br>";
    // }

    $drop = "DROP TABLE dorayaki;";

    $sql ="
    CREATE TABLE IF NOT EXISTS dorayaki(
        id INTEGER PRIMARY KEY,
        nama TEXT,
        deskripsi TEXT,
        harga INT,
        stok INT,
        terjual INT,
        gambar TEXT,
        UNIQUE (nama, deskripsi, harga, gambar)
    );";

    // execute($drop);
    execute($sql);

    // FUNCTIONS
    // execute tuh buat perintah kayak update delete insert create drop
    // kalo perintah buat select (yg memperoleh info gt) ga bisa kayaknya
    function execute($query) {
        global $db;
        $ret = $db->exec($query);
        // if(!$ret){
        //     echo $db->lastErrorMsg();
        // } else {
        //     echo "Successfully executed<br>";
        // }
        // $db->close();
    }

    // menambah varian dorayaki baru
    function insertVariant($nama, $deskripsi, $harga, $stok, $terjual,$gambar) {
        $query ="
        INSERT INTO dorayaki(nama, deskripsi, harga, stok, terjual, gambar)
        VALUES ('$nama', '$deskripsi', $harga, $stok, $terjual, '$gambar');";
        
        execute($query);
    }

    function beliDorayaki($id, $jumlah) {
        $stok = getStockbyId($id);

        if( $stok >= $jumlah ) {
            $query = "
            UPDATE dorayaki
            SET 
            stok = stok - '$jumlah',
            terjual = terjual + '$jumlah'
            WHERE id = '$id';
            ";

            execute($query);
        } else {
            echo 'stok tidak mencukupi';
        }
    }

    // ngecek apakah id varian dorayaki eksis
    function dorayakiExist($id) {
        global $db;

        $found = false;
        $query = "
        SELECT * 
        FROM dorayaki 
        WHERE id ='$id';";

        $result = $db->query($query)->fetchArray();
        if($result) {
            // var_dump($result);
            // echo '<br>';
            // print_r($result);
            // echo '<br>';
            // print($result['nama']);
            $found = true;
        } else {
            echo '<br>Dorayaki not found<br>';
        }

        return $found;
    }

    // liat stok dorayaki berdasarkan nama
    // kalo return -99 berarti dorayaki tidak ditemukan
    function getStock($id) {
        global $db;
        $stok = -99;

        $query = "
        SELECT stok
        FROM dorayaki
        WHERE id = '$id';";

        $result = $db->query($query)->fetchArray();

        if($result) {
            $stok = $result['stok'];
        }

        return $stok;
    }

    function getStockbyId($id) {
        global $db;
        $stok = -99;

        $query = "
        SELECT stok
        FROM dorayaki
        WHERE id = '$id';";

        $result = $db->query($query)->fetchArray();

        if($result) {
            $stok = $result['stok'];
        }

        return $stok;
    }

    // ganti stok dorayaki
    function changeStock($id, $stok) {
        // stok tidak bisa negatif
        if(dorayakiExist($id) && $stok>=0) {
            $query = "
            UPDATE dorayaki
            SET stok = '$stok'
            WHERE id = '$id';";
            
            execute($query);
        } 
    }

    // menghapus varian dorayaki
    function deleteVariant($id) {
        $query = "
        DELETE FROM dorayaki 
        WHERE id = '$id';";

        execute($query);
    }

    // menampilkan detail sebuah varian dorayaki
    function displayDetail($id) {
        global $db;
        $query = "
        SELECT * FROM dorayaki WHERE id = '$id';";
        $result = $db->query($query);
        echo "<table>";
        while ($row=$result->fetchArray()) {
            echo "<tr><td>" . $row['nama'] . "</td><td>" . $row['deskripsi'] . "</td><td>" . $row['harga'] . "</td><td>" . $row['stok'] . "</td><td>" . "<img src='" . $row['gambar'] . "' width='30' height='30'> </td></tr><br>";
            if($_SESSION['level']=='user') {
                buyForUser($row);
            }
        }
        echo "</table>";
    }

    function buyForUser($id) {
        $row = getDetailbyId($id);

        echo "<input type='hidden' name='foto' value='" . $row['gambar'] . "'></input> 
        <input type='hidden' name='nama' value='" . $row['nama'] . "'></input>
        </form>";
    }

    // menampilkan seluruh varian dorayaki

    function displayAll() {
        global $db;
        $query = "
        SELECT id,nama FROM dorayaki";
        $result = $db->query($query);
        echo "<table>";
        while ($row=$result->fetchArray()) {
            echo "<tr><td>" . $row['nama'];
            if($_SESSION['level']=='admin') {
                deleteForAdmin($row);
            }
            echo "<form action='displayVariant.inc.php?id=". $row['id']."' method='post'><button type='submit' name='detail' value='" . $row['id'] . "'>detail</button> </form> </td></tr> <br>";      
        }
        echo "</table>";
    }

    function deleteForAdmin($row) {
        echo"<form action='deleteVariant.inc.php' method='post'><button type='submit' name='delete' value='" . $row['id'] . "'>delete</button> </form>";
    }

    function getInfoById($id) {
        global $db;
        $query = "SELECT * FROM dorayaki WHERE id = '$id';";
        $result = $db->query($query);

        while ($row=$result->fetchArray()) {
            $nama = $row['nama'];
            $stok = $row['stok']; 
            $terjual = $row['terjual'];
            $harga = $row['harga'];
        }

        return array($nama, $stok, $terjual, $harga);
    }

    function getDetailbyId($id) {
        global $db;
        $query = "SELECT * FROM dorayaki WHERE id = '$id';";
        $result = $db->query($query);

        $row=$result->fetchArray();

        return $row;
    }

    //nampilin 10 dorayaki pertama buat dashboard
    function getsepuluhdorayaki(){
        global $db;
        $query = "SELECT * FROM dorayaki LIMIT 10;";
        $result = $db->query($query);

        while ($user=$result->fetchArray()){
            echo "<div class='responsif'> <div class='gambar'> <a href='" . $user['nama'] .  ".php'><img src=' " . $user['gambar'] . "' alt='Gambar Dorayaki' width='200' height='200'> <div class='deskripsi'> <p>" . $user['nama'] . "</p><p>" . $user['deskripsi']. "</p><p>Harga: " . $user['harga'] . "</p><p>Stok :" . $user['stok'] . "</p></div></a></div></div>";
        }
    }

    // nama dorayaki berdasarkan id
    function getNamabyId($id) {
        global $db;

        $query = "
        SELECT nama
        FROM dorayaki
        WHERE id = '$id';";

        $result = $db->query($query)->fetchArray();

        if($result) {
            $nama = $result['nama'];
        }

        return $nama;
    }

    function getHargabyId($id) {
        global $db;

        $query = "
        SELECT harga
        FROM dorayaki
        WHERE id = '$id';";

        $result = $db->query($query)->fetchArray();

        if($result) {
            $nama = $result['harga'];
        }

        return $nama;
    }
    //getsepuluhdorayaki();

    // DRIVER
    // insertVariant('dorayaki','dora',3000,7,0,'dorayakiImages/Dorayaki_001.jpg');
    // insertVariant('dora','boots',5000, 5, 'pisang');
    // insertVariant('dori','boots',7000, 5, 'pisang');
    // print getStock('dora');
    // changeStock('dorayaki',23);
    //deleteVariant('dora');
    //displayDetail('dora');
    
    // $db->close(); // taroh diakhir aja

    // ide bonus no 5 & 7
    // Simpan id dari dorayakinya dulu
    // get stok lama
    // get stok baru
