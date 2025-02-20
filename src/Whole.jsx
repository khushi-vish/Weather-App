import React, { useState } from "react";

import Search from "./Search";
import Weather from "./weather";

import "./Whole.css";

export default function Whole() {
  const [weatherInfo, setWeatherInfo] = useState({});

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div className="wrapper">
      <h2>Search for the Weather</h2>
      <Search updateInfo={updateInfo} />
      <Weather info={weatherInfo} />
    </div>
  );
}
