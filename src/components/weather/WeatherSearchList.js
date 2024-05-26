import React from 'react';
import WeatherSearchListStyle from '../../styles/weather/WeatherSearchList.module.css';

function WeatherSearchList({ searchList }) {
    return (
        <div className={WeatherSearchListStyle['resultsListDiv']}>
            {searchList.map((item, index) => (
                <div className={WeatherSearchListStyle['resultsListContainer']}>
                    <div key={index} className={WeatherSearchListStyle['resultsListBox']}>
                        <p>{item.address_name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WeatherSearchList;