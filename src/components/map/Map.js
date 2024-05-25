import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

    const [recentList, setRecentList] = useState(JSON.parse(localStorage.getItem('recentList')) || []);
    const [recentMarker, setRecentMarker] = useState({}); 

    // 지도 server api 연결
    const [data, setData] = useState([]);
    async function fetchData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_MAPHOST}/bookmarks`);
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

    const reFetchData = async () => {
        console.log("다시 호출");
        await fetchData();
    }

    return (
        <div style={{width: "100vw", height:"100vh", display: "flex"}}>
            <MapMenu 
                handleResultBox={handleResultBox}
                isOpen={isOpen}
                data={data}
                setData={setData}
                location={location}
                setLocation={setLocation}
                recentList={recentList}
                setRecentList={setRecentList}
                setRecentMarker={setRecentMarker}
                reFetchData={reFetchData}
            />

            <MapView 
                handleResultBox={handleResultBox}
                data={data}
                location={location}
                setRecentMarker={setRecentMarker}
                recentMarker={recentMarker}
                reFetchData={reFetchData}
            />
        </div>
    )
}

export default Map;