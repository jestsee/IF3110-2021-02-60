<?php

function userHeader($u_id) {
    echo "
    <div class='header'>
        <ul>
            <li class='navitemleft'><a href=\"index.php\"><img src='css/logos2.jpg' width='150' height='50' style='padding: 0; margin: 0;'></a></li>
            <form action='search.php' method='post'><li class='navitemsearch'><input type='text' name='cari' placeholder='Search here :D'></li>
            <li class='navitemsearch'><button type='submit' name='submit'>Search</button></li></form>
            <li class='navitem'>".$u_id."</li>
            <li class='navitem'><a href=\"logout.php\">logout</a></li>
            <li class='navitem'><a href=\"riwayat.php\">riwayat</a></li>
        </ul>
    </div>
    ";
}

function adminHeader($u_id) {
    echo "
    <div class='header'>
        <ul>
            <li class='navitemleft'><a href=\"index.php\"><img src='css/logos2.jpg' width='150' height='50' style='padding: 0; margin: 0;'></a></li>
            <form action='search.php' method='post'><li class='navitemsearch'><input type='text' name='cari' placeholder='Search here :D'></li>
            <li class='navitemsearch'><button type='submit' name='submit'>Search</button></li></form>
            <div class='kanan'>
            <li class='navitem'>".$u_id."</li>
            <li class='navitem'><a href=\"logout.php\">logout</a></li>
            <li class='navitem'><a href=\"riwayat.php\">riwayat</a></li>
            <li class='navitem'><form action= 'insertVariantPage.php' method='post' enctype='multipart/form-data'><button type='submit' name='submit'>Insert New Variant</button></form></li>
            </div>
        </ul>
    </div>
    ";
}

function userHeader1($u_id) {
    echo "
    <div class='header'>
        <ul>
            <li class='navitemleft'><a href=\"../index.php\"><img src='../css/logos2.jpg' width='150' height='50' style='padding: 0; margin: 0;'></a></li>
            <form action='../search.php' method='post'><li class='navitemsearch'><input type='text' name='cari' placeholder='Search here :D'></li>
            <li class='navitemsearch'><button type='submit' name='submit'>Search</button></li></form>
            <li class='navitem'>".$u_id."</li>
            <li class='navitem'><a href=\"../logout.php\">logout</a></li>
            <li class='navitem'><a href=\"../riwayat.php\">riwayat</a></li>
        </ul>
    </div>
    ";
}

function adminHeader1($u_id) {
    echo "
    <div class='header'>
        <ul>
            <li class='navitemleft'><a href=\"../index.php\"><img src='../css/logos2.jpg' width='150' height='50' style='padding: 0; margin: 0;'></a></li>
            <form action='../search.php' method='post'><li class='navitemsearch'><input type='text' name='cari' placeholder='Search here :D'></li>
            <li class='navitemsearch'><button type='submit' name='submit'>Search</button></li></form>
            <div class='kanan'>
            <li class='navitem'>".$u_id."</li>
            <li class='navitem'><a href=\"../logout.php\">logout</a></li>
            <li class='navitem'><a href=\"../riwayat.php\">riwayat</a></li>
            <li class='navitem'><form action= '../insertVariantPage.php' method='post' enctype='multipart/form-data'><button type='submit' name='submit'>Insert New Variant</button></form></li>
            </div>
        </ul>
    </div>
    ";
}

?>