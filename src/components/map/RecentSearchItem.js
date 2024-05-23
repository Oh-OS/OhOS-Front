import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import { Fragment } from 'react';


function RecentSearchItem({item, setLocation, setRecentMarker}){
    let clickItem = ()=> {
        console.log(item.y, item.x)
        setLocation({latitude: item.y,longitude: item.x})
        setRecentMarker(item)
    }
    return (
        <Fragment>
            <div className={style['menu-item']}>
                <img src='/images/Map/search.svg' style={{width: 28, height: 28, marginRight: 10}} onClick={clickItem}></img>
                <div>{item.place_name}</div>
            </div>
        </Fragment>
        
    )
}
export default RecentSearchItem;