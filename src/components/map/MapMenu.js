import React, { useEffect, useState, useRef, Fragment } from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';

import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import SearchResultComponent from './SearchResultComponent'
import RecentSearchList from './RecentSearchList';
import FavoriteList from './FavoriteList';


/* 지도 메뉴 컴포넌트 */
function MapMenu({ data, setData, setLocation, recentList, setRecentList, setRecentMarker, reFetchData }){
    const [inputValue , setInputValue] = useState('');
    const [searchList, setSearchList] = useState([]);

    const showResultRef  = useRef(null);
    const [isOpen, setOpen] = useState(false);


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddRecentList = (item) => {
        setRecentList(prev => (recentList.includes(item))?[...prev].slice(0, 5):[item, ...prev].slice(0, 5))
        setLocation({latitude: item.y, longitude: item.x})
        setRecentMarker(item)
    } 
    const handleDeleteRecentList= () => {
        setRecentList([])
    }

    //새로고침 후에도 최근 검색 남아있게 
    useEffect(() => {
        localStorage.setItem('recentList', JSON.stringify(recentList))
    },[recentList])
    
    //엔터 누르면 검색
    const onSubmitSearch = (e) => {
        if (e.key === 'Enter') {
            setOpen(true)
            searchPlaces(e.target.value);
        }
      };
    
    // input 이외의 구역을 누르면 검색결과창 숨기기 
    let outSideClick = ({target}) => {
        if(!isOpen && (!showResultRef.current.contains(target)))
            setOpen(false);
    }
    useEffect(() => {
        window.addEventListener('click', outSideClick)
        return() => window.addEventListener("click", outSideClick)

    }, [])

    // Kakao Maps API를 사용하여 장소 검색
    const searchPlaces = async () => {
        const keyword = document.getElementById('keyword').value;
        if (!keyword.trim()) {
            setSearchList([]);
            return;
        }
        try {
            const response = await axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`, {
                headers: {
                    'Authorization': `KakaoAK ${process.env.REACT_APP_MAPRESTAPIKEY}`
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
        <div className={style['map-menu-div']} >
            <div className={style['map-input']} >
                <Icon icon='ion:search-outline' style={{color: 'white'}}/>
                <input
                    id='keyword' 
                    className={style['debounce-input']} 
                    placeholder='검색' value={inputValue} 
                    onChange={handleInputChange}
                    onKeyDown={onSubmitSearch}
                    autoComplete='off'
                />
            </div>
            <div ref={showResultRef} style={{width: "100%", position: "relative", top: "6.9%",left: "10%"}}>
            {
                searchList.length > 0 &&
                   <SearchResultComponent 
                        isOpen={isOpen}
                        searchList={searchList} 
                        data={data} 
                        setData={setData} 
                        currentLatitude={37.4667824} 
                        currentLongitude={126.9336292} 
                        handleAddRecentList={handleAddRecentList}
                        reFetchData={reFetchData}
                    />
            }
            </div>
            <div style={{position:"fixed", top:"10.9vh"}}>
                <FavoriteList
                    data={data}
                    setLocation={setLocation}
                    reFetchData={reFetchData}
                />
                <RecentSearchList 
                    recentList={recentList} 
                    setRecentList={setRecentList}
                    setLocation={setLocation} 
                    handleDeleteRecentList={handleDeleteRecentList} 
                    setRecentMarker={setRecentMarker}
                />
            </div>
    </div>

    ) 
}
export default MapMenu;