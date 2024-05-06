import { useState } from 'react';
import '../../styles/common/Style.css';
import MapMenu from './MapMenu';
import MapView from './MapView';

function Map() {
    const [isOpen , setIsOpen] = useState(false);
    const handleResultBox = (open) => setIsOpen(!open); 
    return (
        <div style={{width: "100vw", height:"100vh", display: "flex"}}>
        <MapMenu handleResultBox={handleResultBox} isOpen={isOpen}/>
        <MapView handleResultBox={handleResultBox}/>
        </div>
    )
}

export default Map;