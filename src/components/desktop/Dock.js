import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../../styles/desktop/Dock.module.css';

function Dock() {

    const navigate = useNavigate();
    const IconClick = (path) => {
      navigate(path);
    };

    return (
        <div className={styles['iconContainerStyle']}>
            <div> <img src={process.env.PUBLIC_URL + '/images/PhotoboothIcon.png'} alt="photobooth" className={styles['iconsImgStyle', 'iconsStyle']}/> </div>
            <div> <img src={process.env.PUBLIC_URL + '/images/LaunchpadIcon.png'} alt="Launchpad" className={styles['iconsImgStyle', 'iconsStyle']}/> </div>
            <div> <img src={process.env.PUBLIC_URL + '/images/MapIcon.png'} alt="map" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div> <img src={process.env.PUBLIC_URL + '/images/BubbleIcon.png'} alt="bubble" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div> <img src={process.env.PUBLIC_URL + '/images/WeatherIcon.png'} alt="weather" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div> <img src={process.env.PUBLIC_URL + '/images/SiriIcon.png'} alt="siri" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div> <img src={process.env.PUBLIC_URL + '/images/VscodeIcon.png'} alt="vscode" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div onClick={() => IconClick('/translation')}> <img src={process.env.PUBLIC_URL + '/images/TranslateIcon.png'} alt="translate" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div onClick={() => IconClick('/contact')}> <img src={process.env.PUBLIC_URL + '/images/ContactIcon.png'} alt="contact" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div> <img src={process.env.PUBLIC_URL + '/images/SafariIcon.png'} alt="safari" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
        </div>
    );
}

export default Dock;