<?php
    require_once 'dorayakiFunctions.php';

    $drop = "DROP TABLE riwayat;";

    $sql ="
    CREATE TABLE IF NOT EXISTS riwayat(
        id_riwayat INTEGER PRIMARY KEY,
        id_user INTEGER,
        id_dorayaki INTEGER,
        nama_dorayaki TEXT,
        jumlah_pengubahan INTEGER,
        total_harga INTEGER,
        time TEXT,
        FOREIGN KEY (id_user) 
            REFERENCES user (id)
    );";

    // enable foreign key
    execute('PRAGMA foreign_keys = ON;');

    // execute($drop);
    execute($sql);

    // admin melakukan perubahan stok
    // jumlah pengubahan bisa negatif (artinya stoknya berkurang)
    function ubahStok($id_user, $id_dorayaki, $jumlah_pengubahan) {
        $nama_dorayaki = getNamabyId($id_dorayaki);
        
        var_dump($nama_dorayaki);
        $query ="
        INSERT INTO riwayat(id_user, id_dorayaki, nama_dorayaki, jumlah_pengubahan, time)
        VALUES ($id_user, $id_dorayaki ,'$nama_dorayaki' , $jumlah_pengubahan, datetime('now','localtime'));";
        
        execute($query);
    }

    function beli($id_user, $id_dorayaki, $jumlah_pengubahan) {
        $nama_dorayaki = getNamabyId($id_dorayaki);
        $total_harga = $jumlah_pengubahan * getHargabyId($id_dorayaki);

        $query ="
        INSERT INTO riwayat(id_user, id_dorayaki, nama_dorayaki, jumlah_pengubahan, total_harga, time)
        VALUES ($id_user, $id_dorayaki,'$nama_dorayaki', $jumlah_pengubahan, $total_harga, datetime('now','localtime'));";
        
        execute($query);
        
    }

    // ubahStok(2, 1, 1);
    // beli(2,5,2);

    // $db->close(); 