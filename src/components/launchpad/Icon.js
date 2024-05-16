import React from 'react';
import { Link } from 'react-router-dom'; // React Router의 Link 컴포넌트 import

function LaunchpadIcon({ src, alt, text, to }) {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", height:"fit-content", rowGap:"10px"}}>
        <img
          src={src}
          alt={alt}
          style={{
            width: "5.5vw",
            cursor: 'pointer'

          }}
        />
        <p style={{ margin: "7px 0", fontSize: "16px", color:"#fff"}}>{text}</p>
      </div>
    </Link>
  );
}

function IconContainer() {

  const icons = [
    { src: '/images/Desktop/PhotoboothIcon.png', alt: '포토부스', text: '포토부스', to: "/photoBooth"},
    { src: '/images/Desktop/MapIcon.png', alt: '지도', text: '지도', to: "/map"},
    { src: '/images/Desktop/BubbleIcon.png', alt: 'bubble', text: 'bubble', to: "/bubble"},
    { src: '/images/Desktop/WeatherIcon.png', alt: '날씨', text: '날씨', to: "/weather"},
    { src: '/images/Desktop/SiriIcon.png', alt: 'Siri', text: 'Siri', to: "siri"},
    { src: '/images/Desktop/VscodeIcon.png', alt: 'Vscode', text: 'Visual Studio Code', to:"https://github.dev/github/dev"},
    { src: '/images/Desktop/TranslateIcon.png', alt: '번역기', text: '번역기', to: "/translation" },
    { src: '/images/Desktop/ContactIcon.png', alt: '연락처', text: '연락처', to: "/contact"},
    { src: '/images/Desktop/SafariIcon.png', alt: 'Safari', text: 'Safari' , to:"https://www.google.co.kr"}
  ];

  return (
    <div style={{ display: "flex", gap: "105.88px", flexWrap:"wrap"}}>
      {icons.map((profile) => (
        <LaunchpadIcon
          key={profile.id}
          src={profile.src}
          alt={profile.alt}
          text={profile.text}
          to={profile.to}
        />
      ))}
    </div>
  );
}

export default IconContainer;
