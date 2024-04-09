import '../../styles/common/Style.css';
import WeatherShowStyle from '../../styles/weather/WeatherShow.module.css';

function WeatherShow() {
    return (
        <>
            <div className={WeatherShowStyle['weatherDiv']}>
                <div className={WeatherShowStyle['weatherStyle']}>
                    <p>남은 하루동안 맑은 날씨가 이어집니다.</p>
                    <div className={WeatherShowStyle['presentWeatherDiv']}>
                        <div className={WeatherShowStyle['presentWeather']}>
                            <p>지금</p>
                            <img src={process.env.PUBLIC_URL+'/images/Weather/맑음(낮).png'} className={WeatherShowStyle['weatherImg']}/>
                            <p>14°</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherShow;