import React, { useState, useEffect } from 'react';

import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';

/* 지도가 띄워질 컴포넌트 */
function MapView({ handleResultBox, data, location, recentMarker }) {
    const [map, setMap] = useState(null);
    // kakao api 호출
    const {kakao} = window;
    useEffect(() => {
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(37.4667824, 126.9336292),
            level: 2 // 지도의 확대 레벨
        };
        const mapInit = new kakao.maps.Map(container, options);
        setMap(mapInit);
    }, []);

    useEffect(() => {
        if (map && location) {
            const center = new kakao.maps.LatLng(location.latitude, location.longitude);
            map.panTo(center);
        }
    }, [map, location]);

    useEffect(() => {
        if (map && data.length !== 0) {
            const imageSrc = "/images/Map/heart.svg"; 
            data.forEach((item) => {
                const imageSize = new kakao.maps.Size(24, 24);
                const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
                const position = new kakao.maps.LatLng(item.latitude, item.longitude);
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: position,
                    title: item.locationName,
                    image: markerImage
                });
            });
        }
    }, [map, data]);

    useEffect(() => {
        const position = new kakao.maps.LatLng(recentMarker.y, recentMarker.x);
        const marker = new kakao.maps.Marker({
            map: map,
            position: position,
        });
        
        return () => {
            if (marker) marker.setMap(null);
          };
   }, [recentMarker, map]);


    return(
        <div id="map" className={style['map-view']} onClick={()=>handleResultBox(true)}></div>
    )
}

export default MapView;
