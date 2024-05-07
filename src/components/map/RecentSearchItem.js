import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import { Fragment } from 'react';


function RecentSearchItem(props){
    return (
        <Fragment>
            <div className={style['menu-item']}>
                <img src='/images/Map/search.svg' style={{width: 28, height: 28, marginRight: 10}}></img>
                <div>{props.itemTitle}</div>
            </div>
        </Fragment>
        
    )
}
export default RecentSearchItem;