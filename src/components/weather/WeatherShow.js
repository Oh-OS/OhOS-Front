import React, { useState, useEffect } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/weather/WeatherShow.module.css';

function WeatherShow({ hourlyWeather }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (hourlyWeather && hourlyWeather.length > 0) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [hourlyWeather]);

    const date = new Date();
    date.setDate(date.getDate());
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const currentDate = `${year}.${month}.${day}`;

    const weatherImage = (sky, pty, time) => {
        let url = '';
        let className = '';
        
        if(pty === "0") {
            if (parseInt(time) > 6 && parseInt(time) < 18) {
                if (sky === '1') {
                    url = '맑음(낮)';
                    className = 'defaultImg';
                } else if (sky === '3') {
                    url = '구름많음(낮)';
                    className = 'bigImg';
                } else if (sky === '4') {
                    url = '흐림';
                    className = 'middleImg';
                }
            } else {
                if (sky === '1') {
                    url = '맑음(밤)';
                    className = 'defaultImg';
                } else if (sky === '3') {
                    url = '구름많음(밤)';
                    className = 'bigImg';
                } else if (sky === '4') {
                    url = '흐림';
                    className = 'middleImg';
                }
            }
        } else {
            if (pty === '1') {
                url = '비';
                className = 'defaultImg';
            } else if (pty === '2') {
                url = '비/눈';
                className = 'defaultImg';
            } else if (pty === '3') {
                url = '눈';
                className = 'defaultImg';
            } else if (pty === '5') {
                url = '빗방울';
                className = 'defaultImg';
            } else if (pty === '6') {
                url = '빗방울눈날림';
                className = 'defaultImg';
            } else if (pty === '7') {
                url = '눈날림';
                className = 'defaultImg';
            }
        }

        return { url, className };
    }

    const getCurrentHour = () => {
        const now = new Date();
        const currentHour = now.getHours();
        return currentHour;
    };
    // 시간 순서대로 정렬
    const sortedHourlyWeather = hourlyWeather.sort((a, b) => parseInt(a.time) - parseInt(b.time));

    return (
        <>
            <div className={styles['weatherDiv']}>
                <p>{currentDate} 날씨입니다.</p>
                <div className={styles['weatherStyle']}>
                    <div className={styles['presentWeatherDiv']}>
                        {loading ? (
                            <p>날씨 불러오는 중...</p>
                        ) : (
                            sortedHourlyWeather.map((hour, index) => {
                                const { url, className } = weatherImage(hour.sky, hour.pty, hour.time);
                                const currentHour = getCurrentHour();
                                const time = parseInt(currentHour) === parseInt(hour.time) ? '지금' : `${hour.time}시`;
                                return (
                                    <div key={index} className={styles.presentWeather}>
                                        <p>{time}</p>
                                        <img src={`/images/Weather/${url}.png`} className={styles[className]} alt="weather icon" />
                                        <p>{hour.temperature}°</p>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherShow;