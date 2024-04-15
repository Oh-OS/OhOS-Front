import React, { useState } from 'react';

import '../../styles/common/Style.css'
import WeatherSearchStyle from '../../styles/weather/WeatherSearch.module.css'

function WeatherSearch() {
    const [searchText, setSearchText] = useState('');
    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <>
            <div className={WeatherSearchStyle['searchDiv']}>
                <input 
                    type='text' 
                    placeholder='위치를 검색하세요' 
                    className={WeatherSearchStyle['searchStyle']}
                    value={searchText}
                    onChange={handleInputChange} 
                />
            </div>
        </>
    )
}

export default WeatherSearch;