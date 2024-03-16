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
        width: "65px",
        height: "65px",
    }

    const iconsImgStyle = {
        position: style.position.absolute,
        maxWidth: "100%",
        maxHeight: "100%",
        zIndex: "100"
    }

    return (
        <div style={topStyle}>
            <div style={backgroundStyle}>
                <img src={process.env.PUBLIC_URL + '../images/background.png'} style={backgroundImgStyle} />
            </div>
            <div style={containerStyle}>
                <div style={iconContainerStyle}>
                    <div style={iconsStyle}> <img src={process.env.PUBLIC_URL + '../images/PhotoboothIcon.png'} alt="photobooth" style={iconsImgStyle} /> </div>
                    <div style={iconsStyle}> <img src={process.env.PUBLIC_URL + '../images/MapIcon.png'} alt="map" style={iconsImgStyle} /> </div>
                    <div style={iconsStyle}> <img src={process.env.PUBLIC_URL + '../images/WeatherIcon.png'} alt="weather" style={iconsImgStyle} /> </div>
                    <div style={iconsStyle}> <img src={process.env.PUBLIC_URL + '../images/LineIcon.png'} alt="line" style={iconsImgStyle} /> </div>
                    <div style={iconsStyle}> <img src={process.env.PUBLIC_URL + '../images/VscodeIcon.png'} alt="vscode" style={iconsImgStyle} /> </div>
                    <div style={iconsStyle}> <img src={process.env.PUBLIC_URL + '../images/SiriIcon.png'} alt="siri" style={iconsImgStyle} /> </div>
                    <div style={iconsStyle}> <img src={process.env.PUBLIC_URL + '../images/SafariIcon.png'} alt="safari" style={iconsImgStyle} /> </div>
                </div>
            </div>
        </div>
    )
}

export default Desktop;