import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapHost } from '../../Config';

import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';

import { Icon } from '@iconify/react';

/*검색 결과 컴포넌트*/
function SearchResultComponent({ isOpen, searchList, data, setData, currentLatitude, currentLongitude, handleAddRecentList }) {
    const [bookmarkedIndices, setBookmarkedIndices] = useState([]);
    let id = null;

    // data가 변경될 때마다 bookmarkedIndices 업데이트
    useEffect(() => {
        const indices = searchList.map((item, index) => {
            return data.some(savedItem => 
                String(savedItem.latitude) === item.y && String(savedItem.longitude) === item.x) ? index : null;
        }).filter(index => index !== null);
        setBookmarkedIndices(indices);
    }, [data]);

    const isBookmarked = (index) => {
        return bookmarkedIndices.includes(index);
    };

    const isSaved = (index) => {
        const selectedItem = searchList[index];
        return data.find(item => String(item.latitude) === selectedItem.y && String(item.longitude) === selectedItem.x);
    };

    const toggleBookmark = async (index) => {
        const isSelected = isBookmarked(index);
        const isSavedItem = isSaved(index);
    
        if (isSelected && isSavedItem) {
            // 이미 즐겨찾기에 있는 항목인 경우 삭제
            await deletedHeart(index);
        } else {
            // 즐겨찾기에 추가
            await cilckedHeart(index);
        }
    };

    // 즐겨찾기 추가 서버 연결
    const cilckedHeart = async (index) => {
        const selectedItem = searchList[index];
        try {
            const request = await axios.post(`${MapHost}/bookmarks`, {
                locationName: selectedItem.place_name,
                latitude: selectedItem.y,
                longitude: selectedItem.x
            });

            if (request.status === 201) {
                // 성공적으로 추가되면 해당 항목의 인덱스를 상태에 추가
                console.log("즐겨찾기 추가 성공!");
                setBookmarkedIndices([...bookmarkedIndices, index]);
                setData([...data, request.data]);
                id = request.data.id;
            } else {
                console.log("즐겨찾기 추가 실패 : ", request.status);
            }

        } catch(error) {
            console.log("서버 연결 실패 : ", error);
        }
    }

    // 즐겨찾기 삭제 서버 연결
    const deletedHeart = async (index) => {
        const selectedItem = searchList[index];
        const itemToDelete = data.find(item => String(item.latitude) === selectedItem.y && String(item.longitude) === selectedItem.x);

        if (!itemToDelete) {
            console.log("삭제할 항목을 찾을 수 없습니다.");
            return;
        }

        try {
            const request = await axios.delete(`${MapHost}/bookmarks/${itemToDelete.id}`);
            if (request.status === 204) {
                console.log("즐겨찾기 삭제 성공");
                setBookmarkedIndices(prevIndices => prevIndices.filter(idx => idx !== index));
                setData(prevData => prevData.filter(item => item.id !== itemToDelete.id));
            } else {
                console.log("즐겨찾기 삭제 실패 : ", request.status);
            }
        } catch(error) {
            console.log("서버 연결 실패 : ", error);
        }
    }

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
    // 거리 순으로 정렬
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
                        const originalIndex = searchList.findIndex(
                            searchItem => 
                                searchItem.place_name === item.place_name &&
                                searchItem.address_name === item.address_name
                        );
                        const isSelected = isBookmarked(originalIndex);
                        const isSavedItem = isSaved(originalIndex);
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
                            <li className={style['search-item']} key={index} onClick={() => handleAddRecentList(item)}>
                                <div style={{display:"flex",alignItems:"center"}}>
                                    <span>{item.place_name}</span>
                                    <Icon 
                                        icon={isSelected || isSavedItem ? 'solar:heart-bold' : 'solar:heart-outline'} 
                                        onClick={() => toggleBookmark(originalIndex)} 
                                    />
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