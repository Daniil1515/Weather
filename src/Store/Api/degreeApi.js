import {getWeather} from "../Degrees/action";


export const fetchWeather = () => {
    return function (dispatch) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Zaporizhzhia&appid=7a9dc32ef1f28a090c31c81264563dac')
            .then(response => response.json())
            .then(json => dispatch(getWeather(json)))
    }
}
