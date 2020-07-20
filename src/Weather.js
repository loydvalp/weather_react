import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feels: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
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

  function retrieveLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiKey = "84bf783b0426ae0eabcc200e14cbdb41";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function CurrentCity(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(retrieveLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>How's the Weather?</h1>
        <div className="search">
          <div className="row">
            <div className="col">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCity}
                    placeholder="Search City..."
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button className="btn btn-default" onClick={CurrentCity}>
                      <i className="fas fa-location-arrow" />
                    </button>
                  </div>
                </div>
              </form>
              <WeatherInfo data={weatherData} />
              <h3>Hourly Forecast</h3>
              <Forecast city={weatherData.city} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
