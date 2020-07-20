import React from "react";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="today">
        <div className="row">
          <div className="col-sm-6">
            <div className="todayWeather">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-map-pin" />
                    <span>{props.data.city}</span>
                  </h5>
                  <p className="card-text">
                    Today <FormattedTime date={props.data.date} /> <br />
                    <WeatherTemperature celsius={props.data.temperature} />
                    <br />
                    {props.data.description}
                    <br />
                    <br />
                    <br />
                    Feels like {props.data.feels}ºC
                    <br />
                    Humidity: {props.data.humidity}%<br />
                    Wind: {props.data.wind} m/s
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <span className="weatherIcon">
              <WeatherIcon code={props.data.icon} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
