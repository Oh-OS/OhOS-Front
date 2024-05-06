import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import RecentSearchItem from './RecentSearchItem';

import { useState } from 'react';

function RecentSearchList(props){
    const [recentList, setRecentList] = useState([{ title: "미림분식"},]);
    return (
        <div className={style['menu-list-div']}>
            <div style={{color: "#A1A1A1", marginBottom:"7%", fontSize: 14}}>{props.listTitle}</div>
            {
                recentList.map(item => {
                  return  <RecentSearchItem imgUrl={props.imgUrl} itemTitle={item.title}/>
                })
            }
            <div style={{ position: "relative", fontSize: 14, top: "6.9%", alignSelf:" flex-start", marginTop: 8, color: "#FF55A9"}}>최근 검색 지우기</div>
        </div>
        
    )
} 
export default RecentSearchList;