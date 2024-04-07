import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../CSS/WeatherApp.css';

import WbTwilightIcon from '@mui/icons-material/WbTwilight';

function WeatherApp() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const API_KEY = '03e0a9eabd7c6235d20ab332d56ed7c5';

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
                        setWeatherData(response.data);
                        setError(null);
                    } catch (error) {
                        setWeatherData(null);
                        setError('Error fetching weather data');
                    }
                },
                (error) => {
                    console.error(error);
                    setError('Error getting location');
                }
            );
        } else {
            setError('Geolocation is not supported by this browser');
        }
    }, []);

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            setWeatherData(response.data);
            setError(null);
        } catch (error) {
            setWeatherData(null);
            setError('City not found!');
        }
    };

    return (
        <div className="weather-app">
            <h1>Weather App</h1>
            <div className='cloud-info'>
                <p><strong>{weatherData.weather[0].description}</strong></p>
            </div>
            <div>
                {error && <p className="error">{error}</p>}
                {!error && !weatherData && <p>Loading...</p>}
                {weatherData && (
                    <div className="weather-data-card">
                        <div className='location'>
                            <div className='loc-title-country'>
                                <h2>{weatherData.name}</h2>
                                <h3>{weatherData.sys.country}</h3>
                            </div>
                            <div className='search-box-weather-location'>
                                <input
                                    type="text"
                                    placeholder="Enter city name"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                <button onClick={fetchWeatherData}>Get Weather</button>
                            </div>

                        </div>
                        <div className='information'>

                            <div className='temp-info'>
                                <p>Temperature</p>
                                <p>Feels like</p>
                                <p>Min Temperature</p>
                                <p>Max Temperature</p>
                                <p>Pressure</p>
                                <p>Humidity</p>
                            </div>

                            <div className='temp-info info-data'>
                                <p className='important'>{weatherData.main.temp}°C</p>
                                <p className='important'>{weatherData.main.feels_like}°C</p>
                                <p>{weatherData.main.temp_min}°C</p>
                                <p>{weatherData.main.temp_max}°C</p>
                                <p>{weatherData.main.pressure} hPa</p>
                                <p>{weatherData.main.humidity}%</p>
                            </div>

                            <div className='temp-info'>
                                <p>Visibility</p>
                                <p>Cloudiness</p>
                                <p>Wind Speed</p>
                                <p>Wind Direction</p>
                            </div>

                            <div className='temp-info info-data'>
                                <p>{weatherData.visibility / 1000} km</p>
                                <p>{weatherData.clouds.all}%</p>
                                <p className='important'>{weatherData.wind.speed} m/s</p>
                                <p>{weatherData.wind.deg}°</p>
                            </div>

                            <div className='sun-container'>
                                <div className='sunrise-set-icon sun-rise'>
                                    <WbTwilightIcon fontSize='large' />
                                </div>

                                <div className='sun-rise-set-container'>
                                    <div className='sun-set-rise-title'>
                                        <p>Sunrise</p>
                                        <p>Sunset</p>
                                    </div>
                                    <div className='sun-set-rise-data'>
                                        <p>{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
                                        <p>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
                                    </div>
                                </div>

                                <div className='sunrise-set-icon sun-set'>
                                    <WbTwilightIcon fontSize='large' />
                                </div>
                            </div>


                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WeatherApp;
