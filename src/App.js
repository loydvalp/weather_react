import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>

      <footer>
        This project was coded by{" "}
        <a href="https://github.com/loydvalp/weather_react.git" target="_blank">
          Valencia Loyd{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
