import React, { useState } from 'react';
import { fetchWeather } from './weather-api/fetchWeather';
import { useDispatch } from 'react-redux';
import { setWeather } from './weather-store/actions';
import { useHistory } from 'react-router-dom';
import Autocomplete from 'react-google-autocomplete';
import './App.css';
import {
    getSavedResults,
    saveSearchResults,
} from './services/local-storage-services';

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [query, setQuery] = useState('');

    // TODO add a loading animation
    let loading = false;

    const searches = getSavedResults();
    const items = [];

    for (const [index, value] of searches.entries()) {
        items.push(
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
                <span>{`${value.city}, ${value.country}`}</span>
            </button>,
        );
    }

    const search = function (query) {
        loading = true;
        fetchWeather(query)
            .then((response) => {
                saveSearch(query);
                dispatch(setWeather(response));
                loading = false;
                history.push('/home');
            })
            .catch((err) => {
                loading = false;
                setQuery('');
                // TODO have a nicer error page or modal to show user
                alert(err);
            });
    };

    function saveSearch(query) {
        let queryObj = translateQueryToObj(query);
        let result = searches.find((obj) => {
            return searchesEqual(obj, queryObj);
        });
        if (result === undefined) {
            searches.push(queryObj);
            saveSearchResults(searches);
        }
    }

    function translateQueryToObj(query) {
        return {
            city: query.split(',')[0].trim(),
            state: query.split(',')[1].trim(),
            country: query.split(',')[2].trim(),
        };
    }

    function searchesEqual(compare1, compare2) {
        return (
            compare1.city === compare2.city &&
            compare1.state === compare2.state &&
            compare1.country === compare2.country
        );
    }

    return (
        <div className="subContainer">
            <Autocomplete
                className="search"
                apiKey="AIzaSyC33phkDRFWm18uyT9sDC_7NKyyEFVoPJc"
                onPlaceSelected={(place) => {
                    setQuery(place.formatted_address);
                }}
            />
            <button className="search-button" onClick={(e) => search(query)}>
                Go
            </button>
            <div className="search-list">{items}</div>
        </div>
    );
};

export default Home;
