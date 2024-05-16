import React from 'react';
import Desktop from '../components/desktop/Desktop';
import Dock from '../components/desktop/Dock';

function DesktopPage() {
    return (
        <div style={{display:"flex", justifyContent:"center", position: "absolute", margin: 0, top: 0,}}>
            <Dock />
            <Desktop />
        </div>
    )
}

export default DesktopPage;