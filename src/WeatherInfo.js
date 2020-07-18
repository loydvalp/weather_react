import React from "react";
import FormattedDate from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemp";

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
                    {WeatherIcon}
                </span>
            </div>
        </div>
    </div>