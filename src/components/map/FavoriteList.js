import axios from 'axios';
import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import FavoriteItem from './FavoriteItem';

import { useEffect, useState } from 'react';
import { MapHost } from '../../Config';

function FavoriteList(){
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${MapHost}/bookmarks`);
                if(response.status === 200) {
                    console.log("데이터 불러오기 성공", response.data);
                    setData(response.data);
                } else {
                    console.log("데이터 불러오기 실패: ", response.status);
                }
            } catch(error) {
                console.log("서버 연결 실패 : ", error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {
                data.length > 0 &&
                <div className={style['menu-list-div']}>
                    <div style={{color: "#A1A1A1", marginBottom:"7%", fontSize: 14}}>즐겨찾기</div>
                    {
                        data.map(item => {
                            return  <FavoriteItem title={item.locationName}/>
                        })
                    }
                </div>
            }
        </>
    )
}
export default FavoriteList;