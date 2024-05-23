import { MapHost } from '../../Config';
import axios from 'axios';

import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import FavoriteItem from './FavoriteItem';

function FavoriteList({ data, setData, setLocation, reFetchData }) {
    const deleteHeart = async (id) => {
        try {
            const request = await axios.delete(`${MapHost}/bookmarks/${id}`);
            if (request.status === 204) {
                console.log("즐겨찾기 삭제 성공");
                setData(data.filter(item => item.id !== id));
                reFetchData();
            } else {
                console.log("즐겨찾기 삭제 실패", request.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    return (
        <>
            <div className={style['menu-list-div']}>
                <div style={{color: "#A1A1A1", marginBottom:"7%", fontSize: 14}}>즐겨찾기</div>
                {
                    data.map((item) => {
                        return (
                            <FavoriteItem 
                                title={item.locationName}
                                latitude={item.latitude}
                                longitude={item.longitude}
                                key={item.id}
                                setLocation={setLocation}
                                id={item.id}
                                deleteHeart={deleteHeart}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
export default FavoriteList;