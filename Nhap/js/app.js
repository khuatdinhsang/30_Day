// var courses = [{
//     id: 1,
//     name: 'Javascript',
//     coin: 0,
//     language: 'vietnam'
// }, {
//     id: 5,
//     name: 'Javascript',
//     coin: 0,
//     language: 'vietnam'
// }, {
//     id: 7,
//     name: 'Javascript',
//     coin: 0,
//     language: 'vietnam'
// }, {
//     id: 9,
//     name: 'Javascript',
//     coin: 0,
//     language: 'vietnam'
// }, {
//     id: 2,
//     name: 'Javascript',
//     coin: 0,
//     language: 'vietnam'
// }];
// courses.sort(function(a, b) {
//     if (a.id > b.id) return -1;
//     if (a.id < b.id) return 1;
//     if (a.id == b.id) return 0;
// });
// console.log(courses);

// var arr = [23, 5, 23, 4621, 7, 21];
// var newarr = arr.find(function(a) {
//     return a % 2 == 0;
// });
// // console.log(newarr);

// var today = new Date();
// console.log(today.getMonth());
// var arr = [3, 4, 2, 4, 6, 7, 8, 4, 1];
// var cc = Math.max(3, 4, 2, 4, 6, 7, 8, 4, 1);
// var cccc = Math.min(...arr);
// console.log(cccc)
// console.log(cc);

// var lol = [1, 5, 7, 8, 9, 15];
// var lol1 = lol.filter(function(a) {
//     return a % 2 == 1;
// });
// // console.log(lol1);
// var lol2 = lol.slice(3, 6);
// console.log(lol2);
// var sang = {
//     cao: 170,
//     lun: 'dong',
//     id: 1,

// }
// var trung = {...sang };
// trung.lun = 'cao';
// trung.logng = true;
// console.log(trung);


// Call  back
// function A(number1, number2, cb) {
//     var output = cb(number1, number2);
//     console.log(output);
// }

// function add(number1, number2) {
//     return number1 + number2;
// }
// A(4, 5, add);

// // 
// //class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     go() {
//         console.log('bo may dang di choi');
//         console.log(this.name + " " + this.age);
//     }
// }
// // var cak = new Person('sang', 24);
// // console.log(cak);
// // console.log(cak.go());

// class student extends Person {
//     constructor(name, age, classes, lover) {
//         super(name, age);
//         this.classes = classes;
//         this.lover = lover;
//     }
//     go() {
//         console.log('co cai lon dit con ab may');
//         console.log()
//     }
// }
// var conc = new student();
// var p = new Person('sang', 16);
// p.go();
// conc.name = 'dong';
// conc.age = 14;
// conc.classes = 12;
// conc.lover = 'co ny';
// console.log(conc);
// conc.go();

// var dong = {
//     sang: 'dep',
//     live: false,
//     name: 15

// };
// console.log(dong.sang);
// dong.sang = 'cao';
// console.log(dong.sang);
// console.log(dong['name']);
// var nm = dong['name'] = 'minh';
// console.log(nm);

// var dog = {
//     weight: 5,
//     name: 'tu',
//     typr: 'hihi',

//     eating: function(bone) {
//         this.weight = this.weight + bone;
//         return this;
//     }
// }
// console.log(dog);
// var bone = 0.5;
// console.log('before eating: ' + dog.weight);
// dog.eating(bone);
// console.log('after eating: ' + dog.weight);

// var sang = [{
//     name: 'sang',
//     weight: 24,
// }, {
//     name: 'sang',
//     weight: 23,
// }, {
//     name: 'sang',
//     weight: 10,
// }]

// var dong = sang.map(function(item) {
//     return item * 2;
// });
// console.log(dong);

// var arr = [2, 3, 2, 1, 5];
// var arr2 = arr.reduce(function(a, b) {
//     return a + b;
// }, 10);
// console.log(arr2);

// var oders = [
//     { name: 'A', quantity: 2, unitPrice: 100 },
//     { name: 'B', quantity: 4, unitPrice: 200 },
//     { name: 'C', quantity: 1, unitPrice: 150 },
//     { name: 'D', quantity: 5, unitPrice: 190 },
// ];
// var total = oders.map(function(a) {
//     return a.quantity * a.unitPrice;
// });
// console.log(total);
// var sum = total.reduce(function(a, b) {
//     return a + b;
// });
// console.log(sum);
// var cccc = oders.reduce(function(a, b) {
//     return a + b.quantity * b.unitPrice;
// }, 0);
// console.log(cccc);

// var items = ['Tom', 'Bill', 'Kim'];
// var cc = items.reduce(function(a, b) {
//     return a + '<' + b + '>';
// });
// console.log(cc);

// var items = [{ name: 'sang', age: 18 },
//     { name: 'sang', age: 28 },
//     { name: 'sang', age: 19 },
//     { name: 'sang', age: 91 },
//     { name: 'sang', age: 8 },
// ];

// var cc = items.sort(function(item1, item2) {
//     if (item1.age > item2.age) {
//         return 1;
//     } else if (item1.age < item2.age) {
//         return -1;
//     } else {
//         return 0;
//     }
// });
// console.log(cc);

// var items = ['1', '20', '-8', '0', '16'];
// var cc = items.map(function(item) {
//     return item;
// });
// var lol = parseInt(cc);
// console.log(typeof lol === 'number');
// var items = ['BMW', 'Mercedes', 'Vinfast'];
// var cc = items.map(function(item) {
//     return '<li>' + item + '</li>';
// });
// console.log(cc);
// var numbers = [{}, 1, [], 2, 'hi', 0, 6];
// var numbers = [1, 'a', 2, 0, 6];
// var lol = numbers.filter(function(items) {
//     if (typeof items === 'number') {
//         return items;
//     }
// });
// console.log(lol);
// var cc = lol.reduce(function(a, b) {
//     return a + b;


// });
// console.log(cc);
// var items = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var cc = items.reduce(function(a, b) {
//     return a.concat(b);
// }, []);
// console.log(cc);


// var cc = document.querySelector('.box');
// cc.style.width = '100px';
// cc.style.height = '200px';
// cc.style.backgroundColor = 'green';

// // hoac
// Object.assign(cc.style, {
//     width: '100px',
//     height: '500px',
//     backgroundColor: 'red',
// });
// cc.classList.add('red', 'font');
// console.log(cc.classList.length);
// console.log(cc.classList.contains('red1'));
// setInterval(() => {
//     cc.classList.toggle('font');

// }, 1000);
// console.log(cc.style.width);
// function myfunction() {
//     document.querySelector(".box p").innerHTML = "Sang qua la xau trai";
// }





// var point = [2, 7, 4, 9, 10, 3, 5];
// document.getElementById("demo").innerHTML = point;

// function giamDan() {
//     point.sort(function giam(a, b) {
//         if (a > b) {
//             return -1;
//         } else if (a < b) {
//             return 1;
//         } else {
//             return 0;
//         }
//     })
//     document.getElementById("demo").innerHTML = point;

// };

// function tangDan() {
//     point.sort(function tang(a, b) {
//         if (a > b) {
//             return 1;
//         } else if (a < b) {
//             return -1;
//         } else {
//             return 0;
//         }
//     })
//     document.getElementById("demo").innerHTML = point;
// };

// var sang = {
//     name: 'Sang',
//     age: 18,
//     address: 'Hanoi',
//     gender: 'Male',
// };
// for (var cc of Object.keys(sang)) {
//     console.log(sang[cc]);
// }
// var sang = [2, 3, 5, 2]
// for (var i = 0; i < sang.length; i++) {
//     console.log(sang[i]);
// }

// var sang = document.querySelectorAll('h6');
// for (let i = 0; i < sang.length; i++) {
//     sang[i].innerHTML = "<div class='dong'> Sang qua dep trai</div>";
// }

// document.addEventListener('DOMContentLoaded', function() {
//     var cc = document.querySelector('.box');
//     // console.log(cc);
//     cc.onclick = function() {
//         // console.log('ban vua kick vao' + cc);
//         cc.classList.add('change');
//         cc.classList.add('name1');
//     }
// }, false);


// document.addEventListener("click", myfunction);

// function myfunction() {
//     var cc = document.querySelector('.box');
//     cc.classList.add('change');
//     cc.classList.add('name1');
// }

// document.addEventListener("click", myfunction);

// function myfunction() {
//     var cc2 = document.querySelector('.title');
//     var cc1 = document.querySelector('.content');
//     cc1.classList.add('pull');
// }

// document.addEventListener("DOMContentLoaded", function() {
//     var cc2 = document.getElementById('title');
//     var cc1 = document.getElementById('pull_2');

//     var status = "lan1";
//     cc2.onclick = function() {
//         if (status == "lan1") {
//             cc1.classList.remove('khongdong')
//             cc1.classList.add('pull_1');
//             status = "lan2";
//         } else if (status == "lan2") {
//             cc1.classList.remove('pull_1');
//             status = "lan1";
//         }

//     }
// }, false);



// day la bài hiệu ứng animation 2 chiều 

// document.addEventListener("DOMContentLoaded", function() {
//     var cc1 = document.getElementById('title');
//     var cc2 = document.getElementById('pull_2');
//     var status = "lan1";
//     cc1.onclick = function() {
//         if (status == "lan1") {
//             cc2.classList.remove('khongdong');
//             cc2.classList.add('pull_1');
//             status = "lan2";
//         } else if (status == "lan2") {
//             status = "lan1";
//             cc2.classList.remove('pull_1');
//         }
//     }
// })

// document.addEventListener("DOMContentLoaded", function() {
//     var tg = document.getElementsByClassName('tamgiac');
//     var tamgiac = tg[0];
//     var danhsach = document.getElementsByClassName('danhsach');
//     var danhsach = danhsach[0];

//     tamgiac.onclick = function() {
//         // this.style.color="white";
//         this.classList.toggle('tg_trang');
//         danhsach.classList.toggle('xh');
//     }
// }, false)

// document.addEventListener("DOMContentLoaded", function() {
//     var nut = document.getElementsByClassName('btn');
//     for (var i = 0; i < nut.length; i++)
//         nut[i].onclick = function() {
//             console.log(this.getAttribute('data-matkhau'));
//         }
// }, false);




// day la bai quan trong
// document.addEventListener("DOMContentLoaded", function() {
//     var nut = document.getElementsByClassName('tamgiac');
//     var danhsach = document.getElementsByClassName('danhsach');
//     for (var i = 0; i < nut.length; i++) {
//         nut[i].onclick = function() {
//             console.log(this.classList)
//             if (this.classList[1] == "tg_trang") { // click vao cai da hien thi roi

//                 this.classList.remove("tg_trang"); // bo mau trang o chinh no
//                 // 3 dong duoi la cho div cua doi tuong dc click an di 
//                 var ndhienlen = this.getAttribute('data-hienlen');
//                 var phantuhienra = document.getElementById(ndhienlen);
//                 phantuhienra.classList.remove('xh');
//             } else {

//                 // cho tất cả bỏ màu trắng đi 
//                 for (var k = 0; k < nut.length; k++) {
//                     nut[k].classList.remove('tg_trang');
//                 }

//                 // đối tượng được kích (this ) thành màu trắng
//                 this.classList.toggle('tg_trang');

//                 //  lấy về cái data-hienlen
//                 var ndhienlen = (this.getAttribute('data-hienlen'));
//                 var phantuhienra = document.getElementById(ndhienlen);

//                 // cho tất cả các div .dehienthi khác ẩn đi 
//                 for (var i = 0; i < danhsach.length; i++) {
//                     danhsach[i].classList.remove('xh');
//                 }

//                 // cho div của thằng được kích hiển thị ra
//                 phantuhienra.classList.toggle('xh');
//             }
//         }
//     }

// }, false);



//  bai hom nay 17-07-2022


// document.addEventListener('DOMContentLoaded', function() {
//     var nut = document.querySelector('.nut1');
//     var menutrai = document.querySelector('.menutrai');
//     var den = document.querySelector('.den');
//     var khoito = document.querySelector('.noidungto');

//     //  khi kich vao nut mau xanh
//     nut.onclick = function() {
//         den.classList.add('len');
//         //  cho ca khoi to dich sang phai
//         khoito.classList.add('dichphai');
//     }
//     den.onclick = function() {
//         den.classList.remove('len');
//         khoito.classList.remove('dichphai');
//     }
// }, false);



//  bai tiep theo cuon chuot


// document.addEventListener("DOMContentLoaded", function() {
// var trangthai = 'duoi300';
// var doituongmenu = document.querySelector('.menu');
// document.body.addEventListener('scroll', function() {
//     if (document.body.scrollTop > 300) {
//         if (trangthai == 'duoi300') {
//             trangthai = 'tren300';

//             doituongmenu.classList.add('nholai');
//         }

//     } else if (document.body.scrollTop <= 300) {
//         if (trangthai == 'tren300') {
//             doituongmenu.classList.remove('nholai');
//             trangthai = "duoi300";
//         }
//     }
// })



// kenh 14

// document.addEventListener('DOMContentLoaded', function() {
//     var menudo = document.querySelector('.menu');
//     var trangthaimenudo = 'duoi100';
//     var chungtoi = document.querySelector('.chungtoi');
//     //  lay toa do cua khoi can xet so voi top=0
//     var vitrikhoi2 = chungtoi.offsetTop;

//     var trangthaikhoi2 = "duoi";

//     var khoangcachhientai = 600;
//     var chancuoi = vitrikhoi2 + khoangcachhientai;
//     document.body.addEventListener('scroll', function() {

//         if (document.body.scrollTop > 100) {
//             if (trangthaimenudo == 'duoi100') {
//                 trangthaimenudo = "tren100";
//                 menudo.classList.add('menuden');
//             }
//         } else if (document.body.scrollTop < 100) {

//             if (trangthaimenudo == 'tren100') {
//                 menudo.classList.remove('menuden');
//                 trangthaimenudo = "duoi100";
//             }
//         }
//         if (document.body.scrollTop > vitrikhoi2 && (document.body.scrollTop < chancuoi)) {
//             if (trangthaikhoi2 == "duoi") {
//                 trangthaikhoi2 = "danghienthi";
//                 chungtoi.classList.add('vangdunglai');
//             }
//         } else if (document.body.scrollTop < vitrikhoi2 || (document.body.scrollTop > chancuoi)) {
//             if (trangthaikhoi2 == "danghienthi") {
//                 trangthaikhoi2 = "duoi";
//                 chungtoi.classList.remove('vangdunglai');
//             }
//         }



//         // hieu ung khi di chuyen chuot den dau thi load den day bang js
//         var phantuload = document.querySelector('.s3');
//         var trangthais3 = "duoi1";
//         var vitris3 = phantuload.offsetTop - 100;
//         console.log(vitris3);
//         // xu li phan tu load ph
//         if (document.body.scrollTop > vitris3) {
//             if (trangthais3 == "duoi1") {
//                 trangthais3 = "tren";
//                 phantuload.classList.add('dilen');
//             }
//         }
//     })
// })






// Hieu ung bang slide

document.addEventListener('DOMContentLoaded', function() {
    var nut = document.querySelectorAll('.chuyenslide ul li');

    var slides = document.querySelectorAll('.cacslide ul li');

    var thoigian = setInterval(function() { autoSlide() }, 4000);
    for (var i = 0; i < nut.length; i++) {
        nut[i].addEventListener('click', function() {

            // truoc tien huy tu chuyen dong
            clearInterval(thoigian);
            // bo tat ca mau den di vi no la mang nen dung vong
            // lap for de duyet, khong the bo cung luc duoc
            for (var j = 0; j < nut.length; j++) {
                nut[j].classList.remove('kichhoat');
            }
            this.classList.add('kichhoat');

            //  xu li vi tri kich 
            var nutkichhoat = this;
            var vitrinut = 0;
            for (vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {
                // console.log('bien i=' + i);
                // console.log('phan tu nut kich hoat la: ' + nutkichhoat);
            }
            console.log("vi tri cua phan tu co class kich hoat la: " + vitrinut);
            //  het vong lap nay thi bien i bang so thu tu kich hoat
            // buoc1: cho tat ca slide an di = cach remove class active
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
                slides[vitrinut].classList.add("active");
            }
        })
    }
    // het su kien cho nut
    //  ham tu chuyen dong slide

    function autoSlide() {
        //  buoc 1 xem slide nao dang hien this
        var vitrislide = 0;
        var slidehientai = document.querySelector('.cacslide ul li.active');
        // console.log(slidehientai.previousElementSibling);
        // console.log(slidehientai);
        for (vitrislide = 0; slidehientai = slidehientai.previousElementSibling; vitrislide++) {

        }
        // neu ma chau den slide cuoi cung tuc la vitrislide
        // <=slide.length thi hoat dong bhtg
        // cho phan tu tiep theo cua slide hien thi ra
        //cho an het di 

        if (vitrislide < slides.length - 1) {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                nut[i].classList.remove('kichhoat');
            }
            slides[vitrislide].nextElementSibling.classList.add('active');
            nut[vitrislide].nextElementSibling.classList.add('kichhoat');
        } else {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                nut[i].classList.remove('kichhoat');
            }
            slides[0].classList.add('active');
            nut[0].classList.add('kichhoat');
        }
    }

})