

const API_KEY = 'c3899ac4bfba8230574efbd857645643'
function onGeoOk(position){ 
    const lat = position.coords.latitude; 
    const lng = position.coords.longitude;
    console.log(lat, lng);
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(api)
    .then((res) => res.json()) //promise 타입의 함수를 받는 함수? 라고 함..! fetch 라는 함수는 =>js 가 대신 url를 호출해줌 
    .then((data) => { 
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText = ata.weather[0].main; 
        city.innerText = data.name; 
    })
}

function onGeoError(){ 
    alert("can t find you. no weather for you"); 
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);