import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import RecentSearchItem from './RecentSearchItem';



function RecentSearchList({setLocation, recentList, setRecentList, handleDeleteRecentList, setRecentMarker}){
    const handleDeleteItem = (id)=> {
        setRecentList(recentList.filter(item => id !== item.id))
    }
    return (
        <div className={style['menu-list-div']}>
            <div style={{color: "#A1A1A1", marginBottom:"7%", fontSize: 14}}>최근 검색</div>
            {
                recentList.map(item => {
                    return  <RecentSearchItem item={item} setLocation={setLocation} setRecentMarker={setRecentMarker}  handleDeleteItem={handleDeleteItem}/>
                })
            }
            {
                recentList.length >0 &&  <div style={{ position: "relative", fontSize: 14, top: "6.9%", alignSelf:" flex-start", marginTop: 15, color: "#FF55A9"}}  onClick={handleDeleteRecentList}>최근 검색 지우기</div>
            }
        </div>
        
    )
} 
export default RecentSearchList;