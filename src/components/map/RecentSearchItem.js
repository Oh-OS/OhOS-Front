import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import { Fragment } from 'react';
import { Icon } from '@iconify/react';


function RecentSearchItem({item, setLocation, setRecentMarker,  handleDeleteItem}){
    let clickItem = ()=> {
        console.log(item.y, item.x)
        setLocation({latitude: item.y,longitude: item.x})
        setRecentMarker(item)
    }
    return (
        <Fragment>
            <div className={style['menu-item']} onClick={clickItem}>
                <div className={style['menu-title']}>
                    <img src='/images/Map/search.svg' style={{width: 28, height: 28, marginRight: 10}}></img>
                    <div>{item.place_name}</div>
                </div>
                <Icon icon='bi:x' style={{ cursor: 'pointer' }} onClick={() => handleDeleteItem(item.id)}/>
            </div>
        </Fragment>
        
    )
}
export default RecentSearchItem;