function hideAttributebyId(id) {
    var harga = document.getElementById(id);
    harga.style.display = 'none';

    console.log('test');
}

function attribute(id, value) {
    document.getElementById(id).innerHTML = value;
}

function hideHarga() {
    var els = document.getElementsByClassName("ayo-dong");
    Array.prototype.forEach.call(els, function(el) {
        // Do stuff here
        el.setAttribute("style", "display: none;");
    });
}