export const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "맑음",
    1: "대체로 맑음",
    2: "부분적으로 흐림",
    3: "흐림",
    45: "안개",
    48: "짙은 안개",
    51: "약한 이슬비",
    53: "보통 이슬비",
    55: "강한 이슬비",
    61: "약한 비",
    63: "보통 비",
    65: "강한 비",
    71: "약한 눈",
    73: "보통 눈",
    75: "강한 눈",
  };
  return weatherCodes[code] || "알 수 없음";
};

export const formatHourlyData = (weatherData) => {
  console.log("formatHourlyData received:", weatherData);

  if (!weatherData) return [];
  const { time: times, temperature_2m: temps, weathercode: codes } = weatherData.hourly;

 const result = times.map((t, i) => {
    const [date, hourPart] = t.split("T");
    return {
      date,
      time: `${parseInt(hourPart.slice(0, 2), 10)}시`,
      temperature: temps[i],
      weatherCode: codes[i],
    };
  });

  return result.slice(0, 24);
};

export const formatDailyData = (weatherData) => {
  // console.log("formatDailyData received:", weatherData);
  if (!weatherData ) return [];
  
  const {
    time: dates,
    temperature_2m_max: maxTemps,
    temperature_2m_min: minTemps,
    weather_code: codes
  } = weatherData.daily;

   const days = dates.map((d) => {
    const date = new Date(d);
    const month = date.getMonth() + 1;
    const dayNum = date.getDate();
    const weekday = date.toLocaleDateString("ko-KR", { weekday: "short" }); 
    return `${month}월 ${dayNum}일 (${weekday})`;
  });
  
  // console.log(weatherData.daily)
  // console.log(dates)
  return dates.map((d, i) => ({
    date: d,
    day: days[i],
    tempMax: maxTemps[i],
    tempMin: minTemps[i],
    weatherCode: codes[i],
  }));
};