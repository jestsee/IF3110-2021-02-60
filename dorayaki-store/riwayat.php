<link href="css/dashboardstylesheet.css" rel="stylesheet">
<?php
session_start();

require_once 'includes/functions.inc.php';
require_once 'header.php';

checkCookie(); // cek masih login ga
$id = $_COOKIE['id'];

class MyDB extends SQLite3 {
    function __construct() {
        $this->open('includes/dorayaki.db');
    }
}

$db = new MyDB();

$query = "
    SELECT * FROM riwayat
    WHERE id_user = $id
    ORDER BY date(time) DESC;
    ";
$temp = $db->query($query);

$query1 = "
SELECT * FROM user
WHERE id = '$id';
";

$result = $db->query($query1)->fetchArray();

$u_id = $result['username'];

// var_dump($row);
if( isset($_SESSION['level']) ) {
    $level = $_SESSION['level'];
    if($level == 'admin') {

        echo adminHeader1($u_id);

    } elseif ($level == 'user') {
        echo userHeader1($u_id);
    }
}
?>

<table border="1" cellpadding="10" cellspacing="0">

	<tr>
		<th>Nama</th>
		<th id="jumlah-pengubahan"></th>
		<th id="total-harga">Total harga</th>
		<th>Waktu</th>
	</tr>

    <?php while( $row = $temp->fetchArray() ) : ?>
	<tr>
		<td><a href="includes/displayVariant.inc.php?id=<?= $row["id_dorayaki"] ?>"
        ><?= $row["nama_dorayaki"]; ?></a></td>
		<td><?= $row["jumlah_pengubahan"]; ?></td>
		<td class="ayo-dong"><?= $row["total_harga"]; ?></td>
		<td><?= $row["time"]; ?></td>

	</tr>
    <?php endwhile; ?>

</table>

<?php 
if( isset($_SESSION['level'])) {
    if($_SESSION['level']=='admin' ) {
        // hide harga dan nama kolom
        echo "<script src='includes/bedainTampilan.js'></script>";
        echo "<script>hideAttributebyId('total-harga')</script>";
        echo "<script>hideHarga()</script>";
        echo "<script>attribute('jumlah-pengubahan','Jumlah Pengubahan')</script>";

    } elseif ($_SESSION['level']=='user') {
        // nama kolom
        echo "<script src='includes/bedainTampilan.js'></script>";
        echo "<script>attribute('jumlah-pengubahan','Jumlah Pembelian')</script>";
    }
}
?>