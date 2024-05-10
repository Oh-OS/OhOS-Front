import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { MapHost } from '../../Config';


/* 지도가 띄워질 컴포넌트 */
function MapView({handleResultBox}) {
    // 지도 server api 연결
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${MapHost}/bookmarks`);
                if (response.status === 200) {
                    console.log("데이터 불러오기 성공", response.data);
                    setData(response.data);
                } else {
                    console.log("데이터 불러오기 실패 : ", response.status);
                }
            } catch(error) {
                console.error("api 연결 실패 : ", error);
            }
        }
        fetchData();
    }, []);

    // kakao api 호출
    const {kakao} = window; 
    useEffect(() => {
        const container = document.getElementById("map");
        const options = {
                center: new kakao.maps.LatLng(37.4667824, 126.9336292), // 지도의 중심좌표
                level: 2 // 지도의 확대 레벨
        }
        const map = new kakao.maps.Map(container, options);

        if (data.length !== 0) {
            var imageSrc = "/images/Map/heart.svg"; 
            data.forEach((item) => {
                var imageSize = new kakao.maps.Size(24, 24); 
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
                // 데이터에서 위도와 경도 추출
                const { latitude, longitude, title } = item;
                // 위도와 경도를 이용하여 LatLng 객체 생성
                const position = new kakao.maps.LatLng(latitude, longitude);
                // 마커 생성
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: position,
                    title: title, // 마커에 마우스를 올리면 타이틀 표시
                    image : markerImage
                });
            });
        } else {
            console.log("북마크 없음");
        }

    }, [data]);

    return(
        <div id="map" className={style['map-view']} onClick={()=>handleResultBox(true)}></div>
    )
}

export default MapView;
