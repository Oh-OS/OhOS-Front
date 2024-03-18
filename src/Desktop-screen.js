import React from 'react';
import './Desktop-screen.css';
import Dock from './Dock';

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

    return (
        <div style={topStyle}>
            <div style={backgroundStyle}>
                <img src={process.env.PUBLIC_URL + '../images/background.png'} style={backgroundImgStyle} />
            </div>
            <div style={containerStyle}>
                <Dock />
            </div>
        </div>
    )
}

export default Desktop;