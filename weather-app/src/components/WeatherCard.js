// src/components/WeatherCard.js
import React, { useState, useEffect } from 'react';

function WeatherCard() {
  const [weatherData, setWeatherData] = useState([]);
  const apiUrl = 'http://localhost:5000/products'; 

  useEffect(() => {
    fetch(apiUrl) 
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error));
  }, []);

  return (
    <div>
      <h1>ข้อมูลอากาศ</h1>
      <ul>
        {weatherData.map((city) => (
          <p key={city.id}>
            {city.name}, {city.country}
            <ul>
              <p>อุณหภูมิ: {city.temp}</p>
              <p>สภาพอากาศ: {city.weather}</p>
              <p>ความชื้น: {city.humidity}</p>
              <p>ความดัน: {city.pressure}</p>
              <p>ความเร็วลม: {city.speed}</p>
            </ul>
          </p>
        ))}
      </ul>
    </div>
  );
}

export default WeatherCard;
