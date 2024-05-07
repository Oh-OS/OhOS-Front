import React, { useState, useEffect } from 'react';

import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';

import { Icon } from '@iconify/react';

/*검색 결과 컴포넌트*/
function SearchResultComponent(props){
    const [bookmark , setBookMark] = useState(false);
    const BookMarking = ()=> setBookMark(!bookmark);
    const [searchList , setSearchList] = useState([{id: 1, title: "미림분식", location: "서울특별시 목동서로 349", kilometer : "8.2km"},{id: 2, title: "미림마이스터고", location: "서울특별시 목동서로 349", kilometer : "8.2km"},])
    // const [searchList, setSearchList] = useState([]);
    const [bookmarkList, setBookmarkList] = useState([]);

    // useEffect(() => {
    //     const { kakao } = window;
    //     const ps = new kakao.maps.services.Places();
    
    //     ps.keywordSearch(keyword, (data, status, pagination) => {
    //         if (status === kakao.maps.services.Status.OK) {
    //             // 검색 결과를 처리하는 로직
    //             const searchData = data.map(place => ({
    //                 title: place.place_name,
    //                 location: place.address_name,
    //                 kilometer: "",
    //             }));
    //             setSearchList(searchData);
    //         } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
    //             // 검색 결과가 없는 경우 처리
    //             setSearchList([]);
    //         } else if (status === kakao.maps.services.Status.ERROR) {
    //             // 검색 과정에서 오류가 발생한 경우 처리
    //             console.error('검색 오류 발생 :', status);
    //         }
    //     });
    // }, [keyword]);

    const toggleBookmark = (id) => {
        if (bookmarkList.includes(id)) {
            setBookmarkList(bookmarkList.filter(itemId => itemId !== id));
        } else {
            setBookmarkList([...bookmarkList, id]);
        }
    };

    const isBookmarked = (id) => {
        return bookmarkList.includes(id);
    };

    
    return(
        <div id='searchDiv' className={style['search-div']} style={{display: props.isOpen ? "block" : "none"}} >
            <ul>
                {
                    searchList.map(item => {
                        const isSelected = isBookmarked(item.id);
                        return(
                            <li className={style['search-item']}>
                                <div style={{display:"flex",alignItems:"center"}} onClick={() => toggleBookmark(item.id)}>
                                    <span>{item.title}</span>
                                    <Icon icon={isSelected ? 'solar:heart-bold' : 'solar:heart-outline'}/>
                                </div>
                                <div style={{fontSize:16, color:"rgba(255, 255, 255, 0.7)",marginTop:5}}>{item.kilometer}・{item.location}</div>
                             </li>
                        )
                    })
                }
            </ul>
        </div>    
    )
}

export default SearchResultComponent;