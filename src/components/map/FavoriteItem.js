import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import { Fragment } from 'react';


function FavoriteItem({ title }){
    return (
        <Fragment>
            <div className={style['menu-item']}>
                <img src='/images/Map/heart.svg' style={{width: 28, height: 28, marginRight: 10}}></img>
                <div>{title}</div>
            </div>
        </Fragment>
        
    )
}
export default FavoriteItem;