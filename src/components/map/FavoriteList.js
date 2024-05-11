import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import FavoriteItem from './FavoriteItem';

function FavoriteList({ data }){
    return (
        <>
            {
                data.length > 0 &&
                <div className={style['menu-list-div']}>
                    <div style={{color: "#A1A1A1", marginBottom:"7%", fontSize: 14}}>즐겨찾기</div>
                    {
                        data.map((item, index) => {
                            return  <FavoriteItem title={item.locationName} key={index}/>
                        })
                    }
                </div>
            }
        </>
    )
}
export default FavoriteList;