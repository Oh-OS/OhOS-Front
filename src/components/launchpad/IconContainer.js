// IconContainer.js
import React, { useState } from 'react';
import styles from '../../styles/launchpad/LaunchpadPage.module.css';
import SearchBar from './SearchBar';
import LaunchpadIcon from './LaunchpadIcon';
import { useNavigate } from "react-router-dom";

function IconContainer() {
  const [icons, setIcons] = useState([
    { id: 1, src: '/images/Desktop/PhotoboothIcon.png', alt: '포토부스', text: '포토부스', to: "/photoBooth"},
    { id: 2, src: '/images/Desktop/MapIcon.png', alt: '지도', text: '지도', to: "/map"},
    { id: 3, src: '/images/Desktop/BubbleIcon.png', alt: '버블', text: 'bubble', to: "/bubble"},
    { id: 4, src: '/images/Desktop/WeatherIcon.png', alt: '날씨', text: '날씨', to: "/weather"},
    { id: 5, src: '/images/Desktop/SiriIcon.png', alt: '시리', text: 'Siri', to: "/siri"},
    { id: 6, src: '/images/Desktop/VscodeIcon.png', alt: '비스코드', text: 'Visual Studio Code', to:"https://github.dev/github/dev"},
    { id: 7, src: '/images/Desktop/TranslateIcon.png', alt: '번역기', text: '번역기', to: "/translation" },
    { id: 8, src: '/images/Desktop/ContactIcon.png', alt: '연락처', text: '연락처', to: "/contact"},
    { id: 9, src: '/images/Desktop/SafariIcon.png', alt: '사파리', text: 'Safari' , to:"https://www.google.co.kr"}
  ]);

  const [filteredIcons, setFilteredIcons] = useState(icons);

  const handleSearchChange = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredIcons = icons.filter(icon => (
      icon.text.toLowerCase().includes(lowerCaseSearchTerm) ||
      icon.alt.toLowerCase().includes(lowerCaseSearchTerm)
    ));
    setFilteredIcons(filteredIcons);
  }; 


  const navigate = useNavigate();
  const IconClick = (path) => {
    navigate(path);
  };


  return (
    <div className={styles['container']}>
      <SearchBar onSearch={handleSearchChange} />
      <div className={styles['icon-box']} onClick={() => IconClick('/')}>
        {filteredIcons.map((profile) => (
          <LaunchpadIcon
            key={profile.id}
            src={profile.src}
            alt={profile.alt}
            text={profile.text}
            to={profile.to}
          />
        ))}
      </div>
    </div>
  );
}

export default IconContainer;
