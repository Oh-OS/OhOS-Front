import '../../styles/common/Style.css';
import WeatherInfoStyle from '../../styles/weather/WeatherInfo.module.css';

function WeatherInfo({ hourlyWeather }) {
    // console.log('1. hourlyWeather : ', hourlyWeather);

    // const getCurrentHour = () => {
    //     const now = new Date();
    //     return now.getHours();
    // };

    const getCurrentHour = () => {
        const now = new Date();
        const currentHour = now.getHours();
        const closestHour = Math.floor(currentHour / 3) * 3 + 3;
    
        if (closestHour < 3) {
            return '03';
        } else if (closestHour >= 21) {
            return '21';
        } else {
            return closestHour.toString().padStart(2, '0');
        }
    };

    const getCurrentState = (hourlyWeather, currentHour) => {
        const currentData = hourlyWeather.find(data => parseInt(data.time) === currentHour);
        if (currentData && currentData.state && currentData.temperature) {
            const data = {
                temperature: currentData.temperature,
                state: currentData.state
            };
            return data;
        } else {
            return null;
        }
    };

    // const currentHour = getCurrentHour();
    const currentHour = parseInt(getCurrentHour());
    const currentState = getCurrentState(hourlyWeather, currentHour);

    // console.log('2. currentHour : ', Object(currentHour))
    // console.log('3. currentState : ', currentState)

    const getWeather = (state) => {
        let weather = '';
        switch (state) {
            case '1': weather = '맑음'; break;
            case '3': weather = '구름많음'; break;
            case '4': weather = '흐림'; break;
            default: weather = null;
        }
        return weather;
    };

    const currentWeather = currentState ? getWeather(currentState.state) : null;
    const currentTemperature = currentState ? currentState.temperature : null;
    // console.log('4. currentWeather, currentTemperature : ', currentWeather, currentTemperature);

    return (
        <>
            <div className={WeatherInfoStyle['topContainer']}>
                <p>나의 위치</p>
                <p>서울특별시</p>
                <p>{currentTemperature}°</p>
                <p>{currentWeather}</p>
                <div className={WeatherInfoStyle['temperatureDiv']}>
                    <p>최고:</p><p>15°</p>
                    <p>최저:</p><p>1°</p>
                </div>
            </div>
        </>
    )
}

export default WeatherInfo;