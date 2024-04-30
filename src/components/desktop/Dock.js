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
            <div onClick={() => IconClick('/photoBooth')}> <img src='/images/Desktop/PhotoboothIcon.png' alt="photobooth" className={styles['iconsImgStyle', 'iconsStyle']}/> </div>
            <div onClick={() => IconClick('/launchpad')}> <img src='/images/Desktop/LaunchpadIcon.png' alt="Launchpad" className={styles['iconsImgStyle', 'iconsStyle']}/> </div>
            <div onClick={() => IconClick('/map')}> <img src='/images/Desktop/MapIcon.png' alt="map" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div onClick={() => IconClick('/bubble')}> <img src='/images/Desktop/BubbleIcon.png' alt="bubble" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div onClick={() => IconClick('/weather')}> <img src='/images/Desktop/WeatherIcon.png' alt="weather" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div> <img src='/images/Desktop/SiriIcon.png' alt="siri" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div onClick={() => {window.open('https://github.dev/github/dev')}}> <img src='/images/Desktop/VscodeIcon.png' alt="vscode" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div onClick={() => IconClick('/translation')}> <img src='/images/Desktop/TranslateIcon.png' alt="translate" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div onClick={() => IconClick('/contact')}> <img src='/images/Desktop/ContactIcon.png' alt="contact" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div onClick={() => {window.open('https://www.google.co.kr')}}><img src='/images/Desktop/SafariIcon.png' alt="safari" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
        </div>
    );
}

export default Dock;