import React, { useState, useEffect } from "react";
import axios from "axios";
import { LocationOnOutlined } from "@material-ui/icons";

const ACCESS_KEY = process.env.REACT_APP_API_KEY;

const Weather = ({ capital }) => {
  const [Temp, setTemp] = useState([]);
  const [icon, setIcon] = useState("");
  const [wind, setWind] = useState("");
  const [windDir, setWindDir] = useState("");

  const params = {
    access_key: ACCESS_KEY,
    query: { capital },
  };

  useEffect(() => {
    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        setTemp(response.data.current.temperature);
        setIcon(response.data.current.weather_icons);
        setWind(response.data.current.wind_speed);
        setWindDir(response.data.current.wind_dir);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div class="weather-side">

    <div class="weather-gradient">

    <div class="date-container" >
      
      <h2 class="date-dayname">Weather</h2>
     
      <span class="location">  <LocationOnOutlined fontSize="small"/> {capital}</span>
      </div>

      <div class="weather-container">

      <img class="weather-icon" src={icon} />
      <h1 class="weather-temp">
         {Temp}°C
      </h1>
      

      
      <p class="weather-desc">
        <b>Wind:</b> {wind} mph direction {windDir}
      </p>
      </div>
      
      
      </div>
      </div>
  );
};

export default Weather;
