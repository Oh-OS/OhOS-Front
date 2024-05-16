import '../../styles/common/Style.css';
import WeatherInfoStyle from '../../styles/weather/WeatherInfo.module.css';

function WeatherInfo({ hourlyWeather, maxTemperature, minTemperature }) {
    const getCurrentHour = () => {
        const now = new Date();
        return now.getHours();
    };

    const getCurrentState = (hourlyWeather, currentHour) => {
        const currentData = hourlyWeather.find(data => parseInt(data.time) === currentHour);
        if (currentData && currentData.sky && currentData.temperature) {
            const data = {
                temperature: currentData.temperature,
                sky: currentData.sky,
                pty: currentData.pty,
            };
            return data;
        } else {
            return null;
        }
    };

    const currentHour = parseInt(getCurrentHour());
    const currentState = getCurrentState(hourlyWeather, currentHour);

    const getWeather = (sky, pty) => {
        let weather = '';
        if (pty === '0') {
            switch (sky) {
                case '1': weather = '맑음'; break;
                case '3': weather = '구름많음'; break;
                case '4': weather = '흐림'; break;
                default: weather = null;
            }
        } else {
            switch(pty) {
                case '1': weather = '비'; break;
                case '2': weather = '비/눈'; break;
                case '3': weather = '눈'; break;
                case '5': weather = '빗방울'; break;
                case '6': weather = '빗방울눈날림'; break;
                case '7': weather = '눈날림'; break;
                default: weather = null;
            }
        }
        return weather;
    };

    const currentWeather = currentState ? getWeather(currentState.sky, currentState.pty) : null;
    const currentTemperature = currentState ? currentState.temperature : null;

    return (
        <>
            <div className={WeatherInfoStyle['topContainer']}>
                <p>나의 위치</p>
                <p>{currentTemperature}°</p>
                <p>{currentWeather}</p>
                <div className={WeatherInfoStyle['temperatureDiv']}>
                    <p>최고: {maxTemperature()}°</p>
                    <p>최저: {minTemperature()}°</p>
                </div>
            </div>
        </>
    )
}

export default WeatherInfo;