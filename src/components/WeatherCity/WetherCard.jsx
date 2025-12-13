import axios from 'axios';
import React from 'react';


const WetherCard = ({cityWeather}) => {
    return (
      <div className="weather-card">
        <div className="weather-info">
          <h2>
            {cityWeather.name} - {cityWeather.sys.country}
          </h2>
          <p>Temperature: {(cityWeather.main.temp - 273.15).toFixed(2)} °C</p>
          <p>Weather: {cityWeather.weather[0].description}</p>
          <p>Humidity: {cityWeather.main.humidity} %</p>
          <p>Wind Speed: {cityWeather.wind.speed} m/s</p>
        </div>
        <div className="weather-icon">
          <img
            src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`}
            alt={cityWeather.weather[0].description}
          />
        </div>
      </div>
    );
}

export default WetherCard;
