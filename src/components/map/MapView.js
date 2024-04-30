import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import { useEffect } from 'react';


/* kakao api 를 호출해 지도가 띄워질 컴포넌트 */
function MapView(){
    const {kakao} = window; 
    useEffect(() => {
        const container = document.getElementById("map");
        const options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
        }
        const map = new kakao.maps.Map(container, options);
    }, []);

    return(
        <div id="map" className={style['map-view']}></div>
    ) 
}

export default MapView;
