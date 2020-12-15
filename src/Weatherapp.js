import React from "react";
import "./Weatherapp.css";
export default function Weatherapp() {
  let Data = {
    city: "Vancouver",
    day: "Monday",
    temperature: 15,
    time: "22:00",
    description: "Cloudy",
    humidity: 10,
    wind: 80
  };
  return (
    <div className="container">
      <div className="weather-app-container">
        <div className="weather-app">
          <form id="search-form" class="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-primary w-100"
                  id="boton-buscar"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1 id="city">{Data.city}</h1>
            <h3 id="dia-actual">{Data.day}</h3>
            <h3 id="hora-actual">{Data.time}</h3>
          </div>
          <div className="Temperatura">
            <div className="clearfix weather-temperature">
              <div className="float-none">
                <strong id="temperature">{Data.temperature}</strong>
                <span class="units">
                  <a href="#" id="celsius-link" class="active">
                    °C
                  </a>{" "}
                  |
                  <a href="#" id="fahrenheit-link">
                    °F
                  </a>
                </span>
                <h3 id="description">{Data.description}</h3>
              </div>
            </div>
          </div>
          <div className="row" id="temperatura-complemento">
            <div className="col-2"></div>
            <div className="col-2"></div>

            <div className="col-2" id="humidity-now">
              {Data.humidity} <br></br>
              <span id="humidity"></span>%
            </div>
            <div className="col-2" id="wind-now">
              {" "}
              {Data.wind}
              <br></br>
              <span id="wind"></span> km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
