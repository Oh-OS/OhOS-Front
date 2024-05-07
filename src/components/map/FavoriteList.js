import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import FavoriteItem from './FavoriteItem';

import { useState } from 'react';

function FavoriteList(props){
    const [favoriteList, setFavoriteList] = useState([{ title: "미림마이스터고", favorite: false},]);
    return (
        <div className={style['menu-list-div']}>
            <div style={{color: "#A1A1A1", marginBottom:"7%", fontSize: 14}}>{props.listTitle}</div>
            {
                favoriteList.map(item => {
                  return  <FavoriteItem itemTitle={item.title}/>
                })
            }
        </div>
        
    )
} 
export default FavoriteList;