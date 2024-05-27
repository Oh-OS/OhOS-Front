import React, { useContext, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import WeatherSearchList from '../weather/WeatherSearchList';
import { WeatherContext } from './WeatherProvider';
import { DebounceInput } from 'react-debounce-input';

import '../../styles/common/Style.css';
import WeatherSearchStyle from '../../styles/weather/WeatherSearch.module.css';

function WeatherSearch() {
    const [searchText, setSearchText] = useState('');
    const [searchList, setSearchList] = useState([]);
    const searchDivRef = useRef(null);

    const { selectContact } = useContext(WeatherContext);

    useEffect(() => {
        if (searchText) {
            searchPlaces(searchText);
        } else {
            setSearchList([]);
        }
    }, [searchText]);

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const searchPlaces = async (keyword) => {
        if (!keyword.trim()) {
            setSearchList([]);
            return;
        }
        
        try {
            const response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${keyword}`, {
                headers: {
                    'Authorization': `KakaoAK ${process.env.REACT_APP_MAPRESTAPIKEY}`
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

    const handleItemClick = (item) => {
        selectContact(item.address_name, item.x, item.y);
        setSearchList([]);
    };

    const handleClickOutside = (event) => {
        if (searchDivRef.current && !searchDivRef.current.contains(event.target)) {
            setSearchList([]);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className={WeatherSearchStyle['searchDiv']} ref={searchDivRef}>
                <DebounceInput
                    minLength={2}
                    debounceTimeout={500}
                    id='keyword' 
                    type='text' 
                    placeholder='위치를 검색하세요' 
                    autoComplete='off'
                    className={WeatherSearchStyle['searchStyle']}
                    value={searchText}
                    onChange={handleInputChange}
                />
                {searchList.length > 0 && 
                    <WeatherSearchList searchList={searchList} onItemClick={handleItemClick} />
                }
            </div>
        </>
    );
}

export default WeatherSearch;