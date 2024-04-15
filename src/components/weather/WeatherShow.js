import '../../styles/common/Style.css';
import styles from '../../styles/weather/WeatherShow.module.css';

function WeatherShow({ hourlyWeather }) {
    // console.log(hourlyWeather)
    const weatherImage = (state) => {
        let url = '';
        let className = '';
        
        if (state === '1') {
            url = '/images/Weather/맑음(낮).png';
            className = 'defaultImg';
        } else if (state === '3') {
            url = '/images/Weather/구름많음(낮).png';
            className = 'bigImg';
        } else if (state === '4') {
            url = '/images/Weather/흐림.png';
            className = 'middleImg';
        }
        return { url, className };
    }

    // const getCurrentHour = () => {
    //     const now = new Date();
    //     const currentHour = now.getHours();
    //     return currentHour;
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

    return (
        <>
            <div className={styles['weatherDiv']}>
                <div className={styles['weatherStyle']}>
                    <p>남은 하루동안 맑은 날씨가 이어집니다.</p>
                    <div className={styles['presentWeatherDiv']}>
                        {hourlyWeather.map((hour, index) => {
                            const { url, className } = weatherImage(hour.state);
                            const currentHour = getCurrentHour();
                            const time = parseInt(currentHour) === parseInt(hour.time) ? '지금' : `${hour.time}시`;
                            return (
                                <div key={index} className={styles.presentWeather}>
                                    <p>{time}</p>
                                    <img src={url} className={styles[className]} alt="weather icon" />
                                    <p>{hour.temperature}°</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherShow;