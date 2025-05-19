import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";


const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const temperature = weatherData?.hourly?.temperature_2m?.[0];
  const weathercode = weatherData?.hourly?.weathercode?.[0];

  return (
    <CurrentWeatherWrapper>
      <Temperature>{temperature !== undefined ? `${Math.round(temperature)}°C` : "기온 없음"}</Temperature>
      <WeatherCode>{getWeatherDescription(weathercode)}</WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;
