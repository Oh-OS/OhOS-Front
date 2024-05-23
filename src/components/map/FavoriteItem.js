import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import { Fragment } from 'react';
import { Icon } from '@iconify/react';


function FavoriteItem({ title, latitude, longitude, setLocation, id, deleteHeart }){
    const cilckedItem = () => {
        setLocation({
            latitude: latitude,
            longitude, longitude
        });
    }

    const handleDeleteClick = () => {
        deleteHeart(id);
    }

    return (
        <Fragment>
            <div className={style['menu-item']}>
                <div className={style['menu-title']} onClick={cilckedItem}>
                    <img src='/images/Map/heart.svg' style={{width: 28, height: 28, marginRight: 10}} alt='Heart Icon' />
                    <div>{title}</div>
                </div>
                <div onClick={handleDeleteClick} style={{ cursor: 'pointer' }}>
                    <Icon icon='bi:x' />
                </div>
            </div>
        </Fragment>
    )
}
export default FavoriteItem;