import {GET_WEATHER} from "./actionType";


const initialState = {
    degree: [],
}
export  const getWeatherReducer = ( state = initialState, action) => {

    switch (action.type){
        case GET_WEATHER:
            return{
                ...state,
                degree: {...action.payload}
            }
        default:
            return  state;
    }
}

export default getWeatherReducer
