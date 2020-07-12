import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Houston",
    date: "Friday -07/03",
    time: "12:00",
    Temperature: "32",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    gitUrl: "https://github.com/loydvalp/My_Weather_App_Project.git",
    feels: "Feels like 36ºC",
    humidity: "Humidity: 58% ",
    wind: "Wind: 2 m/s",
  };
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
      <div className="row weather-forecast" id="forecast" />
      <div className="author">
        <p>
          <small>
            <a href="https://github.com/loydvalp/weather_react.git">
              Open Source Coding
            </a>
            <strong>by Valencia Loyd</strong>
          </small>
        </p>
      </div>
    </div>
  );
}
