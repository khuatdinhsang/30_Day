var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body1 = document.querySelector('body');

async function changeWeatherUI(capitalValue) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&appid=c5d10a8c5d6c8a02a00ec7f04881fc39
    `
    let data = await fetch(apiURL).then(res => res.json())
    console.log(data);
    if (data.cod == 200) {
        content.classList.remove('hide');
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + "m";
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = Math.round((data.main.temp - 273.15));
        value.innerText = temp;
        console.log(temp);
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';
        time.innerText = new Date().toLocaleString();
        body1.setAttribute('class', 'hot');

        if (temp <= 15) {
            body1.setAttribute('class', 'warm');
        }
        if (temp <= 10) {
            body1.setAttribute('class', 'cool');
        }
        if (temp <= 6) {
            body1.setAttribute('class', 'cold');
        }
    } else {
        content.classList.add('hide');
    }
}

search.addEventListener('keypress', function(event) {
    if (event.code === 'Enter') {
        let capitalValue = search.value.trim();
        changeWeatherUI(capitalValue)
    }
})
changeWeatherUI('ha noi');