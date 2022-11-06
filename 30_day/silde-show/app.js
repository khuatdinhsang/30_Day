var listImg1 = [];

// function loading() {
//     for (var i = 0; i < 6; i++) {
//         listImg1[i] = new Image();
//         listImg1[i].src = "../img/img" + (i + 1) + ".jpeg";
//     }
// }

// var listImg2 = ['../img/img1.jpeg', '../img/img2.jpeg', '../img/img3.jpeg', '../img/img4.jpeg', '../img/img5.jpeg', '../img/img6.jpeg', ]
// var hinh = document.querySelector('img');

// var currentIndex = 0;

// function _first() {
//     currentIndex = 0;
//     hinh.src = listImg2[currentIndex];
// }

// function _next() {
//     if (currentIndex == listImg2.length - 1) {
//         currentIndex = -1;
//     }
//     currentIndex++;
//     hinh.src = listImg2[currentIndex];




// }

// function _back() {
//     if (currentIndex == 0) {
//         currentIndex = listImg2.length;
//     }
//     currentIndex--;
//     hinh.src = listImg2[currentIndex];


// }

// function _last() {
//     currentIndex = listImg2.length - 1
//     hinh.src = listImg2[currentIndex];

// }

// var t;

// function _play() {
//     clearInterval(t);
//     t = setInterval(() => {
//         _next()
//     }, 1000);
// }

// function _stop() {
//     hinh.src = listImg2[currentIndex];
//     clearInterval(t);
// }

var form = document.querySelector('form');
var name1 = document.querySelector('input[type="text"] ');
var phone = document.getElementById("phone");
var option = document.getElementById('choose');
var favourite = document.querySelectorAll('input[type=checkbox]');
var gender = document.querySelectorAll('input[type=radio]');

// function getInfo(e) {
//     e.preventDefault();
//     console.log(name1.value);
// }

function getInfor() {
    console.log(name1.value);
    console.log(option.value);
    console.log(phone.value);
    var msg = '';
    for (let i = 0; i < favourite.length; i++) {
        if (favourite[i].checked == true) {
            msg += favourite[i].value + ", ";
        }
    }
    console.log(msg);
    var msg1 = '';
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked == true) {
            msg1 = gender[i].value;
        }
    }
    console.log(msg1);
}

function valiDate(event) {
    event.preventDefault();
    var name1 = document.form.txtName.value;
    var email = document.form.txtEmail.value;
    var mobile = document.form.txtMobile.value;
    var desErrName = document.getElementById("nameErr");
    var desErrEmail = document.getElementById("emailErr");
    var desErrMobile = document.getElementById("mobileErr");
    const regexName = /^[a-zA-Z ]+$/;
    const regexEmail = /^[a-z0-9_\.]{3,}@\w+.\w{2,6}$/;
    const regexMobile = /^0[0-9]{9}$/
    var ErrName = true;
    var ErrEmail = true;
    var ErrMobile = true;
    if (name1 == "") {
        desErrName.innerHTML = "Khong duoc de trong";
    } else if (regexName.test(name1) == false) {
        desErrName.innerHTML = "Ten khong hop le";
    } else {
        desErrName.innerHTML = '';
        ErrName = false;

    }
    if (email == "") {
        desErrEmail.innerHTML = "Khong duoc de trong";
    } else if (regexEmail.test(email) == false) {
        desErrEmail.innerHTML = "Email khong hop le";
    } else {
        desErrEmail.innerHTML = '';
        ErrEmail = false;
    }
    if (mobile == "") {
        desErrMobile.innerHTML = "Khong duoc de trong";
    } else if (regexMobile.test(mobile) == false) {
        desErrMobile.innerHTML = "Phone khong hop le";
    } else {
        desErrMobile.innerHTML = '';
        ErrMobile = false;
    }

    if (ErrMobile == true || ErrEmail == true || ErrName == true) {
        return false;
    } else {
        alert("Dang ki thanh cong");
        return true;
    }
}