import React, { useState } from 'react';
import axios from 'axios';
import { MapHost } from '../../Config';

import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';

import { Icon } from '@iconify/react';

/*검색 결과 컴포넌트*/
function SearchResultComponent({ isOpen, searchList, data }) {
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
    
    return(
        <div id='searchDiv' className={style['search-div']} style={{display: isOpen ? "block" : "none"}} >
            <ul>
                {
                    Array.isArray(searchList) && searchList.length > 0 && searchList.map((item, index) => {
                        const isSelected = isBookmarked(index);
                        return(
                            <li className={style['search-item']} key={index}>
                                <div style={{display:"flex",alignItems:"center"}}>
                                    <span>{item.place_name}</span>
                                    <Icon icon={isSelected || isSaved(index) ? 'solar:heart-bold' : 'solar:heart-outline'} onClick={() => toggleBookmark(index)}/>
                                </div>
                                {/* <div style={{fontSize:16, color:"rgba(255, 255, 255, 0.7)",marginTop:5}}>{item.kilometer}・{item.address_name}</div> */}
                                <div style={{fontSize:16, color:"rgba(255, 255, 255, 0.7)",marginTop:5}}>{item.address_name}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SearchResultComponent;