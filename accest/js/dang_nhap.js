// Show/hide password onClick of button using Javascript only

// https://stackoverflow.com/questions/31224651/show-hide-password-onclick-of-button-using-javascript-only

function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);
function kt() {

    var email = document.getElementById("email").value; 
    
    var loiemail = "";
    if (email.length == 0) {
        loiemail = "Email không được bỏ trống";
        document.getElementById("loiemail").innerHTML = loiemail;
        document.getElementById("loiemail").style.display = "";
        document.getElementById("loiemail").style.color = "red";
    }

}
function oc2() {
    var email = document.getElementById("email").value;
    var kiemtraem = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    
    if (kiemtraem.test(email)) {
        document.getElementById("loiemail").innerHTML = "Email hợp lệ";
        document.getElementById("loiemail").style.color = "red";
        setTimeout(() => document.getElementById("loiemail").style.display = "none", 5000);
    } else {
        document.getElementById("loiemail").innerHTML = "Email không hợp lệ vd:( abcxyz@gmail.com)"
        document.getElementById("loiemail").style.color = "red";
        document.getElementById("loiemail").style.display = "";
    }
}
// check username
function kt() {
    var password = document.getElementById("txt-input").value;
    var loipas = "";
    
    if (password.length == "") {
        loimsv = "Password không được bỏ trống";
        document.getElementById('dmm').innerHTML = loipas;
        document.getElementById("dmm").style.display = "";
        document.getElementById("dmm").style.color = "red";
        
        
    }else  if(password.length < 7)
        {
            loimsv = "Bạn phải nhập password lớn hơn 7 kí tự";
        document.getElementById('dmm').innerHTML = loipas;
        document.getElementById("dmm").style.display = "";
        document.getElementById("dmm").style.color = "red";
       
        }
    }

function oc() {
    document.getElementById("dmm").style.display = "none";
}
