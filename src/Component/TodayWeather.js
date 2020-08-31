import React,{useState, useEffect} from 'react'
import Button from './Button';
import styles from './TodayWeather.css';
export default function TodayWeather(props) {
    const [forecastData,setForecastData] = useState({});
   
    const nextFiveDaysWeather=()=>{
        
        return (
            <div>
                {showWeatherDetails()}
                <ul className="forecastDates">
                    {props.forecast &&
                        props.forecast.map((item,key)=>(
                                <li key={`${item.Date}-${key}`} onClick={()=>showWeatherOnSelectedDate(item.Date)}>
                                        <i class="fa fa-2x fa-circle"></i>
                                        <span className="fontWhite">{getDay(item.Date)}</span>
                                </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
    const showWeatherDetails=()=>{
        return (
            <div className="displayWeatherDetails">
                    <p className="selectedPlace">{forecastData.place}</p>
                    <div>
                        <p className="forecastTemperature">
                            {
                                forecastData.temperature >60 ? (<i class="fa fa-2x fa-sun"></i>) : (<i class="fa fa-2x fa-cloud-sun"></i>)
                            }
                            {forecastData.temperature}
                        </p>
                        <p className="forecastFeels"><i class="fa fa-2x fa-thermometer"></i> {forecastData.feels}</p>
                    </div>
                    <p className="forecastTime"><i class="fa fa-2x fa-clock"></i>{forecastData.time}</p>
                </div>
        );
    }
    function getDay(dateStamp){
        const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const date = new Date(dateStamp);
        const day = date.getDay();
        return days[day];
      }
    function getByDate(date){
        return props.forecast.filter(function (el) {
          return el.Date === date;
        });
      }
    const showWeatherOnSelectedDate=(selectedDate)=>{
        const getDetails = getByDate(selectedDate);
        const selectedData = {
            place: props.city,
            date: getDetails[0].Date,
            time: getDetails[0].Time,
            temperature: getDetails[0].temprature,
            feels: getDetails[0].feels,
        }
        setForecastData(selectedData);
    }
    useEffect(() => {
        const selectedData = {
            place: props.city,
            date: props.currentDate,
            time: props.time,
            temperature: props.forecast && props.forecast[0] && props.forecast[0].temprature,
            feels: props.forecast && props.forecast[0] && props.forecast[0].feels,
        }
        setForecastData(selectedData);
    }, []);
    return (
        <div className="todayWeatherReport">
            {props.city &&
                <div className="showAllDetails">{nextFiveDaysWeather()}</div>
            }
        </div>
    )
}
