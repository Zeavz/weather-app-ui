import { combineReducers } from 'redux';
import { SET_WEATHER_DATA } from './actions';

const initialState = {
    name: undefined,
    country: undefined,
    temperature: undefined,
    weatherIcon: undefined,
    weatherDescription: undefined,
};

function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return action.data;
        default:
            return state;
    }
}

const weatherApp = combineReducers({ weatherReducer });
export default weatherApp;
