import axios from 'axios';

const URL = 'https://jenis-weather-api.herokuapp.com/weather';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            location: query,
        },
    });

    return data;
};
