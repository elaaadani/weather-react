import React from "react";
import axios from "axios";

export default function Weather(){

    function ResponseTemp (response){
        alert(`The weather in Santiago is ${response.data.main.temp}°C`)
    }
    let apiKey = "a4bdb9d9d153eeae6046500ced913295";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

    axios.get(url).then(ResponseTemp);
    return <h2> Hello from weather</h2>
}