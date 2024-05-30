import React from 'react';
import Weather from '../components/weather/Weather';
import WeatherProvider from '../components/weather/WeatherProvider';
import TitleBar from '../components/common/TitleBar';

function WeatherPage() {
    return (
        <WeatherProvider>
            <TitleBar />
            <Weather />
        </WeatherProvider>
    )
}


export default WeatherPage;