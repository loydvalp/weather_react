import React from "react";
import FormattedTime from "./FormattedTime";
import WeatherTemperature from "./WeatherTemperature";
import WeatherImage from "./WeatherImage";

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
                    {props.data.city}
                  </h5>
                  <p className="card-text">
                    Today <FormattedTime date={props.data.date} />
                    <WeatherTemperature celsius={props.data.temperature} />
                    <div className="text-capitalize">
                      {props.data.description}
                    </div>
                    <br />
                    <br />
                    <br />
                    Feels like {props.data.feels} ºC
                    <br />
                    Humidity: {props.data.humidity} %<br />
                    Wind: {props.data.wind} m/s
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <WeatherImage />
          </div>
        </div>
      </div>
    </div>
  );
}
