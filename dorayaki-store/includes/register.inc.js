var email = document.getElementById('email');
var username = document.getElementById('username');
var password = document.getElementById('password');

// error messages
var errorEmail = document.getElementById('error-email');
var errorUsername = document.getElementById('error-username');
var availUsername = document.getElementById('avail-username');
// TODO: munculin pesan error

// validasi email
email.addEventListener('input', function() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var xhr = new XMLHttpRequest();
    var valid = re.test(String(email.value).toLowerCase());
    xhr.onreadystatechange = function() {
        
        if( xhr.readyState == 4 && xhr.status == 200 ) {
            
            console.log(email.value);
            console.log(valid);
            
            // kalo ga valid bordernya merah, muncul pesan error
            if(!valid) {
                // email.setAttribute("style", "border-color: red;");
                email.style.borderColor = '#e74c3c';
                errorEmail.style.display = "block";
            
            } else { 
                // kalo valid bordernya hijau
                email.style.borderColor = 'green';
                errorEmail.style.display = "none";
            }

            if(email.value == "") {
                errorEmail.style.display = "none";
            }
        }
    }

    // eksekusi ajax
    xhr.open('GET','',true);
    xhr.send();
})

// validasi username + cek keunikan username
username.addEventListener('input', function() {
    const re = /[0-9A-Za-z_]+$/;

    var xhr = new XMLHttpRequest();
    var valid = re.test(String(username.value).toLowerCase());

    // // single quote
    // console.log(/[']/.test(username.value));
    // if ( console.log(/[']/.test(username.value)) ) {
        
    // }

    xhr.onreadystatechange = function() {

        if ( xhr.readyState == 4 && xhr.status == 200 ) {

            console.log(username.value);
            // console.log(valid);
            const exist = JSON.parse(xhr.responseText);

            if(!valid) {
                // format salah
                username.style.borderColor = '#e74c3c';
                errorUsername.style.display = "block";
                errorUsername.innerHTML = "Usernames can contain only <br> letters, numbers and _";
                availUsername.style.display = "none";
                
            } else if(exist) {
                // udah taken
                username.style.borderColor = '#e74c3c';
                errorUsername.style.display = "block";
                errorUsername.innerHTML = "The username is already taken";
                availUsername.style.display = "none";

            } else {
                // avail
                // username.style.borderWidth = '2px';
                username.style.borderColor = 'green';
                errorUsername.style.display = "none";
                availUsername.style.display = "block";
            }

            if(username.value == "") {
                errorUsername.style.display = "none";
                availUsername.style.display = "none";
            }

            // TODO: belum nanganin kasus kalo inputnya mengandung kutip '
            // jadi error soalnya
        } 
    }

    xhr.open('GET','includes/validasiUname.php?u='+String(username.value).toLowerCase(),true);
    xhr.send();
})