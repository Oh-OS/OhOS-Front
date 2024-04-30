/* eslint-disable jsx-a11y/alt-text */
import '../../styles/common/Style.css';
import style from '../../styles/map/Map.module.css';
import { Fragment, useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';

/* 지도 메뉴 컴포넌트 */
function MapMenu(props){
    const [inputValue , setInputValue] = useState('');
    const [isOpen , setIsOpen] = useState(false);

    const searchInput = ( ) => {
            setIsOpen(!isOpen)
    };

    return (
        <>
        <div className={style['map-menu-div']}>

            <div className={style['map-input']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" onClick={ () => setInputValue('')}><path fill="none" stroke="#828282" strokeMiterlimit="10" strokeWidth="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"/><path fill="none" stroke="#828282" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448" /></svg>
                <DebounceInput placeholder='검색' value={ inputValue }  debounceTimeout = { 500 } onChange={ (e) => setInputValue(e.target.value) } onFocus={ searchInput }/>
            </div>
            <SearchResultComponent isOpen={isOpen}/>
            <MenuListComponent imgUrl={ '/images/Map/heart.svg' } listTitle={ "즐겨찾기" }/>
            <MenuListComponent imgUrl={ '/images/Map/search.svg' } listTitle={ "최근 검색" }/>
           
        </div>

        </>
    ) 
}

/*검색 결과 컴포넌트*/
function SearchResultComponent(props){
    const [bookmark , setBookMark] = useState(false);
    const BookMarking = ()=> setBookMark(!bookmark)
    return(
        <div id='searchDiv' className={style['search-div']} style={{display: props.isOpen ? "block" : "none"}} >
            <ul>
                <li className={style['search-item']}>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <span>미림분식</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" onClick={BookMarking}><path fill="#ffffff" fillRule={bookmark? "#fffff" : "evenodd"} d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154c.298.23.594.459.885.688c.526.415.995.778 1.448 1.043c.452.264.816.385 1.126.385c.31 0 .674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043c.29-.23.587-.458.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382c.286.22.563.434.826.642c.513.404 1.063.834 1.62 1.16c.557.325 1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16a78.6 78.6 0 0 1 .826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399" clipRule="evenodd"/></svg>
                    </div>
                    <div style={{fontSize:16, color:"rgba(255, 255, 255, 0.7)",marginTop:5}}>8.2km・서울특별시 목동서로 349</div>
                </li>
                <li className={style['search-item']}>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <span>미림분식</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" onClick={BookMarking}><path fill="#ffffff" fillRule={bookmark? "#fffff" : "evenodd"} d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154c.298.23.594.459.885.688c.526.415.995.778 1.448 1.043c.452.264.816.385 1.126.385c.31 0 .674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043c.29-.23.587-.458.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382c.286.22.563.434.826.642c.513.404 1.063.834 1.62 1.16c.557.325 1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16a78.6 78.6 0 0 1 .826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399" clipRule="evenodd"/></svg>
                    </div>
                    <div style={{fontSize:16, color:"rgba(255, 255, 255, 0.7)",marginTop:5}}>8.2km・서울특별시 목동서로 349</div>
                </li>
            </ul>
        </div>    
    )
}

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

/* kakao api 를 호출해 지도가 띄워질 컴포넌트 */
function MapView(){
    const {kakao} = window; 
    useEffect(() => {
        const container = document.getElementById("map");
        const options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
        }
        const map = new kakao.maps.Map(container, options);
    }, []);

    return(
        <div id="map" className={style['map-view']}></div>
    ) 
}

function Map() {
    return (
        <div style={{width: "100vw", height:"100vh", display: "flex"}}>
        <MapMenu/>
        <MapView/>
        </div>
    )
}

export default Map;