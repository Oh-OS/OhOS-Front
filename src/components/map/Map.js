import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapHost } from '../../Config';

import '../../styles/common/Style.css';
import MapMenu from './MapMenu';
import MapView from './MapView';

function Map() {
    const [isOpen , setIsOpen] = useState(false);
    const handleResultBox = (open) => setIsOpen(!open);
    const [location, setLocation] = useState({
        latitude: 37.4667824,
        longitude: 126.9336292
    });

    // 지도 server api 연결
    const [data, setData] = useState([]);
    const [prevData, setPrevData] = useState([]);
    async function fetchData() {
        try {
            const response = await axios.get(`${MapHost}/bookmarks`);
            if (response.status === 200) {
                console.log("데이터 불러오기 성공");
                setData(response.data);
            } else {
                console.log("데이터 불러오기 실패 : ", response.status);
            }
        } catch(error) {
            console.error("api 연결 실패 : ", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // 이전 데이터와 바뀐 데이터 비교하여 다르면 fetchData 호출
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(prevData)) {
            fetchData();
            setPrevData(data);
        }
    }, [data]);

    return (
        <div style={{width: "100vw", height:"100vh", display: "flex"}}>
            <MapMenu handleResultBox={handleResultBox} isOpen={isOpen} data={data} setData={setData} setLocation={setLocation} />
            <MapView handleResultBox={handleResultBox} data={data} location={location} />
        </div>
    )
}

export default Map;