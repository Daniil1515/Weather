import React, {useEffect} from 'react';
import './weatherStyle.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchWeather} from "../../Store/Api/AppApi";


const WeatherCard = () => {

    const dispatch = useDispatch()


    const degree = useSelector(state=>state.weather.degree.main?.temp)
    const city = useSelector(state=>state.weather.degree?.name)
    // const clouds = useSelector(state=>state.weather.degree.weather[0]?.main)

    const wind = useSelector(state=>state.weather.degree.wind?.speed)
    const humidity = useSelector(state=>state.weather.degree.main?.humidity)





    useEffect(()=>{
      dispatch(fetchWeather())
    },[ ])

    return (


        <div className="card">

            <h2>{city}</h2>
            <h3>1<span>Wind {wind} km/h <span className="dot">---</span>Humidity {humidity}%</span></h3>
            <h1>{degree}</h1>
            <div className="sky">
                <div className="sun"></div>
                <div className="cloud">
                    <div className="circle-small"></div>
                    <div className="circle-tall"></div>
                    <div className="circle-medium"></div>
                </div>
            </div>
            <table>
                <tr>
                    <td>TUE</td>
                    <td>WED</td>
                    <td>THU</td>
                    <td>FRI</td>
                    <td>SAT</td>
                </tr>
                <tr>
                    <td>30°</td>
                    <td>34°</td>
                    <td>36°</td>
                    <td>34°</td>
                    <td>37°</td>
                </tr>
                <tr>
                    <td>17°</td>
                    <td>22°</td>
                    <td>19°</td>
                    <td>23°</td>
                    <td>19°</td>
                </tr>
            </table>
        </div>
    );
};

export default WeatherCard;
