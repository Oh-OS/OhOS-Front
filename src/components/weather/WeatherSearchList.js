import React from 'react';
import WeatherSearchListStyle from '../../styles/weather/WeatherSearchList.module.css';

function WeatherSearchList({ searchList, onItemClick }) {
    return (
        <div className={WeatherSearchListStyle['resultsListDiv']}>
            {searchList.map((item, index) => (
                <div className={WeatherSearchListStyle['resultsListContainer']}>
                    <div 
                        key={index} 
                        className={WeatherSearchListStyle['resultsListBox']}
                        onClick={() => onItemClick(item)}
                    >
                        <p>{item.address_name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WeatherSearchList;