import React, { useState } from 'react';
import axios from 'axios';
import { MapHost } from '../../Config';

import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';

import { Icon } from '@iconify/react';

/*검색 결과 컴포넌트*/
function SearchResultComponent({ isOpen, searchList, data, currentLatitude, currentLongitude }) {
    const [bookmarkList, setBookmarkList] = useState([data]);
    
    const cilckedHeart = async (index) => {
        const selectedItem = searchList[index];
        if (selectedItem) {
            try {
                const request = await axios.post(`${MapHost}/bookmarks`, {
                    locationName: selectedItem.place_name,
                    latitude: selectedItem.y,
                    longitude: selectedItem.x
                });
    
                if (request.status === 201) {
                    console.log("즐겨찾기 추가 성공!");
                    setBookmarkList([...bookmarkList, request.data]);
                } else {
                    console.log("즐겨찾기 추가 실패 : ", request.status);
                }
    
            } catch(error) {
                console.log("서버 연결 실패 : ", error);
            }
        }
    }

    const deletedHeart = async (index, id) => {
        try {
            const request = await axios.delete(`${MapHost}/bookmarks/${id}`);
            if (request.status === 204) {
                console.log("즐겨찾기 삭제 성공");
                setBookmarkList(bookmarkList.filter(itemId => itemId !== index));
            } else {
                console.log("즐겨찾기 삭제 실패 : ", request.status);
            }
        } catch(error) {
            console.log("서버 연결 실패 : ", error);
        }
    }

    const toggleBookmark = async (index) => {
        const selectedItem = searchList[index];
        const isSelected = isBookmarked(index);
        const clickedCoordinate = {
            latitude: selectedItem.y,
            longitude: selectedItem.x
        };
    
        const savedItem = data.find(item => String(item.latitude) === String(clickedCoordinate.latitude) && String(item.longitude) === String(clickedCoordinate.longitude));
    
        if (savedItem) {
            // 이미 저장된 항목인 경우 해당 항목을 삭제
            await deletedHeart(index, savedItem.id);
        } else if (!isSelected) {
            // 저장되어 있지 않은 항목인 경우 즐겨찾기를 추가
            await cilckedHeart(index);
        }
    };

    const isBookmarked = (index) => {
        return bookmarkList.includes(index);
    };

    const isSaved = (index) => {
        const selectedItem = searchList[index];
        let savedItem = false;
        for (const item of data) {
            if (String(item.latitude) === selectedItem.y && String(item.longitude) === selectedItem.x) {
                savedItem = true;
                break;
            }
        }
        return savedItem;
    };

    // 두 지점 간의 거리를 계산하는 함수
    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = (lat2 - lat1) * Math.PI / 180;  // 위도 차이
        const dLon = (lon2 - lon1) * Math.PI / 180;  // 경도 차이
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // 두 지점 사이의 거리
        return distance;
    }
    // 검색된 결과들의 좌표와 현재 좌표 사이의 거리를 계산하여 반환하는 함수
    function calculateDistancesFromCurrentLocation(currentLatitude, currentLongitude, searchList) {
        const distances = searchList.map(item => {
            const distance = calculateDistance(
                currentLatitude,
                currentLongitude,
                parseFloat(item.y),
                parseFloat(item.x)
            );
            return distance;
        });
        return distances;
    }
    function sortByDistance(currentLatitude, currentLongitude, searchList) {
        const distances = calculateDistancesFromCurrentLocation(currentLatitude, currentLongitude, searchList);
        const sortedSearchList = [...searchList].sort((a, b) => {
            const distanceA = distances[searchList.indexOf(a)];
            const distanceB = distances[searchList.indexOf(b)];
            return distanceA - distanceB;
        });
        return sortedSearchList;
    }
    const sortedSearchList = sortByDistance(currentLatitude, currentLongitude, searchList);
    
    return(
        <div id='searchDiv' className={style['search-div']} style={{display: isOpen ? "block" : "none"}} >
            <ul>
                {
                    Array.isArray(sortedSearchList) && sortedSearchList.length > 0 && sortedSearchList.map((item, index) => {
                        const isSelected = isBookmarked(index);
                        const distance = calculateDistance(
                            currentLatitude,
                            currentLongitude,
                            parseFloat(item.y),
                            parseFloat(item.x)
                        );
                        let distanceDisplay;
                        if (distance >= 1) {
                            distanceDisplay = `${(distance).toFixed(1)}km`;
                        } else {
                            distanceDisplay = `${Math.floor(distance * 1000)}m`;
                        }
                        return(
                            <li className={style['search-item']} key={index}>
                                <div style={{display:"flex",alignItems:"center"}}>
                                    <span>{item.place_name}</span>
                                    <Icon icon={isSelected || isSaved(index) ? 'solar:heart-bold' : 'solar:heart-outline'} onClick={() => toggleBookmark(index)}/>
                                </div>
                                <div style={{fontSize:16, color:"rgba(255, 255, 255, 0.7)",marginTop:5}}>{distanceDisplay}・{item.address_name}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SearchResultComponent;