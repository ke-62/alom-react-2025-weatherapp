import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);
  return (
    <DailyForecastWrapper>
      {dailyData.map((item, index)=> (
        <DailyItem key = {index}>
          <div>{item.day}</div>
          <div>{getWeatherDescription(item.weatherCode)}</div>
           <div>{item.tempMin}° / {item.tempMax}°</div>
        </DailyItem>
      ))}
    </DailyForecastWrapper>
  );
};

export default DailyForecast;
