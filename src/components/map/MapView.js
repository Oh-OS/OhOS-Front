import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import React, { useEffect } from 'react';

/* 지도가 띄워질 컴포넌트 */
function MapView({ handleResultBox, data }) {
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
                // 위도와 경도를 이용하여 LatLng 객체 생성
                const position = new kakao.maps.LatLng(item.latitude, item.longitude);
                // 마커 생성
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: position,
                    title: item.locationName, // 마커에 마우스를 올리면 타이틀 표시
                    image : markerImage
                });
            });
        }
    }, [data]);

    return(
        <div id="map" className={style['map-view']} onClick={()=>handleResultBox(true)}></div>
    )
}

export default MapView;
