import React, { useState, useEffect } from "react";

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

  return <div></div>;
}

export default App;
