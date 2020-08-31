import mockData from '../MockData/WeatherData.json';
import {GET_COMPLETE_WEATHER_DATA, SET_CURRENT_DETAILS } from './ActionTypes';

export const fetchData = (enteredCity) => dispatch => {
  dispatch(getCompleteWeatherData(mockData && mockData.States));
  let isEnteredCityFound = false;
  Object.entries(mockData.States).map((state,stateKey)=>{
    state[1].cities.map((cityDetails,key)=>{
      if(cityDetails.name.toUpperCase() === enteredCity.toUpperCase()) {
        const data ={
          currentdate: state[1].currentdate,
          time: state[1].time,
          city: enteredCity,
          forecast: cityDetails.forecast
        }
        isEnteredCityFound = true;
        dispatch(setCurrentData(data));
      }
    })
  })
  if(!isEnteredCityFound){
    dispatch(setCurrentData(''));
  }
}
  
const getCompleteWeatherData = data => ({
  type: GET_COMPLETE_WEATHER_DATA,
  data:data
}) 


const setCurrentData = data => ({
  type: SET_CURRENT_DETAILS,
  data:data
})