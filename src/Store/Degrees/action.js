import { GET_WEATHER } from './actionType'

export function getWeather(payload) {

    return {
        type: GET_WEATHER,
        payload
    }
}
