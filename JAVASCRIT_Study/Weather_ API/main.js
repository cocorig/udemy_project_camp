'use strict'



const weatherbox =  document.getElementById('weather');
const API_KEY = '';


function getWeather(lat,lon){
    console.log(lat,lon);
   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(function(response){ //받아온 응답
       // console.log(response);
        return response.json(); // 응답의 json을 넘겨준다.
    }).then(function(json){ //받은 json.
        console.log(json);
        const temp = json.main.temp;
        const humidity = json.main.humidity;
        console.log(temp,humidity);
        weatherbox.innerText = `${temp}°C, ${humidity}%`;
    });

   
}



function handerGeoSuccess(pos){//성공힘수
    //console.log(pos)
    // console.log(pos.coords.latitude);
    // console.log(pos.coords.longitude);
    const latitude = pos.coords.latitude; //위도
    const longitude = pos.coords.longitude; //경도

    getWeather(latitude,longitude);
}

function handerGeoError(){//실패함수
    console.log('error')
}

function init(){         //(성공힘수,실패함수 )
    navigator.geolocation.getCurrentPosition(handerGeoSuccess,handerGeoError);
}


init();