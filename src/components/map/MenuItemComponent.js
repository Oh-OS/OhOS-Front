import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import { Fragment } from 'react';


function MenuItemComponent(props){
    return (
        <Fragment>
        <div className={style['menu-item']}>
            <img src={props.imgUrl} style={{width: 28, height: 28, marginRight: 10}}></img>
            <div>미림분식</div>
        </div>

        {props.title==="최근 검색" && 
            <div style={{ position: "relative", fontSize: 14, top: "6.9%", alignSelf:" flex-start", marginTop: 8, color: "#FF55A9"}}>최근 검색 지우기</div>}

        </Fragment>
        
    )
}
export default MenuItemComponent;