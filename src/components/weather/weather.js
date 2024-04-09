import '../../styles/common/Style.css'
import weatherStyle from '../../styles/weather/Weather.module.css'

import TitleBar from '../common/TitleBar';
import WeatherInfo from './WeatherInfo';
import WeatherSearch from './WeatherSearch';
import WeatherShow from './WeatherShow';

function Weather() {
    return(
        <div className={weatherStyle['container']}>
            <div style={{position: "absolute", zIndex: 100}}> <TitleBar /> </div>
            <div className={weatherStyle['background']}>
                <div className={weatherStyle['allDiv']}>
                    {/* 정보*/}
                    <WeatherInfo />
                    <div className={weatherStyle['bottomContainer']}>
                        {/* 검색창 */}
                        <WeatherSearch />

                        {/* 날씨 보여주는 */}
                        <WeatherShow />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;