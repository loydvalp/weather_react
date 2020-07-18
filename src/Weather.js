import React, { useState } from "react";
//import WeatherInfo from "./WeatherInfo";
//import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      //date:
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feels: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
         });
      }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function searchCity(event) {
    const apiKey = "84bf783b0426ae0eabcc200e14cbdb41";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
  }

  if (weatherData.ready) {
  return (
    <div className="Weather">
      <h1>How's the Weather?</h1>
      <div className="search">
        <div className="row">
          <div className="col">
            <form>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search City..."
                />
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="fas fa-search" />
                  </button>
                  <button className="btn btn-default">
                    <i className="fas fa-location-arrow" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="today">
        <div className="row">
          <div className="col-sm-6">
            <div className="todayWeather">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-map-pin" />
                    <span>{weatherData.city}</span>
                  </h5>
                  <p className="card-text">
                    Today| <span>{weatherData.date} </span>
                    <br />
                    <span> {weatherData.time} </span> <br />
                    <span className="tempNow">
                      <span>{weatherData.Temperature}</span>
                      <a href="/">°C</a> |<a href="/">°F</a>
                    </span>
                    <br />
                    <span>{weatherData.description}</span>
                    <br />
                    <br />
                    <br />
                    <span>{weatherData.feels} </span> <br />
                    <span>{weatherData.humidity} </span> <br />
                    <span>{weatherData.wind} </span>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 10 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <span className="weatherIcon">
              <img src={weatherData.imgUrl} className="card-img-top" alt="" />
            </span>
          </div>
        </div>
      </div>

      <div className="row Forecast" id="forecast">
    </div>
    );
  } else{
    search();
    return "Loading...";
   }
 }