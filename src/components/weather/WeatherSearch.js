import React, { useState } from 'react';
import { MapRestApiKey } from '../../Config';
import axios from 'axios';

import '../../styles/common/Style.css'
import WeatherSearchStyle from '../../styles/weather/WeatherSearch.module.css'

function WeatherSearch() {
    const [searchText, setSearchText] = useState('');
    const [searchList, setSearchList] = useState([]); // 검색 결과 저장 배열
    const handleInputChange = (event) => {
        setSearchText(event.target.value);
        searchPlaces(event.target.value);
    };

    const searchPlaces = async () => {
        const keyword = document.getElementById('keyword').value;
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
                setSearchList(response.data.documents);
                console.log("검색 결과 저장 성공!");
            } else {
                console.log('검색 결과를 가져오는데 실패했습니다.');
            }
        } catch (error) {
            console.error('검색 중 오류 발생:', error);
        }
    };

    return (
        <>
            <div className={WeatherSearchStyle['searchDiv']}>
                <input
                    id='keyword' 
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