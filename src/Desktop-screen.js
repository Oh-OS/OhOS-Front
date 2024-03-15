import './Desktop-screen.css';

function Desktop() {
    return (
        <div id='top'>
            <div id="background">
                <img src={process.env.PUBLIC_URL + '../images/background.png'} alt="background" />
            </div>
            <div id='container'>
                <div id='iconContainer'></div>
                <div id="icons">
                    <img src={process.env.PUBLIC_URL + '../images/PhotoboothIcon.png'} alt='photoboothicon' />
                </div>
            </div>
        </div>
    )
}

export default Desktop;