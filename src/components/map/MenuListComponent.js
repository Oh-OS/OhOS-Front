import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import MenuItemComponent from './MenuItemComponent'

/*즐겨찾기, 최근 검색 컴포넌트 */
function MenuListComponent(props){
   
    return(
        <div className={style['menu-list-div']}>
            <div style={{color: "#A1A1A1", marginBottom:"7%", fontSize: 14}}>{props.listTitle}</div>
        
        <MenuItemComponent imgUrl={props.imgUrl} listTitle={props.listTitle}/>
        <MenuItemComponent imgUrl={props.imgUrl} listTitle={props.listTitle}/>
        </div>
    )
} 
export default MenuListComponent;
