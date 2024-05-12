import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import { Fragment } from 'react';


function FavoriteItem({ title, latitude, longitude, setLocation }){
    const cilckedItem = () => {
        setLocation({
            latitude: latitude,
            longitude, longitude
        })
    }
    return (
        <Fragment>
            <div className={style['menu-item']} onClick={cilckedItem}>
                <img src='/images/Map/heart.svg' style={{width: 28, height: 28, marginRight: 10}}></img>
                <div>{title}</div>
            </div>
        </Fragment>
    )
}
export default FavoriteItem;