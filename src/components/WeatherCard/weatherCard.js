import React, {useEffect} from 'react';
import './weatherStyle.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchWeather} from "../../Store/Api/degreeApi";


const WeatherCard = () => {

    const dispatch = useDispatch()

    const degree = useSelector(state=>state.weather.degree.main?.temp)


    useEffect(()=>{
      dispatch(fetchWeather())
    },[])

    return (


        <div className="card">

            <h2>Brussels</h2>
            <h3>Cloudy<span>Wind 10km/h <span className="dot">•</span> Precip 0%</span></h3>
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
