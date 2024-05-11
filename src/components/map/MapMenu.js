import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Icon } from '@iconify/react';
import axios from 'axios';

import SearchResultComponent from './SearchResultComponent'
import RecentSearchList from './RecentSearchList';
import FavoriteList from './FavoriteList';


/* 지도 메뉴 컴포넌트 */
function MapMenu({ handleResultBox, isOpen, data }){
    const [inputValue , setInputValue] = useState('');
    const [searchList, setSearchList] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        searchPlaces(e.target.value);
    };

    // Kakao Maps API를 사용하여 장소 검색
    const searchPlaces = async () => {
        const keyword = document.getElementById('keyword').value;
        if (!keyword.trim()) {
            setSearchList([]);
            return;
        }
        const apiKey = '6684bf4ed1ed13090fa493ea1a743307';
        try {
            const response = await axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`, {
                headers: {
                    'Authorization': `KakaoAK ${apiKey}`
                }
            });

            if (response.status === 200) {
                setSearchList(response.data.documents); // 검색 결과를 상태에 저장
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
        <div className={style['map-menu-div']}>

            <div className={style['map-input']}>
                <Icon icon='ion:search-outline' style={{ color: 'white' }}/>
                <DebounceInput 
                    id='keyword' 
                    className={style['debounce-input']} 
                    placeholder='검색' value={inputValue} 
                    debounceTimeout={500} 
                    onChange={handleInputChange} 
                    onClick={()=>handleResultBox(isOpen)}
                />
            </div>
            {
                searchList.length > 0 &&
                <SearchResultComponent isOpen={isOpen} searchList={searchList} data={data}/>
            }
            <FavoriteList data={data} />
            <RecentSearchList />
           
        </div>

        </>
    ) 
}
export default MapMenu;