import React from "react";
import WeatherPic from "./image/WeatherPic.png";

function WeatherImage() {
  return (
    <div className="WeatherIcon">
      <img src={WeatherPic} alt="Weather" width={275} />
    </div>
  );
}

export default WeatherImage;
