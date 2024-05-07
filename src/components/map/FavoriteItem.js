import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import { Fragment } from 'react';


function FavoriteItem(props){
    return (
        <Fragment>
            <div className={style['menu-item']}>
                <img src='/images/Map/heart.svg' style={{width: 28, height: 28, marginRight: 10}}></img>
                <div>미림마이스터고</div>
            </div>
        </Fragment>
        
    )
}
export default FavoriteItem;