var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var city = $('#city-name');
let ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

city.onkeydown = function(event) {
        if (event.code === 'Enter') {
            var cityname = event.target.value.trim();
            var requestUrl = ApiUrl + cityname + "&appid=c5d10a8c5d6c8a02a00ec7f04881fc39";
            fetch(requestUrl, {
                    method: "GET",
                })
                .then(response => response.json())
                .then((data) => {
                    var infoWeather = $('#info-weather');
                    var html = '';
                    console.log(data);
                    var nhietdo1 = data.main.temp - 273;
                    html += `
                <h2>infomation of weather</h2>
        <h3>Name of city:${data.name} <span id="opCityName"></span>,id: ${data.id}<span id="opCountryName"></span>
        </h3>
        <p>Temparature: ${nhietdo1}<span id="opTemp"></span>C</p>
        <p>Do am: ${data.main.humidity}<span id="opHum"></span></p>
        <p>Weather:${data.weather[0].main} <span id="weather"></span></p>
                `
                    infoWeather.innerHTML = html;
                })
        }
    }
    //  axios
var apiUrl = 'https://622b588614ccb950d2374872.mockapi.io/user';
axios.get(apiUrl)
    .then(response => {
        if (response.statusText === 'OK') {
            console.log(response.data)
        }
    })

function validateInput() {
    let formElement = $('.form');
    let inputElement = $$('.form-input');
    let errorInput = $('error-message');
    for (var i = 0; i < inputElement.length; i++) {
        if (inputElement[i].value === '') {
            inputElement[i].parentElement.querySelector('.error-message').innerText = `May deo nhap gi 
            a thang kia ${inputElement[i].id}`;
        } else {
            inputElement[i].parentElement.querySelector('.error-message').innerText = '';
        }
    }
}

function resetInput() {
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
}

function add() {
    validateInput();
    let formElement = $('.form');
    let errorElement = formElement.querySelectorAll('.error-message');
    let arrayErrorElement = [];
    for (let i = 0; i < errorElement.length; i++) {
        arrayErrorElement.push(errorElement[i].innerText);
    }
    let checkErrorElement = arrayErrorElement.every((value) => {
        return value == '';
    })
    if (checkErrorElement) {
        let name = $('#name').value;
        let address = $('#address').value;
        let listStudent = localStorage.getItem('listStudent') ? JSON.parse(localStorage.getItem('listStudent')) : [];
        listStudent.push({
            name: name,
            address: address,
        })
        localStorage.setItem('listStudent', JSON.stringify(listStudent));
        renderStudent();
        resetInput();
    }
}

function renderStudent() {
    let listStudent = localStorage.getItem('listStudent') ? JSON.parse(localStorage.getItem('listStudent')) : [];
    let student = `
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Address</th>
    <th>Action</th>
</tr>
    `
    listStudent.map((value, index) => {
        student += `<tr>
        <td>${index+1}</td>
        <td>${value.name}</td>
        <td>${value.address}</td>
        <td>
        <button onclick="editStudent(${index})">Edit</button>
        <button onclick="deleteStudent(${index})">Delete</button>
    </tr>`
    });
    document.getElementById('tablecontent').innerHTML = student;
}

function editStudent(index) {
    let listStudent = localStorage.getItem('listStudent') ? JSON.parse(localStorage.getItem('listStudent')) : [];
    document.getElementById('name').value = listStudent[index].name;
    document.getElementById('address').value = listStudent[index].address;
    document.getElementById('index').value = index;
    document.getElementById('save').style.display = "none";
    document.getElementById('update').style.display = "inline-block";

}

function changeStudent() {
    let listStudent = localStorage.getItem('listStudent') ? JSON.parse(localStorage.getItem('listStudent')) : [];
    let index = document.getElementById('index').value;
    console.log(index);
    listStudent[index] = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
    }
    localStorage.setItem('listStudent', JSON.stringify(listStudent));
    renderStudent();
    document.getElementById('save').style.display = "inline-block";
    document.getElementById('update').style.display = "none";
    resetInput();
}

function deleteStudent(index) {
    let listStudent = localStorage.getItem('listStudent') ? JSON.parse(localStorage.getItem('listStudent')) : [];
    if (confirm("Are you sure?")) {
        listStudent.splice(index, 1);
    }
    localStorage.setItem('listStudent', JSON.stringify(listStudent));
    renderStudent();
}