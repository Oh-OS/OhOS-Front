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
            <div> <img src={process.env.PUBLIC_URL + '/images/Desktop/PhotoboothIcon.png'} alt="photobooth" className={styles['iconsImgStyle', 'iconsStyle']}/> </div>
            <div onClick={() => IconClick('/launchpad')}> <img src={process.env.PUBLIC_URL + '/images/Desktop/LaunchpadIcon.png'} alt="Launchpad" className={styles['iconsImgStyle', 'iconsStyle']}/> </div>
            <div> <img src={process.env.PUBLIC_URL + '/images/Desktop/MapIcon.png'} alt="map" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div> <img src={process.env.PUBLIC_URL + '/images/Desktop/BubbleIcon.png'} alt="bubble" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div onClick={() => IconClick('/weather')}> <img src={process.env.PUBLIC_URL + '/images/Desktop/WeatherIcon.png'} alt="weather" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div> <img src={process.env.PUBLIC_URL + '/images/Desktop/SiriIcon.png'} alt="siri" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div onClick={() => {window.open('https://github.dev/github/dev')}}> <img src={process.env.PUBLIC_URL + '/images/Desktop/VscodeIcon.png'} alt="vscode" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div onClick={() => IconClick('/translation')}> <img src={process.env.PUBLIC_URL + '/images/Desktop/TranslateIcon.png'} alt="translate" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div onClick={() => IconClick('/contact')}> <img src={process.env.PUBLIC_URL + '/images/Desktop/ContactIcon.png'} alt="contact" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
            <div onClick={() => {window.location.href ='https://www.google.co.kr'}}><img src={process.env.PUBLIC_URL + '/images/Desktop/SafariIcon.png'} alt="safari" className={styles['iconsImgStyle', 'iconsStyle']} /> </div>
        </div>
    );
}

export default Dock;