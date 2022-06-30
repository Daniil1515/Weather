import React, {useEffect} from 'react';
import './weatherStyle.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchWeather} from "../../Store/Api/AppApi";
import moment from 'moment';



const WeatherCard = () => {

    const dispatch = useDispatch()


    const degree = useSelector(state=>state.weather.degree.main?.temp)
    const feelsLike = useSelector(state=>state.weather.degree.main?.feels_like)
    const city = useSelector(state=>state.weather.degree?.name)
    // const clouds = useSelector(state=>state.weather.degree?.weather[0])

    const wind = useSelector(state=>state.weather.degree.wind?.speed)
    const humidity = useSelector(state=>state.weather.degree.main?.humidity)
    // const icon = useSelector(state=>state.weather.degree.weather[0].icon)
    const pressure = useSelector(state=>state.weather.degree.main?.pressure)





    useEffect(()=>{
      dispatch(fetchWeather())
    },[ ])

    return (


        <div className="card">

            <h2>{city}</h2>
            <div className="date__time">
            <p>Day: {moment().format('dddd')}</p>
            <p>Date: {moment().format('LL')}</p>
            </div>
            <h1>{degree}°C</h1>
            <div className="sky">
                <div className="sun"></div>
                <div className="cloud">
                    <img
                        // src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt=""
                    />
                </div>
            </div>
            <ul className="list">
                <li>
                    <b>Clouds</b>
                </li>
                <li>
                    <b>Feels like = </b>{feelsLike}
                </li>
                <li>
                    <b>Pressure = </b>{pressure}
                </li>
                <li>
                    <b>Humidity = </b>{humidity} %
                </li>
                <li>
                    <b>Wind = </b>{wind} km/h
                </li>

            </ul>


        </div>
    );
};

export default WeatherCard;
