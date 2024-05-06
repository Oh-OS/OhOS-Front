import axios from 'axios';
import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import { useEffect, useState } from 'react';


/* 지도가 띄워질 컴포넌트 */
function MapView({handleResultBox}) {
    // // 지도 server api 연결
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get(`http://localhost:8080/bookmarks`);
    //             if (response.status === 200) {
    //                 setData(response.data);
    //             } else {
    //                 console.log("데이터 불러오기 실패 : ", response.status);
    //             }
    //         } catch(error) {
    //             console.error("api 연결 실패 : ", error);
    //         }
    //     }
    //     fetchData();
    // }, []);
    // console.log(data);

    // kakao api 호출
    const {kakao} = window; 
    useEffect(() => {
        const container = document.getElementById("map");
        const options = {
                center: new kakao.maps.LatLng(37.4667824, 126.9325292), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
        }
        const map = new kakao.maps.Map(container, options);

        // 마커를 표시할 위치와 title 배열
        var positions = [
            {
                title: '미림마이스터고등학교', 
                latlng: new kakao.maps.LatLng(37.4663824, 126.9329000)
            }
        ];

        var imageSrc = "/images/Map/heart.svg"; 
        for (var i = 0; i < positions.length; i ++) {
            var imageSize = new kakao.maps.Size(24, 24); 
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); // 마커 이미지 생성
            // 마커 생성
            var marker = new kakao.maps.Marker({
                map: map,
                position: positions[i].latlng, // 마커를 표시할 위치
                title : positions[i].title, // 마커에 마우스를 올리면 타이틀 표시
                image : markerImage
            });
        }

    }, []);

    return(
        <div id="map" className={style['map-view']} onClick={()=>handleResultBox(true)}></div>
    )
}

export default MapView;
