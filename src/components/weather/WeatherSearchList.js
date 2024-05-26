import React from 'react';
import WeatherSearchListStyle from '../../styles/weather/WeatherSearchList.module.css';

function WeatherSearchList({ searchList }) {
    return (
        <div className={WeatherSearchListStyle['resultsListDiv']}>
            <div className={WeatherSearchListStyle['resultsListBox']}>
                <>
                    {searchList.map((item, index) => (
                        <p key={index}>
                            <>{item.address_name}</>
                        </p>
                    ))}
                </>
            </div>
        </div>
    );
}

export default WeatherSearchList;