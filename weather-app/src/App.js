import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faTemperatureThreeQuarters,
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
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

  // Event
  const weatherInput = (e) => {
    setInput(e.target.value);
  };

  const searchWeather = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  };

  return (
    <div className="">
      {weather && (
        <div className="container">
          {/* form */}
          <div className="intro">
            <input
              onChange={weatherInput}
              type="text"
              placeholder="Enter a city name"
            />
            <button onClick={searchWeather}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          {/* Weather Info */}
          <div className="weather-info">
            <img src={weather.current.condition.icon} alt="weather icon" />
            <h1>
              {weather.current.temp_c}
              <span>°C</span>{" "}
            </h1>
            <h3>{weather.current.condition.text}</h3>
            <h3 className="location">
              {/* <FontAwesomeIcon icon={faLocationDot} /> */}
              {weather.location.name}, {weather.location.country}
            </h3>
            <div className="wrapper">
              <div className="aside first">
                <FontAwesomeIcon
                  icon={faTemperatureThreeQuarters}
                  className="icon"
                />
                <div className="aside-info">
                  <h3>{weather.current.temp_c}°C</h3>
                  <p>Feels like</p>
                </div>
              </div>

              <div className="aside second">
                <FontAwesomeIcon icon={faDroplet} className="icon" />
                <div className="aside-info">
                  <h3>{weather.current.humidity}%</h3>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
