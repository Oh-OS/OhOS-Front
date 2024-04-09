import '../../styles/common/Style.css'
import WeatherSearchStyle from '../../styles/weather/WeatherSearch.module.css'

function WeatherSearch() {
    return (
        <>
            <div className={WeatherSearchStyle['searchDiv']}>
                <input type='text' placeholder='위치를 검색하세요' className={WeatherSearchStyle['searchStyle']}/>
            </div>
        </>
    )
}

export default WeatherSearch;