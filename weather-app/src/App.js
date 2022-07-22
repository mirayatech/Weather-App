import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faTemperatureThreeQuarters,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [weather, setWeather] = useState(null);
  // const [input, setInput] = useState("");

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=Stockholm&aqi=no
      `
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(weather);
      });
  }, []);

  return (
    <div className="App">
      {weather && (
        <div className="weather-info">
          <div className="header">
            <h1>Weather App</h1>
          </div>
          <img src={weather.current.condition.icon} alt="weather icon" />
          <h1>{weather.current.temp_c}°C</h1>
          <h3>{weather.current.condition.text}</h3>
          <h1>
            {weather.location.name}, {weather.location.country}
          </h1>
          <div className="wrapper">
            <div className="aside">
              <FontAwesomeIcon
                icon={faTemperatureThreeQuarters}
                className="temprature-icon"
              />
              <div className="aside info">
                <h3>{weather.current.temp_c}°C</h3>
                <h3>Feels like</h3>
              </div>
            </div>

            <div className="aside">
              <FontAwesomeIcon icon={faDroplet} className="humidity-icon" />
              <div className="aside info">
                <h3>{weather.current.humidity}%</h3>
                <h3>Humidity</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
