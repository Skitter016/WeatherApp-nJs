import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import backgroundImage from '../assert/forest-sunrise-fog-5472x2834-10240.jpg';

function Forecast({ className }) {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setForecastData(response.data);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchForecastData();
  }, []);

  const getNextDayForecast = () => {
    // Modify the logic according to your new data structure
    const currentDate = new Date();
    const nextDayDate = new Date();
    nextDayDate.setDate(currentDate.getDate() + 1);

    const nextDayForecast = forecastData.filter(item => item.name === 'London'); // Filter data based on your chosen city

    return nextDayForecast;
  };

  const nextDayForecast = getNextDayForecast();

  return (
    <div className={className}>
      <div className='topic'>
        <h1>Next Day's Weather Forecast</h1>
      </div>
      <div className='playground-card'>
        {nextDayForecast.map((forecast, index) => (
          <div key={index} className='weather-card'>
            <h2>City: {forecast.name}</h2>
            <p>Temperature: {forecast.temp}</p>
            <p>Weather: {forecast.weather}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Forecast.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Forecast)`


  display: flex;
  flex-direction: column;
  align-items: center;
 
  height: 100vh;
  background-color: #f0f0f0;
  background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;


input {
  padding: 5px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  
}

button:hover {
  background-color: #0056b8;
}

.playground-card {
  margin-top: 100px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

.topic {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2px;
  color: white;
  font-size: 42px;
  -webkit-text-stroke: 3px black;
}

.weather-card {
  width: 300px;
  margin: 5px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.weather-card:hover {
  transform: translateY(-5px);
}

h2 {
  margin: 0;
}

p {
  margin: 5px 0;
}

button {
  padding: 6px 12px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #c82333;
}
`;

