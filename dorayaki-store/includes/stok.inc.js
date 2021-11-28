// ambil elemen2 yang dibutuhkan
var stokInput = document.getElementById('stok');
var tombolBeli = document.getElementById('tombol-beli');
var harga = document.getElementById('harga');
var terjual = document.getElementById('terjual');

// sementara event nya pake change atau input (input bs cover semua)
// bisa jadi template buat ajax di fungsi lain
// ginikah real-time?
stokInput.addEventListener('input', setInterval(function() {
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')

    // buat objek ajax
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if( xhr.readyState == 4 && xhr.status == 200 ) {

            // set max stok
            obj = JSON.parse(xhr.responseText);
            stokInput.setAttribute("max",obj[1])
            harga.innerHTML = obj[3] * stokInput.value;
            stoknya.innerHTML = obj[1];
            terjual.innerHTML = obj[2];
            // debug
            // container.innerHTML = stokInput.value;

        }
    }

    // eksekusi ajax
    xhr.open('GET', 'includes/maxStok.php?id=' + id, true);
    xhr.send();

}, 500))

// stokInput.addEventListener('input', function() {
    
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     const id = urlParams.get('id')

//     // buat objek ajax
//     var xhr = new XMLHttpRequest();

//     // cek kesiapan ajax
//         // nilai ready state itu antara 0 - 4
//         // 0: inisialisasi
//         // 1: membuka koneksi
//         // 2: dst
//         // 4: sumber sudah ready (sudah oke dah)

//         // status 404: file not found

//     xhr.onreadystatechange = function() {
//         if( xhr.readyState == 4 && xhr.status == 200 ) {

//             // set max stok
//             obj = JSON.parse(xhr.responseText);
//             stokInput.setAttribute("max",obj[1])
//             harga.innerHTML = obj[2] * stokInput.value;
            
//             // debug
//             // container.innerHTML = stokInput.value;

//         }
//     }

//     // eksekusi ajax
//     xhr.open('GET', 'includes/maxStok.php?id=' + id, true);
//     xhr.send();

// })