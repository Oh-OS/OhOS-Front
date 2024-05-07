import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Icon } from '@iconify/react';

import SearchResultComponent from './SearchResultComponent'
import RecentSearchList from './RecentSearchList';
import FavoriteList from './FavoriteList';


/* 지도 메뉴 컴포넌트 */
function MapMenu({handleResultBox, isOpen}){
    const [inputValue , setInputValue] = useState('');
    return (
        <>
        <div className={style['map-menu-div']}>

            <div className={style['map-input']}>
                <Icon icon='ion:search-outline' style={{ color: 'white' }}/>
                <DebounceInput className={style['debounce-input']} placeholder='검색' value={inputValue}  debounceTimeout={500} onChange={ (e) => setInputValue(e.target.value) } onClick={()=>handleResultBox(isOpen)}/>
            </div>
            <SearchResultComponent isOpen={isOpen}/>
            <FavoriteList listTitle={ "즐겨찾기" }/>
            <RecentSearchList listTitle={ "최근 검색" }/>
           
        </div>

        </>
    ) 
}
export default MapMenu;