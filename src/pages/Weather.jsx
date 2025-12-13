import React from 'react';
import { useState } from 'react';
import WeatherInput from '../components/WeatherCity/WeatherInput';
import WeatherCard from '../components/WeatherCity/WetherCard';
import { useLoaderData } from 'react-router';


const Weather = () => {

    const cityWeather = useLoaderData();

    return (
      <div className='weather-container'>
        <WeatherInput />
        {cityWeather && <WeatherCard cityWeather={cityWeather} />}
      </div>
    );
}

export default Weather;
