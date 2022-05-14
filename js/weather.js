const weather = {}
const API_KEY = "your api key";//openweathermap.org에서 발급

const weatherCoinainer = document.getElementById("weather");
const weatherName = document.querySelector("#weather span:first-child");
const weatherWeather = document.querySelector("#weather span:last-child");
const p = document.querySelector("#weather p");

let bFetch = true;
function onFetching(){
    if(!bFetch){ p.innerText = ""; }
    else{ p.innerText = "날씨 정보를 불러오는중입니다."; }
}

function onGeoOk(pos){
    //성공하면 위치를 준다.
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=matrix`;
    fetch(url)
    .then(response => {
        bFetch = true;
        onFetching();
        return response.json()
    }) //서버의 응답을 기다린다.
    .then(data => { //데이터를 가져온다.
        bFetch = false;
        onFetching();
        const name = data.name;
        const weather = data.weather[0].main;
        document.querySelector("#weather span").innerText = `${name} ${weather}`;
    });
}

function onGeoError(){
    p.innerText = "위치를 불러올 수 없습니다.";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);//첫번째 인자로 모든 것이 잘 되었을때의 함수를, 두번째 인자에는 에러가 발생했을때의 함수를
