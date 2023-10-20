// src/actions/weatherActions.js
import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const fetchForecastRequest = createAction('FETCH_FORECAST_REQUEST');
export const fetchForecastSuccess = createAction('FETCH_FORECAST_SUCCESS');
export const fetchForecastFailure = createAction('FETCH_FORECAST_FAILURE');

export const fetchForecastData = (city, apiKey,dispatch) => {
  

    dispatch(fetchForecastRequest());
    axios
      .get(`http://localhost:5000/products`)
      .then((response) => {
        dispatch(fetchForecastSuccess(response.data.list));
      })
      .catch((error) => {
        dispatch(fetchForecastFailure(error.message));
      });
  
};
//https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}