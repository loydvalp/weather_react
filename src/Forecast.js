import React, { useState } from "react";
import ShowForecast from "./ShowForecast";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
        <ShowForecast data={forecast.list[0]} />
        <ShowForecast data={forecast.list[1]} />
        <ShowForecast data={forecast.list[2]} />
        <ShowForecast data={forecast.list[3]} />
        <ShowForecast data={forecast.list[4]} />
        <ShowForecast data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "84bf783b0426ae0eabcc200e14cbdb41";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
