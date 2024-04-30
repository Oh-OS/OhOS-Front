import '../../styles/common/Style.css';
import MapMenu from './MapMenu';
import MapView from './MapView';

function Map() {
    return (
        <div style={{width: "100vw", height:"100vh", display: "flex"}}>
        <MapMenu/>
        <MapView/>
        </div>
    )
}

export default Map;