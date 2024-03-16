import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Desktop-screen.css';

function Desktop() {
    const style = {
        position: {
            absolute: "absolute",
            relative: "relative"
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const topStyle = {
        display: style.display,
        justifyContent: "center"
    }

    const backgroundStyle = {
        width: "100vw",
        height: "100vh",
        overflow: "hidden"
    }

    const backgroundImgStyle = {
       width: "100%",
       height: "100%",
       objectFit: "cover",
    }

    const containerStyle = {
        position: style.position.absolute,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: "5%",
    }

    const iconContainerStyle = {
        display: style.display,
        position: style.position.relative,
        columnGap: "10px",
        width: "auto",
        height: "auto",
        backgroundColor: "#9E9E9E",
        borderRadius: "20px",
        padding: "7px",
        justifyContent: "center",
        alignItems: "center"
    }

    
    const iconsStyle = {
        position: style.position.relative,
        width: "50px",
        height: "50px",
        transition: "transform 0.3s ease" // 변환 효과를 부드럽게
    }
    
    const iconsImgStyle = {
        position: style.position.absolute,
        maxWidth: "100%",
        maxHeight: "100%",
        zIndex: "100"
    }
    
    // 아이콘 확대/축소를 위한 상태 변수 및 함수
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const handleIconHover = (icon) => { setHoveredIcon(icon); };
    const handleIconLeave = () => { setHoveredIcon(null); };

    const navigate = useNavigate();
    const IconClick = (path) => {
      navigate(path);
    };

    // onClick={() => IconClick('/photobooth')} => 아이콘 클릭 시 다른 파일로 넘어가게 하는 코드

    return (
        <div style={topStyle}>
            <div style={backgroundStyle}>
                <img src={process.env.PUBLIC_URL + '../images/background.png'} style={backgroundImgStyle} />
            </div>
            <div style={containerStyle}>
                <div style={iconContainerStyle}>
                <div style={{...iconsStyle, transform: hoveredIcon === 'Photobooth' ? "scale(1.2)" : "scale(1)"}} onMouseEnter={() => handleIconHover('Photobooth')} onMouseLeave={handleIconLeave}> <img src={process.env.PUBLIC_URL + '../images/PhotoboothIcon.png'} alt="photobooth" style={iconsImgStyle} /> </div>
                    <div style={{...iconsStyle, transform: hoveredIcon === 'Map' ? "scale(1.2)" : "scale(1)"}} onMouseEnter={() => handleIconHover('Map')} onMouseLeave={handleIconLeave}> <img src={process.env.PUBLIC_URL + '../images/MapIcon.png'} alt="map" style={iconsImgStyle} /> </div>
                    <div style={{...iconsStyle, transform: hoveredIcon === 'Weather' ? "scale(1.2)" : "scale(1)"}} onMouseEnter={() => handleIconHover('Weather')} onMouseLeave={handleIconLeave}> <img src={process.env.PUBLIC_URL + '../images/WeatherIcon.png'} alt="weather" style={iconsImgStyle} /> </div>
                    <div style={{...iconsStyle, transform: hoveredIcon === 'Line' ? "scale(1.2)" : "scale(1)"}} onMouseEnter={() => handleIconHover('Line')} onMouseLeave={handleIconLeave}> <img src={process.env.PUBLIC_URL + '../images/LineIcon.png'} alt="line" style={iconsImgStyle} /> </div>
                    <div style={{...iconsStyle, transform: hoveredIcon === 'Siri' ? "scale(1.2)" : "scale(1)"}} onMouseEnter={() => handleIconHover('Siri')} onMouseLeave={handleIconLeave}> <img src={process.env.PUBLIC_URL + '../images/SiriIcon.png'} alt="siri" style={iconsImgStyle} /> </div>
                    <div style={{...iconsStyle, transform: hoveredIcon === 'Vscode' ? "scale(1.2)" : "scale(1)"}} onMouseEnter={() => handleIconHover('Vscode')} onMouseLeave={handleIconLeave}> <img src={process.env.PUBLIC_URL + '../images/VscodeIcon.png'} alt="vscode" style={iconsImgStyle} /> </div>
                    <div style={{...iconsStyle, transform: hoveredIcon === 'Safari' ? "scale(1.2)" : "scale(1)"}} onMouseEnter={() => handleIconHover('Safari')} onMouseLeave={handleIconLeave}> <img src={process.env.PUBLIC_URL + '../images/SafariIcon.png'} alt="safari" style={iconsImgStyle} /> </div>
                </div>
            </div>
        </div>
    )
}

export default Desktop;