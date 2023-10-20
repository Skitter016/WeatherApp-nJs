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
  /* Your styling code here */
`;
