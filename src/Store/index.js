import getWeatherReducer from "./Degrees/reducer";
import {  applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'


const rootReducer = combineReducers({
    weather: getWeatherReducer
})
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
