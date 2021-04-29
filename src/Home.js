import React, { useState } from 'react';
import { fetchWeather } from './weather-api/fetchWeather';
import { useDispatch } from 'react-redux';
import { setWeather } from './weather-store/actions';
import { useHistory } from 'react-router-dom';
import './App.css';

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [query, setQuery] = useState('');
    let loading = false;

    const builtInSearches = [
        { city: 'Toronto', state: 'Ontario', country: 'Canada' },
        { city: 'Mississauga', state: 'Ontario', country: 'Canada' },
        { city: 'Hamilton', state: 'Ontario', country: 'Canada' },
    ];
    const items = [];

    for (const [index, value] of builtInSearches.entries()) {
        items.push(
            // <div className="city">
            <button
                key={index}
                type="button"
                disabled={loading}
                className="city-button"
                onClick={(e) => {
                    search(
                        value.city + ',' + value.state + ',' + value.country,
                    );
                }}
            >
                <span>{value.city}</span>
            </button>,
            // </div>,
        );
    }

    const search = function (query) {
        loading = true;
        fetchWeather(query)
            .then((response) => {
                dispatch(setWeather(response));
                loading = false;
                history.push('/home');
            })
            .catch((err) => {
                loading = false;
                console.log(err);
                alert(err);
            });
    };

    return (
        <div className="subContainer">
            <input
                type="text"
                className="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={(e) => search(query)}>Search</button>
            {items}
        </div>
    );
};

export default Home;
