const getWeatherData = (state = [], action) => {
  switch (action.type) {
    case 'GET_COMPLETE_WEATHER_DATA':
       {
         state= {
          ...state,
            completeWeatherData: action.data
        }
        break;
       }
    case 'SET_CURRENT_DETAILS':
      {
        state= {
         ...state,
         currentWeatherData: action.data
       }
       break;
      }
    default:
      break
  }
  return state;
}

export default getWeatherData
