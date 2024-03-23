import '../../styles/common/Style.css'
import weatherStyle from '../../styles/weather/weatherPage.module.css'

function Weather() {
    return(
        <div className={weatherStyle['container']}>
            <div className={weatherStyle['background']}>
                <div className={weatherStyle['allDiv']}>
                    {/* 정보*/}
                    <div className={weatherStyle['topContainer']}>
                        <p>나의 위치</p>
                        <p>서울특별시</p>
                        <p>4°</p>
                        <p>맑음</p>
                        <div className={weatherStyle['temperatureDiv']}>
                            <p>최고:</p><p>15°</p>
                            <p>최저:</p><p>1°</p>
                        </div>
                    </div>
                    <div className={weatherStyle['bottomContainer']}>
                        {/* 검색창 */}
                        <div className={weatherStyle['searchDiv']}>
                            <input type='text' placeholder='위치를 검색하세요' className={weatherStyle['searchStyle']}/>
                        </div>

                        {/* 날씨 보여주는 */}
                        <div className={weatherStyle['weatherDiv']}>
                            <div className={weatherStyle['weatherStyle']}>
                                <p>남은 하루동안 맑은 날씨가 이어집니다.</p>
                                <div className={weatherStyle['presentWeatherDiv']}>
                                    <div className={weatherStyle['presentWeather']}>
                                        <p>지금</p>
                                        <img src={process.env.PUBLIC_URL+'/images/맑음(낮).png'} className={weatherStyle['weatherImg']}/>
                                        <p>14°</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;