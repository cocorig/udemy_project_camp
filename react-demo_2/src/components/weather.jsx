import React, { useEffect, useState } from "react";




function Weather(){

    const [weather, setweather] =useState('');
    const APl_KEY =  '6473192dc6be925d8c90feb1e113984c';

    const getWeather = (lat, lon)=>{
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APl_KEY}`
        ).then((response)=> response.json())
        .then((json)=>{
            const temp = json.main.temp;
            const place = json.name;
            setweather(`${temp} @ ${place}`);
        })
    };


    const hendleGeoSuccess = (position)=>{
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeather(lat, lon);
    }
    const hendleGoeError=()=>{
        console.log('Error');
    }
    useEffect(()=>{
        aksForCoords();
    },[]); //한번밖에 실행안할꺼야
    const aksForCoords =()=>{
        navigator.geolocation.getCurrentPosition(hendleGeoSuccess,hendleGoeError); 
    }


    return (
        <div className="weather">
            {weather && <p>{weather}</p>}
        </div>
    )
}





export default Weather;