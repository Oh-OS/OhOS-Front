import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';

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
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" onClick={ () => setInputValue('')}><path fill="none" stroke="#828282" strokeMiterlimit="10" strokeWidth="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"/><path fill="none" stroke="#828282" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448" /></svg>
                <DebounceInput placeholder='검색' value={ inputValue }  debounceTimeout = { 500 } onChange={ (e) => setInputValue(e.target.value) } onClick={()=>handleResultBox(isOpen)}/>
            </div>
            <SearchResultComponent isOpen={isOpen}/>
            <FavoriteList imgUrl={ '/images/Map/heart.svg' } listTitle={ "즐겨찾기" }/>
            <RecentSearchList imgUrl={ '/images/Map/search.svg' } listTitle={ "최근 검색" }/>
           
        </div>

        </>
    ) 
}
export default MapMenu;