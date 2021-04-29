import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

const Details = () => {
    const selector = useSelector((state) => state);
    return (
        <div className="details">
            <h2 className="city-name">
                <span>{selector.weatherReducer.name}</span>
                <sup>{selector.weatherReducer.country}</sup>
            </h2>
            <div className="city-temp">
                {Math.round(selector.weatherReducer.temperature)}
                <sup>&deg;C</sup>
            </div>
            <div className="info">
                <img
                    className="city-icon"
                    src={`https://openweathermap.org/img/wn/${selector.weatherReducer.weatherIcon}@2x.png`}
                    alt={selector.weatherReducer.description}
                />
                <p>{selector.weatherReducer.weatherDescription}</p>
            </div>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    );
};

export default Details;
