import React, { useState } from 'react';
import { fetchWeather } from './weather-api/fetchWeather';
import { useDispatch, useSelector } from 'react-redux';
import { setWeather } from './weather-store/actions';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const history = useHistory();
    const [query, setQuery] = useState('');

    const search = async (e) => {
        console.log(query);
        let data = '';
        try {
            data = await fetchWeather(query);
        } catch (err) {
            console.log(err);
            alert(err);
        }
        if (!!data) {
            dispatch(setWeather(data));
            console.log(selector);
            history.push('/home');
        }
    };

    return (
        <div>
            <input
                type="text"
                className="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={search}>Search</button>
        </div>
    );
};

export default Home;
