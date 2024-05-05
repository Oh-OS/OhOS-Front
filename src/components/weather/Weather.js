import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import '../../styles/common/Style.css'
import weatherStyle from '../../styles/weather/Weather.module.css'

import TitleBar from '../common/TitleBar';
import WeatherInfo from './WeatherInfo';
import WeatherSearch from './WeatherSearch';
import WeatherShow from './WeatherShow';

function Weather() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const currentDate = `${year}${month}${day}`;

    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hourlyWeather, setHourlyWeather] = useState([]);
    const baseTime = [2, 5, 8, 11, 14, 17, 20, 23];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = ''; /* 인증키 */
                const hourlyWeatherData = [];

                for (let i = 0; i < baseTime.length; i++) {
                    const currentTime = baseTime[i].toString().padStart(2, '0');
                    const apiUrl = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&dataType=JSON&base_date=${currentDate}&base_time=${currentTime}00&nx=60&ny=127`;

                    const response = await fetch(apiUrl);
                    const forecasts = await response.json();
                    setForecast(forecasts);
                    console.log(forecasts);

                    // 데이터 처리
                    const item0 = forecasts?.response?.body?.items?.item[0];
                    const item5 = forecasts?.response?.body?.items?.item[5];
                    // console.log(item0, item5);

                    if (item0 && item5) {
                        const time = item0.fcstTime.substring(0, 2);
                        const temperature = item0.fcstValue;
                        const location = { x: item0.nx, y: item0.ny };
                        const state = item5.fcstValue;

                        const hourlyWeatherDataItem = {
                            time: time,
                            temperature: temperature,
                            location: location,
                            state: state
                        };
                        hourlyWeatherData.push(hourlyWeatherDataItem);
                    }
                }
                setHourlyWeather(hourlyWeatherData);
                setLoading(false); // 데이터 가져오기 완료
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [currentDate]);

    return(
        <div className={weatherStyle['container']}>
            <div style={{position: "absolute", zIndex: 100}}> <TitleBar /> </div>
            <div className={weatherStyle['background']}>
                <div className={weatherStyle['allDiv']}>
                    {/* 정보*/}
                    <WeatherInfo hourlyWeather={hourlyWeather} />
                    {/* <WeatherInfo /> */}
                    <div className={weatherStyle['bottomContainer']}>
                        {/* 검색창 */}
                        <WeatherSearch />

                        {/* 날씨 보여주는 */}
                        <WeatherShow hourlyWeather={hourlyWeather} />
                        {/* <WeatherShow /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;