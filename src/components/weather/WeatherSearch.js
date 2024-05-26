import React, { useEffect, useState } from 'react';
import { MapRestApiKey } from '../../Config';
import axios from 'axios';
import WeatherSearchList from '../weather/WeatherSearchList'

import '../../styles/common/Style.css'
import WeatherSearchStyle from '../../styles/weather/WeatherSearch.module.css'

function WeatherSearch() {
    const [searchText, setSearchText] = useState('');
    const [searchList, setSearchList] = useState([]); 

    const handleInputChange = (event) => {
        const newSearchText = event.target.value;
        setSearchText(newSearchText);
    };

    useEffect(() => {
        if(searchList.length > 0) {
            // console.log(searchList);
        }
    }, [searchList])

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchPlaces(searchText);
        }
    };

    const searchPlaces = async (keyword) => {
        if (!keyword.trim()) {
            setSearchList([]);
            return;
        }
        const apiKey = `${MapRestApiKey}`;
        try {
            const response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${keyword}`, {
                headers: {
                    'Authorization': `KakaoAK ${apiKey}`
                }
            });

            if (response.status === 200) {
                const documents = response.data.documents.map(document => ({
                    ...document,
                    x: parseInt(document.x),
                    y: parseInt(document.y)
                }));
                setSearchList(documents);
                console.log("api 호출 성공!");
            } else {
                console.log('api 호출 실패', response.status);
            }
        } catch (error) {
            console.error('api 연결 실패:', error);
        }
    };

    return (
        <>
            <div className={WeatherSearchStyle['searchDiv']}>
                <input
                    id='keyword' 
                    type='text' 
                    placeholder='위치를 검색하세요' 
                    autoComplete='off'
                    className={WeatherSearchStyle['searchStyle']}
                    value={searchText}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            {searchList.length > 0 && 
                <WeatherSearchList searchList={searchList} />
            }
        </>
    )
}

export default WeatherSearch;