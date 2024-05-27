import React from 'react';
import Weather from '../components/weather/Weather';
import WeatherProvider from '../components/weather/WeatherProvider';

function WeatherPage() {
    return (
        <WeatherProvider>
            <Weather />
        </WeatherProvider>
    )
}


export default WeatherPage;