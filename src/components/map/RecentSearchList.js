import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import RecentSearchItem from './RecentSearchItem';

import { useState } from 'react';

function RecentSearchList(){
    const [recentList, setRecentList] = useState([{ title: "미림분식"},]);
    return (
        <div className={style['menu-list-div']}>
            <div style={{color: "#A1A1A1", marginBottom:"7%", fontSize: 14}}>최근 검색</div>
            {
                recentList.map(item => {
                  return  <RecentSearchItem itemTitle={item.title}/>
                })
            }
            <div style={{ position: "relative", fontSize: 14, top: "6.9%", alignSelf:" flex-start", marginTop: 8, color: "#FF55A9"}}>최근 검색 지우기</div>
        </div>
        
    )
} 
export default RecentSearchList;