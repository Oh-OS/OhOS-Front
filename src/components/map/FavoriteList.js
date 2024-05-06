import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import FavoriteItem from './FavoriteItem';
function FavoriteList(props){
    return (
        <div className={style['menu-list-div']}>
            <div style={{color: "#A1A1A1", marginBottom:"7%", fontSize: 14}}>{props.listTitle}</div>
            <FavoriteItem imgUrl={props.imgUrl} listTitle={props.listTitle}/>
            <FavoriteItem imgUrl={props.imgUrl} listTitle={props.listTitle}/>
        </div>
        
    )
} 
export default FavoriteList;