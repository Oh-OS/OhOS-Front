import React from 'react';
import { Link } from 'react-router-dom';

function LaunchpadIcon({ src, alt, text, to , onClick}) {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", height:"fit-content", rowGap:"10px"}}>
        <img
          src={src}
          alt={alt}
          style={{
            width: "5.5vw",
            cursor: 'pointer',
          }}
          onClick={onClick}
        />
        <p style={{ margin: "7px 0", fontSize: "16px", color:"#fff"}}>{text}</p>
      </div>
    </Link>
  );
}

export default LaunchpadIcon;
