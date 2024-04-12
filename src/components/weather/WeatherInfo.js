import '../../styles/common/Style.css';
import WeatherInfoStyle from '../../styles/weather/WeatherInfo.module.css';

function WeatherInfo({ hourlyWeather }) {
    {/* 현재 시간으로 판단 */}
    // let state = '';
    // if (hourlyWeather.state === '1') {
    //     state = '맑음';
    // } else if (hourlyWeather.state === '3') {
    //     state = '구름많음';
    // } else if (hourlyWeather.state === '4') {
    //     state = '흐림';
    // }

    return (
        <>
            <div className={WeatherInfoStyle['topContainer']}>
                <p>나의 위치</p>
                <p>서울특별시</p>
                <p> {/* {hourlyWeather.temperature} */}14°</p>
                <p> {/* {state} */} 맑음 </p>
                <div className={WeatherInfoStyle['temperatureDiv']}>
                    <p>최고:</p><p>15°</p>
                    <p>최저:</p><p>1°</p>
                </div>
            </div>
        </>
    )
}

export default WeatherInfo;