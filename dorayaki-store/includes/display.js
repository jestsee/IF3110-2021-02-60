function rupiah(bilangan) {
    var	number_string = bilangan.toString(),
      sisa 	= number_string.length % 3,
      rupiah 	= number_string.substr(0, sisa),
      ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
        
    if (ribuan) {
      separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
  
    }
  
    return "Rp" + rupiah + ",00";
  }
  

function displayVariant(nama, deskripsi, harga, foto) {
    document.getElementById("title").innerHTML = nama;
    document.getElementById("nama").innerHTML = nama;
    document.getElementById("deskripsi").innerHTML = deskripsi;
    document.getElementById("harga").innerHTML = rupiah(harga);
    document.getElementById("foto").src = foto;
}

function attribute(id, value) {
    document.getElementById(id).innerHTML = value;
}

function hilanginDelete() {
    document.getElementById('tombol-delete').style.display = 'none';
}