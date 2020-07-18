import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Houston" />
      </div>

      <footer>
        This project was coded by Valencia Loyd and is{" "}
        <a href="https://github.com/loydvalp/weather_react.git" target="_blank">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://stoic-hermann-b0a640.netlify.app/" target="_blank">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
