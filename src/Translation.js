import './Translation.css';

function Translation() {
    return (
      <div id='main'>
        <p id='title'>번역</p>
        <div id='translation-container'>
          <div id='input-box'>
          </div>
          <div id='line'>
            <div id='change'>
              <img src={process.env.PUBLIC_URL + '../images/change.png'} />
            </div>
          </div>
          <div id='result-box'>
          </div>
        </div>
      </div>
    );
}

export default Translation;