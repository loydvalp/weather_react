import React from "react";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
//import WeatherTemperature from "./WeatherTemp";

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
                    Today|{" "}
                    <span>
                      <FormattedTime date={props.data.date} />{" "}
                    </span>
                    <br />
                    <span> {props.data.time} </span> <br />
                    <span className="tempNow">
                      <span>{props.data.Temperature}</span>
                      <a href="/">°C</a> |<a href="/">°F</a>
                    </span>
                    <br />
                    <span>{props.data.description}</span>
                    <br />
                    <br />
                    <br />
                    <span>{props.data.feels} </span> <br />
                    <span>{props.data.humidity} </span> <br />
                    <span>{props.data.wind} </span>
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
      <div className="row Forecast" id="forecast"></div>
    </div>
  );
}
