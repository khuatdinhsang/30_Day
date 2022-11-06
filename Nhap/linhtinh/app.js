//  var xinSDT = (callback) => {
//      let sdt
//      console.log('cho t so dien thoai ban may');
//      console.log('doi t 1 chut');
//      setTimeout(function() {
//          sdt = 12244;
//          console.log('day roi');
//          callback(sdt, goichoNam);
//      }, 1000);
//  }

//  //  var sdtdn = (sodienthoaidanhan) => {
//  //      console.log(`Day la so dien thoai : ${sodienthoaidanhan}`);
//  //  }
//  //  xinSDT(sdtdn);

//  var sacpin = (sdt, hamgoilaisaukhisacpin) => {
//      console.log('Doi ti sac pin da');

//      setTimeout(() => {
//          console.log('Sac pin xong, bat dau goi cho Nam');
//          hamgoilaisaukhisacpin(sdt);
//      }, 2000);
//  }
//  var goichoNam = (sdt) => {
//      console.log(`DAng goi vao so ${sdt} `);
//  }
//  xinSDT(sacpin);



// var sodienthoai1 = (sodienthoai) => {
//     let sdt;
//     console.log('cho t so dien thoai ban may');
//     console.log('doi t 1 chut')

//     setTimeout(() => {
//         sdt = 1000000;
//         console.log('day roi');
//         sodienthoai(sdt, dangsacpin);
//     }, 1000)
// }
// var sacpin = (sdt, dangsacpin111) => {
//     console.log('Doi ti sac pin da');
//     setTimeout(() => {
//         console.log('Sac pin xong bat dau goi cho Nam')
//         dangsacpin111(sdt);
//     }, 2000)
// }
// var dangsacpin = (sdt) => {
//     console.log(`Dang goi cho Nam vao so dien thoai: ${sdt}`);
// }

// sodienthoai1(sacpin);


// var xinSDT = () => {
//     console.log('Goi dien cho thang ban. Cho t xin ssdt');
//     console.log('Dang tim');

//     const thaotactimkiem = new Promise((resolve, reject) => {
//         let daTimThay
//         setTimeout((soDt, messege) => {
//             daTimThay = true;
//             if (daTimThay) {
//                 soDT = 123456;
//                 console.log(`day roi, so dt nos la ${soDT}`);
//                 resolve(soDT);
//             } else {
//                 reject('t k co so no');
//             }
//         }, 1000)
//     })

//     return thaotactimkiem;
// }

// xinSDT()
//     .then(soDT => {
//         console.log(`DA xin dc so dien: ${soDT}`);
//     })

// .catch(messege => {
//     console.log(messege);
// })

// const sacPin = (soDT) => {
//     console.log('Doi ti sac pin da');
//     let chayPin
//     const thaoTacSacPin = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             chayPin = true;
//             if (!chayPin) {
//                 console.log('Sac pin day, bat day goi');
//                 resolve(soDT);
//             } else {
//                 reject('chay pin roi k goi dc');
//             }
//         }, 1500)
//     })
//     return thaoTacSacPin
// }
// const goichoNam = (soDT) => {
//     console.log(`dang noi chuyen ${soDT}`);
// }
// xinSDT()
//     .then((soDT) => {
//         sacPin(soDT)
//             .then((soDT) => {
//                 goichoNam(soDT);
//             })
//             .catch((sai) => {
//                 console.log(sai);
//             })
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// var fs = require("fs");

// console.log(1);
// fs.readFile('./text.txt', function(err, data) {
//     console.log(data);
// })

// console.log(3);

// let add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a != "number" || typeof b != "number") {
//                 return reject(('Tham so truyen vao kieu number'));

//             }
//             resolve(a + b);
//         }, 2000)
//     })
// }
// add(4, 5)
//     .then((sum) => {
//         console.log('Sum la :', sum);
//         add(sum, 6).then(sum2 => {
//             console.log(sum2)
//         })

//     })
//     .catch((err) => {
//         console.log(err);
//     })



// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         var htmls = data.map(function(data1) {
//             return `<li>
//             <h2> ${data1.id}</h2>
//             <p> ${data1.title}</p>
//             </li>`;
//         });
//         var html = htmls.join('');
//         document.getElementById('jav').innerHTML = html;
//     })

// var courseAPi = 'http://localhost:3000/courses';
// fetch(courseAPi)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })


var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourse(function(courses) {
        renderCourse(courses);
    });
    handleCreateForm();
}

start();

function getCourse(callback) {
    fetch(courseApi)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}

function CreateCourse(data, callback) {

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then((response) => {
            return response.json();
        })
        .then(callback)
}

function deleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(courseApi + '/' + id, options)
        .then((response) => {
            return response.json();
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);

            if (courseItem) {
                courseItem.remove();
            }
        })
}

function renderCourse(courses) {
    var listCourseBlock = document.querySelector('#list-courses');
    var html = courses.map((course) => {
        return `<li class="course-item-${course.id}">
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick="deleteCourse(${course.id})">Xoas</button>  
        </li>`
    })
    listCourseBlock.innerHTML = html.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = () => {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            description: description
        }
        CreateCourse(formData, function() {
            getCourse(function(courses) {
                renderCourse(courses);
            });
        })
    }
}