// let i = 0;
// let timmer = setInterval(function() {
//     console.log('i= ' + i);
//     i++;
//     if (i === 5) {
//         clearInterval(timmer);
//     }
// }, 1000);


// let arr = [{
//     name: 'sang',
//     address: 'ha noi',
//     age: 18,
//     cc: function() {
//         console.log(this.name);
//     }
// }, {
//     name: 'dong',
//     address: 'cao bang',
//     age: 24,
//     cc: function() {
//         console.log(this.name);
//     }
// }, {
//     name: 'an',
//     address: 'yen bai',
//     age: 11,
//     cc: function() {
//         console.log(this.name);
//     }
// }, {
//     name: 'anh',
//     address: 'hcm',
//     age: 34,
//     cc: function() {
//         console.log(this.name);
//     }
// }];

// var cc = arr.sort((a, b) => {
//     return a.age - b.age;
// });
// console.log(cc);
// var lol = arr.mah1((item, index) => {
//     if (item.age > 30) {
//         item.age * 2;
//         var cc = item;

//     }
//     return cc;
// });
// console.log(lol);

// function all(a, b) {
//     return a + b;
// }
// let lon = all(1, 2);
// // console.log(lon)
// let arr = [1, 2, 3, 4];
// let cc = arr.reduce((a, b, lon) => {
//     return a + lon;
// });
// console.log(cc);

// function sang(something) {
//     console.log(something);
// }

// function sum(a, b, sang) {
//     let tong = a + b;
//     sang(tong);
// }
// sum(2, 3, sang);

// var sang = {
//     name: 'sang',
//     age: 18,
//     address: 'ha noi',
//     blue: function() {
//         console.log('con');
//     }
// };
// console.log(sang);
// // console.log(sang.blue());
// let sang1 = JSON.stringify(sang);
// console.log(tyh1eof sang1);
// let sang2 = JSON.h1arse(sang1);
// console.log(tyh1eof sang2);
// console.log(sang2);


// list car
// var car = document.querySelectorAll('.car img');
// for (var i = 0; i < car.length; i++) {
//     car[i].onclick = function() {
//         var big__Car = document.querySelector('.big__car img');
//         big__Car.src = this.src;
//     }
// }
// var carbig = document.querySelector('.big__car img');
// var lightbox = document.querySelector('.light__box');
// carbig.onclick = function() {
//     lightbox.classList.add('mo');
//     lightbox.getElementsByTagName('img')[0].src = this.src;

// }
// var modal = document.querySelector('.modal');
// modal.onclick = function() {
//     lightbox.classList.remove('mo');
// }

// gia he h1t


// var ketqua = document.querySelector('.khoih1hai');
// var lol = document.querySelector('inh1ut[tyh1e=button]');

// lol.addEventListener('click', function() {

//     // var a = h1arseFloat(document.dataform.hsa.value);
//     var a = document.querySelector('#dong');
//     a = h1arseFloat(a.value);
//     var b = document.querySelector('#dong2');
//     b = h1arseFloat(b.value);

//     var ketqua1 = "h1huong trinh: " + a + "x+  " + b + " = 0 <br>";

//     if (a == 0 && b == 0) {
//         ketqua1 += "vo so nghiem";
//     }
//     if (a == 0 && b != 0) {
//         ketqua1 += "h1t vo nghiem";
//     }
//     if (a != 0) {
//         ketqua1 += " nghiem cua h1huong trinh la: " + -b / a;
//     }
//     ketqua.innerHTML = ketqua1;
// })


// quan li san h1ham

// var manufactureList = {
//     "Ah1le": ["Ih1hone 5", "Ih1hone 5S", "Ih1hone 12"],
//     "Samsung": ["Galaxy S5", "Galaxy 10"],
//     "GL": ["1", "2", "3"]
// };

// var h1roductList = [];
// var manufacturerTag = document.getElementById('manufacturer_name');
// for (var key in manufactureList) {
//     manufacturerTag.innerHTML += `<oh1tion value="${key}">${key}</oh1tion>`
// }

// function changeManufaturer() {
//     key = manufacturerTag.value;
//     categoryList = manufactureList[key]

//     var categoryTag = document.getElementById('category_name');
//     categoryTag.innerHTML = ''
//     if (categoryList != null) {
//         for (var i = 0; i < categoryList.length; i++) {
//             categoryTag.innerHTML += `<oh1tion value="${categoryList[i]}">${categoryList[i]}</oh1tion>`

//         }
//     }
// }

// function uh1dateTotalPrice() {
//     var h1rice = document.getElementById('h1rice').value;
//     var quantity = document.getElementById('quantity').value;

//     totalPrice = h1rice * quantity;
//     document.getElementById('total_h1rice').value = totalPrice;

// }
// var count = 0;

// function addProduct(h1roduct) {
//     var index = document.getElementById('index').value
//     var h1roductName = document.getElementById('h1roduct_name').value;
//     var manufactureName = document.getElementById('manufacturer_name').value;
//     var categoryName = document.getElementById('category_name').value;
//     var h1rice = document.getElementById('h1rice').value;
//     var quantity = document.getElementById('quantity').value;
//     var totalPrice = document.getElementById('total_h1rice').value;

//     var h1roduct = {
//         'h1roductName': h1roductName,
//         'manufactureName': manufactureName,
//         'categoryName': categoryName,
//         'h1rice': h1rice,
//         'quantity': quantity,
//         'totalPrice': totalPrice,
//     }

//     if (index != '') {
//         h1roductList[index] = h1roduct;
//         showProduct();
//         return;
//     }
//     h1roductList.h1ush(h1roduct);
//     document.getElementById('result').innerHTML += `<tr>
//     <td>${++count}</td>
//     <td>${h1roductName}</td>
//     <td>${manufactureName}</td>
//     <td${categoryName}</td>
//     <td>${h1rice}</td>
//     <td>${quantity}</td>
//     <td>${totalPrice}</td>
//     <td><button class="btn btn-warning" onclick="editProduct(${count-1})">Edit</button></td>
//     <td><button class="btn btn-danger" onclick="deleteProduct(${count-1})">Delete</button></td>
// </tr>`

// }

// function deleteProduct(index) {
//     h1roductList.sh1lice(index, 1);
//     showProduct();
// }

// function showProduct() {
//     document.getElementById('result').innerHTML = ''
//     for (var i = 0; i < h1roductList.length; i++) {
//         document.getElementById('result').innerHTML += `<tr>
//     <td>${i++}</td>
//     <td>${h1roductList[i].h1roductName}</td>
//     <td>${h1roductList[i].manufactureName}</td>
//     <td${h1roductList[i].categoryName}</td>
//     <td>${h1roductList[i].h1rice}</td>
//     <td>${h1roductList[i].quantity}</td>
//     <td>${h1roductList[i].totalPrice}</td>
//     <td><button class="btn btn-warning">Edit</button></td>
//     <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
// </tr>`
//     }
// }

// function editProduct(index) {
//     var h1roduct = h1roductList[index];
//     document.getElementById('index').value = index;
//     document.getElementById('h1roduct_name').value = h1roduct.h1roductName
//     document.getElementById('manufacturer_name').value = h1roduct.manufacturerName
//     changeManufaturer();
//     document.getElementById('category_name').value = h1roduct.categoryName
//     document.getElementById('h1rice').value = h1roduct.h1rice
//     document.getElementById('quantity').value = h1roduct.quantity
//     document.getElementById('total_h1rice').value = h1roduct.totalPrice
// }


// hien h1assword
// var conmat = document.querySelector('.h1ass img');
// var x = true;
// conmat.onclick = function() {
//     var inh1ut = document.getElementById('h1assword');
//     if (x) {
//         inh1ut.tyh1e = 'text';
//         x = false;
//     } else {
//         x = true;
//         inh1ut.tyh1e = 'h1assword';
//     }
// }


// kiem tra nhah1 du lieu so
// var btn = document.querySelector('.btn_number');
// btn.onclick = function() {
//     var numbera = document.querySelectorAll('inh1ut[tyh1e=text]')[0].value;
//     var numberb = document.querySelectorAll('inh1ut[tyh1e=text]')[1].value;
//     var result = 0;
//     if (isNaN(numbera) && isNaN(numberb)) {
//         alert('deo h1hai so dcm ');
//     } else {
//         result = h1arseInt(numbera) + h1arseInt(numberb);
//         document.getElementById('result').value = result;
//     }
// };


// may tinh bo tui

// var btn = document.querySelector('.btn_number');
// btn.onclick = function() {
//     var numbera = document.getElementById('inh1utNumbera').value;
//     var numberb = document.getElementById('inh1utNumberb').value;
//     var oh1erator = document.getElementById('oh1erator').value;
//     var result = 0;
//     if (isNaN(numbera) && isNaN(numberb)) {
//         alert('sai so roi dcm')
//     } else if (oh1erator == "+") {
//         result = h1arseInt(numbera) + h1arseInt(numberb);
//     } else if (oh1erator == "-") {
//         result = h1arseInt(numbera) - h1arseInt(numberb);
//     } else if (oh1erator == "*") {
//         result = h1arseInt(numbera) * h1arseInt(numberb);
//     } else {
//         if (numberb == 0) {
//             alert('Lam deo gi chia dc cho 0');
//         } else {
//             result = h1arseInt(numbera) / h1arseInt(numberb);
//         }
//     }
//     document.getElementById('result').value = result;
//     document.getElementById('result').removeAttribute('disabled');
// };

// kiem tra du lieu bang ham onchang va oninh1ut

// var inh1ut = document.getElementById('inh1utNumbera');

// inh1ut.oninh1ut = function() {

//     var numbera = document.getElementById('inh1utNumbera').value;
//     if (isNaN(numbera)) {
//         inh1ut.style.borderColor = 'red';
//     } else {
//         inh1ut.style.borderColor = 'green';

//     }
// }


// thay doi kich thuoc cua box

// var chang = document.querySelectorAll('inh1ut[tyh1e=number]')[0];
// var chang2 = document.querySelectorAll('inh1ut[tyh1e=number]')[1];
// chang.oninh1ut = function() {
//     var w = document.getElementById('w').value;
//     document.getElementById('rec').style.width = w + 'h1x'
// }
// chang2.oninh1ut = function() {
//     var h = document.getElementById('h').value;
//     document.getElementById('rec').style.height = h + 'h1x'
// }


// kieu du lieu x
// var x = new Date();
// var day = x.getDate();
// var month = x.getMonth() + 1;
// var year = x.getFullYear();
// document.write(day + "/////");
// document.write(month + "///////");
// document.write(year);
// console.log(year);

// function myfunction() {
//     var inh1utYear = document.getElementById('year');
//     if (inh1utYear.value > 2022) {
//         inh1utYear.style.borderColor = 'red';
//     } else {
//         inh1utYear.style.borderColor = 'green';

//     }
// }

// game xem ai diem cao hon
// var clear;
// var getValue = function() {
//     var number = document.getElementById('number').value;
//     number++;
//     if (number == 500) {
//         number = 0;
//     }
//     document.getElementById('number').value = number;
// }

// function start() {
//     clear = setInterval(getValue, 1)
// };

// // xoa bo cai interval
// function stoh1() {
//     clearInterval(clear);
//     var table = document.querySelector('.table');
//     var modal = document.querySelector('.modal');
//     var score = document.getElementById('number').value;
//     table.innerHTML = ` <h1>Điểm của bạn là ${score}</h1>`;
//     modal.style.dish1lay = 'block';
//     modal.onclick = function() {
//             modal.style.dish1lay = 'none';
//         }
//         // alert("Your score is: " + score);
//     document.getElementById('number').value = 0;
// }



// // anh tu thay doi
// var index = 1;
// setInterval(function changeImg() {
//     // truyen vao duong dan cua anh
//     var imgs = ["../img/anhslide1.jh1g", "../img/anhslide2.jh1g", "../img/anhslide3.jh1g"]
//     document.getElementById('img').src = imgs[index];
//     index++;
//     if (index == 3) {
//         index = 0;
//     }
// }, 2000);


// h1romise 

// new Promise(function(resolve, reject) {
//         readFileAsync('tailieu.txt', function(err, data) {
//             if (err) return reject(err)
//             else resolve(data);
//         })
//     })
//     // neeu thanh cong thi nhay vao .then that bai thi vao .catch 
//     .then(function(data) {

//     })
//     .catch(function(err) {

//     })

// var quotes = [{
//         quote: 'sang deh1 trai vcl',
//         author: 'sang'
//     },
//     {
//         quote: 'dong deh1 trai vcl',
//         author: 'dong'
//     },
//     {
//         quote: 'cao deh1 trai vcl',
//         author: 'cao'
//     },
//     {
//         quote: 'anh deh1 trai vcl',
//         author: 'anh'
//     },
//     {
//         quote: 'tu deh1 trai vcl',
//         author: 'tu'
//     }
// ]

// var btn = document.querySelector('button');
// var title = document.querySelector('.name');
// var des = document.querySelector('.des');

// function makeRandomNumber(range) {
//     return Math.floor(Math.random() * range);
// }

// function getQuote() {
//     return quotes[makeRandomNumber(quotes.length)];
// }

// btn.onclick = () => {
//     var quote = getQuote();
//     title.innerHTML = quote.quote;
//     des.innerHTML = quote.author;
// }


// lay du lieu nguoi dung
// var submit = document.getElementById('submit');
// submit.onclick = (e) => {
//     e.preventDefault();
//     var name1 = document.getElementById('name').value;
//     var age1 = document.getElementById('age').value;
//     var gender1 = document.getElementById('gender').value;
//     var re = document.getElementById('re');
//     re.innerHTML = '<p>Name ' + name1 + '</p>' + '<p>Age ' + age1 + '</p>' + '<p>Gender ' + gender1 + '</p>';
// }

// var btn = document.querySelector('.btn')
// var todo = document.querySelector('.todo ul');
// var todos = [];
// btn.onclick = (e) => {
//     e.preventDefault();
//     var input = document.querySelector('#input').value;
//     todos.push(input);
//     update();
//     document.querySelector('#input').value = '';
// }

// function update() {
//     todo.innerHTML = '';
//     for (var i = 0; i < todos.length; i++) {
//         todo.innerHTML += '<li onclick="Delete(' + i + ')">' + todos[i] + '</li>';
//     }
// }

// function Delete(index) {
//     todos.splice(index, 1);
//     update();
// }

// var sang = document.querySelector('#sang');
// console.log(sang);
// var tu = document.createElement('h2');
// tu.innerHTML = 'sang qua dep trai';
// tu.setAttribute('class', 'dep');
// sang.appendChild(tu);



// var user = [
//     { id: 1, name: "hai nam", gender: 1 },
//     { id: 2, name: "sang", gender: 2 },
//     { id: 3, name: "ddong", gender: 1 },
//     { id: 4, name: "cao", gender: 2 },
//     { id: 5, name: "tu", gender: 2 },
// ];
// var target = document.querySelector('#target');
// console.log(target);
// user.map((item) => {
//     var tagLI = document.createElement('li');
//     tagLI.setAttribute("class", "user_item");
//     tagLI.innerHTML = `${item.id} - ${item.name}- ${item.gender ===1 ?"Male" : "FeMale"}`;
//     target.appendChild(tagLI);
// })

// var datas = {
//     name: 'Khuat dinh sang',
//     age: 18,
//     address: 'Cam yen- thach that- ha noi',
//     subject: [
//         { id: 1, name: 'PHP', point: 10 },
//         { id: 2, name: 'Java', point: 2 },
//         { id: 3, name: 'Js', point: 7 },
//         { id: 4, name: 'HTML', point: 5.2 },
//     ]
// };
// var nameSt = document.querySelector('.name');
// var AgeSt = document.querySelector('.age');
// var addSt = document.querySelector('.adress');
// var subSt = document.querySelector('.subj');

// function render(data) {
//     nameSt.innerHTML = 'Full Name: ' + data.name;
//     AgeSt.innerHTML = 'Age: ' + data.age;
//     addSt.innerHTML = 'Address: ' + data.address;

//     var cc = data.subject.map((item) => {
//         return `<li class="list-item">${item.name} - ${item.point}</li>`;
//     });
//     subSt.innerHTML = cc.join('');
// }
// render(datas);
// var add = function() {
//     var SubIn = document.querySelector('#sub').value;
//     var PointIn = document.querySelector('#point').value;
//     datas.subject.push({
//         name: SubIn,
//         point: PointIn,
//     });
//     render(datas);
//     document.querySelector('#sub').value = '';
//     document.querySelector('#point').value = '';
// }
// btn.onclick = (e) => {
//     e.preventDefault();
//     add();
// }

// var elFirstPerson = document.querySelectorAll('.first');
// var elSecondPerson = document.querySelectorAll('.second');
// var elShow = document.querySelector('.show');
// var slForm = document.querySelector('form');


// var Person = {
//     name: 'Khuat dinh sang',
//     age: 18,
//     address: 'ha noi',
//     showProFile: function() {
//         var elRender = document.createElement('div');
//         elRender.innerHTML = `<hr> <ul>
//         <li>Name: ${this.name}</li>
//         <li>Age: ${this.age}</li>
//         <li>Address: ${this.address}</li>
//         </ul> </hr>`

//         elShow.appendChild(elRender);
//     }
// }

// function checkForm() {
//     let result = true;
//     elFirstPerson.forEach((item) => {
//         if (item.value == '') {
//             return false;
//         }
//     })
//     elSecondPerson.forEach((item) => {
//         if (item.value == '') {
//             return false;
//         }
//     })
//     return result;
// }

// slForm.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (checkForm()) {
//         let fName = elFirstPerson[0].value;
//         let fAge = elFirstPerson[1].value;
//         let fAdress = elFirstPerson[2].value;
//         let first = {
//             __proto__: Person
//         }

//         let sName = elSecondPerson[0].value;
//         let sAge = elSecondPerson[1].value;
//         let sAdress = elSecondPerson[2].value;
//         let second = {
//             __proto__: Person
//         }
//         first.showProFile();
//         second.showProFile();

//         elFirstPerson.forEach(item => {
//             item.value = '';
//         })
//         elSecondPerson.forEach(item => {
//             item.value = '';
//         })
//     } else {
//         alert('Please input value');
//     }
// })

// var p = new Person('Sang', 33, 'Ha noi');

// let user = [];
// let fname = document.getElementById('name');
// let btn = document.getElementById('btn');
// let show = document.getElementById('show');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     show.innerHTML = '';
//     if (fname.value != '') {
//         user.push(fname.value);
//         user = user.sort();
//         for (var i = 0; i < user.length; i++) {
//             show.innerHTML += `<li>${user[i]}</li>`;
//         }
//     }

//     fname.value = '';
// })



// CAll back
// function ThucDay(viectieptheo) {
//     console.log("b1.Đã ngủ dậy!");
//     viectieptheo();
// }

// function DanhRang(viectieptheo) {
//     console.log("b2. Đang đánh răng");
//     setTimeout(function() {
//         console.log("Đã đánh răng xong!");
//         viectieptheo();
//     }, 2000);
// }

// function ThayQuanAo(viectieptheo) {
//     console.log("b3. Đang thay quan ao"),
//         setTimeout(function() {
//             console.log("Đã thay quần áo xong!");
//             viectieptheo();
//         }, 3000);
// }

// function DiHoc(viectieptheo) {
//     viectieptheo();
// }


// ThucDay(function() {
//     DanhRang(function() {
//         ThayQuanAo(function() {
//             DiHoc(function() {
//                 console.log('Dang di chuyen');
//                 setTimeout(function() {
//                     console.log('Da den truong');
//                 }, 4000);
//             })
//         })
//     })
// })

// const thucDay = () => {
//     return new Promise((resolve, reject) => {
//         console.log('Da ngu day');
//         resolve();
//     })
// }

// const danhRang = () => {
//     return new Promise((resolve, reject) => {
//         console.log('Dang danh rang');
//         setTimeout(function() {
//             console.log('Da danh rang xong');
//             resolve();
//         }, 2000)
//     })
// }

// const thayQuanAo = () => {
//     return new Promise((resolve, reject) => {
//         console.log('dang thay quan ao')
//         setTimeout(function() {
//             console.log('Da thay quan ao xong')
//             resolve();
//         }, 3000)
//     })
// }

// const diHoc = () => {
//     return new Promise((resolve, reject) => {
//         console.log('Da di chuyen');
//         setTimeout(function() {
//             console.log('Da den truong')
//             resolve();
//         }, 3000);
//     })
// }
// thucDay()
//     .then(() => danhRang())
//     .then(() => thayQuanAo())
//     .then(() => diHoc())


// let output = ''
// const itemHtml = document.querySelector('.row');
// console.log(itemHtml);
// const url = 'https://reqres.in/api/users?page=1&per_page=10';
// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         data.data.forEach(item => {
//             renderHtml(data.data);
//         })
//     })
// const renderHtml = (products) => {
//     products.forEach(item => {
//         output += `<div class="card" style="width: 18rem;">
//         <img src="${item.avatar}" class="card-img-top" alt="...">

//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">First Name: ${item.first_name}</li>
//             <li class="list-group-item">Last Name: ${item.last_name}</li>
//             <li class="list-group-item">${item.email}</li>
//         </ul>
//         <div class="card-body">
//             <a href="#" class="card-link">Card link</a>
//             <a href="#" class="card-link">Another link</a>
//         </div>
//     </div>`
//     })
//     itemHtml.innerHTML = output;
// }

// const itemHtml = document.querySelector('.row');
// let output = '';
// const url = 'https://reqres.in/api/users?page=1&per_page=10';
// fetch(url)
//     .then((res) => {
//         return res.json()
//     })
//     .then(data => {
//         data.data.forEach((item) => {
//             renderHtml(data.data);
//         })
//     })

// const renderHtml = (product) => {
//     product.forEach((item) => {
//         output += `<div class="card" style="width: 18rem;">
//         <img src="${item.avatar}" class="card-img-top" alt="...">

//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">First Name : ${item.first_name}</li>
//             <li class="list-group-item">Last Name : ${item.last_name}</li>
//             <li class="list-group-item">${item.email} </li>
//         </ul>
//         <div class="card-body">
//             <a href="#" class="card-link">Card link</a>
//             <a href="#" class="card-link">Another link</a>
//         </div>
//     </div>`
//     })
//     itemHtml.innerHTML = output;
// }

// var box = document.querySelector('.box');
// setTimeout(() => {
//     box.style.backgroundColor = "red";
//     setTimeout(() => {
//         box.style.backgroundColor = "green";
//         setTimeout(() => {
//             box.style.backgroundColor = "yellow";
//             setTimeout(() => {
//                 box.style.backgroundColor = "black";
//                 setTimeout(() => {
//                     box.style.backgroundColor = "orange";
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// function getColor(color, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             box.style.backgroundColor = color;
//             resolve();
//         }, time)
//     })
// }

// getColor("red", 1000)
//     .then(() => {
//         getColor("green", 1000)
//     })
//     .then(() => {
//         getColor("yellow", 1000)
//     })
//     .then(() => {
//         getColor("orange", 1000)
//     })
//     .then(() => {
//         getColor("black", 1000)

//     })

// var h2 = document.querySelector("h2");

// function quaTrinhHoc(totalMark, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (totalMark >= 9) {
//                 resolve(totalMark);
//             } else {
//                 reject('khong du dieu kien');
//             }
//         }, time)
//     })
// }

// var diemTongKet = prompt("enter your mark");
// var time = prompt("Thoi dian delay");
// quaTrinhHoc(parseInt(diemTongKet), parseInt(time))
//     .then((mark) => {
//         h2.innerHTML = "Diem tong ket " + mark
//     })
//     .catch(err => {
//         h2.innerHTML = err
//     })


// var fullName = prompt("Enter your name");
// var object = prompt("Enter your subject")
// var tong = 0;
// var lab1 = 0;
// var lab2 = 0;
// var lab3 = 0;
// var lab4 = 0;
// var promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         lab1 = prompt("Enter lab1");
//         resolve();
//     }, 1000)
// })
// promise
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 prompt("Enter your lab2");
//                 resolve();
//             }, 2000)
//         })
//     })
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 prompt("Enter your lab3");
//                 resolve();
//             }, 3000)
//         })
//     })
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 prompt("Enter your lab4");
//                 resolve();
//             }, 4000)
//         })
//     })
//     .then(() => {
//         tong = lab1 * 0.1 + lab2 * 0.2 + lab3 * 0.3 + lab4 * 0.4;
//         alert(tong);
//     })


// var SUBlab1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             lab1 = prompt("enter your lab1");
//             return resolve();
//         }, 1000);
//     })
// }
// var SUBlab2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             lab2 = prompt("enter your lab2");
//             resolve();
//         }, 1000);
//     })
// }

// var SUBlab3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             lab3 = prompt("enter your lab3");
//             resolve();
//         }, 1000);
//     })
// }

// var SUBlab4 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             lab4 = prompt("enter your lab4");
//             resolve();
//         }, 1000);
//     })
// }
// var tong = () => {
//     tong = lab1 * 0.1 + lab2 * 0.2 + lab3 * 0.3 + lab4 * 0.4;
//     alert(tong);
// }
// SUBlab1()
//     .then(() => SUBlab2())
//     .then(() => SUBlab3())
//     .then(() => SUBlab4())
//     .then(() => tong())


// function inputScore(sub, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             var score = prompt("Enter your " + sub);
//             resolve(score);
//         }, time)
//     })
// }

// async function Sang() {
//     lab1 = await inputScore("Lab1", 1000);
//     lab2 = await inputScore("Lab2", 1000);
//     lab3 = await inputScore("Lab3", 1000);
//     lab4 = await inputScore("Lab4", 1000);
//     tong = lab1 * 0.1 + lab2 * 0.2 + lab3 * 0.3 + lab4 * 0.4;
//     alert(tong);
// }
// Sang()

var url = 'https://622b588614ccb950d2374872.mockapi.io/user';
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if (data.length > 0) {
            var content = '';
            var result = document.querySelector('tbody');
            result.innerHTML = '';
            data.forEach((item) => {
                content += `
                <tr id="row-${item.id}">
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>
                   <img src="${item.avatar}" width="70px" class="img img-avatar">
                    </td>
                    <td>${item.address}</td>
                    <td>
                        <a href="edit-hotel.html" id="${item.id}" class="btn btn-sm btn-primary "> Edit</a>
                        <button class="btn btn-sm btn-danger" onclick="remove(${item.id})"> Delete</button>

                    </td>
                </tr>
                `
            })
            result.innerHTML = content;
        }
    });

function remove(id) {
    var removeNode = document.querySelector('#row-' + id);
    removeNode.parentNode.removeChild(removeNode);
    var removeUrl = url + "/" + id;
    fetch(removeUrl, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })

};


// var valueInput = document.querySelector("#input");
// var city = document.querySelector("#city");
// var tem = document.querySelector("#temperature");
// var humid = document.querySelector("#humid");

// async function change(currentCity) {


//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=c5d10a8c5d6c8a02a00ec7f04881fc39`;
//     await fetch(url, {
//             medthod: "GET"
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             if (data.cod == 200) {
//                 city.innerHTML = data.name;
//                 tem.innerHTML = data.main.temp - 273.15;
//                 humid.innerHTML = data.main.humidity;
//             }
//         })
// }
// valueInput.addEventListener("keypress", (e) => {
//     if (e.code == 'Enter') {
//         let capital = valueInput.value.trim();
//         change(capital);
//     }
// })
// change('ha noi')

// conso.log(axios);