import '../../styles/common/Style.css';
import WeatherInfoStyle from '../../styles/weather/WeatherInfo.module.css';

function WeatherInfo() {
    return (
        <>
            <div className={WeatherInfoStyle['topContainer']}>
                <p>나의 위치</p>
                <p>서울특별시</p>
                <p>4°</p>
                <p>맑음</p>
                <div className={WeatherInfoStyle['temperatureDiv']}>
                    <p>최고:</p><p>15°</p>
                    <p>최저:</p><p>1°</p>
                </div>
            </div>
        </>
    )
}

export default WeatherInfo;