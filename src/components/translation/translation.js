import { useEffect, useState } from 'react';
import '../../styles/common/Style.css'
import translationStyle from '../../styles/translation/translationPage.module.css'


function Translation() {
    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('');
    const [inputPlaceholder, setInputPlaceholder] = useState('Enter text');
    const [resultPlaceholder, setResultPlaceholder] = useState('텍스트 입력');
    const placeholders = {
        'e': 'Enter text',
        'k': '텍스트 입력',
        'j': 'テキスト入力',
        'c': '输入文字'
    }

    const handleButtonClick = () => {
        setResultText(inputText);
        setInputText(resultText);
    }

    const handleLanguageChange = (e, type) => {
        const selectedLanguage = e.target.value;
        const placeholder = placeholders[selectedLanguage];
        if (type === 'input') {
            setInputText('');
            setResultText('');
            setInputPlaceholder(placeholder);
        } else if (type === 'result') {
            setInputText('');
            setResultText('');
            setResultPlaceholder(placeholder);
        }
    };
    // 객체 형태 안에 바꿀 텍스트랑 어떤 값으로 바꿀 건지 보내야 함
    const translateText = function(text){
        // debugger;
        // console.log(text)
        const authKey = "c329d234-0b70-43e7-a803-e91eba9a9b61:fx"
        fetch("/deepl/v2/translate", 
          {
            method: "POST",
            headers: {
                "Authorization": "DeepL-Auth-Key " + authKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({ "text": [text] , "target_lang": "JA"})
        }).then(res => res.json())
        .then(data => {
            // debugger;
            setResultText(data.translations[0].text)
        })
      
     
    }

    return(
        <div className={translationStyle['container']}>
            <p className={translationStyle['title']}>번역</p>

            <div className={translationStyle['box']}>
                <div className={translationStyle['input']}>
                    <select onChange={(e) => handleLanguageChange(e, 'input')}>
                        <option value='e'>영어 (미국)</option>
                        <option value='k'>한국어</option>
                    </select>
                    <input
                        className={translationStyle['input-text']}
                        placeholder={inputPlaceholder}
                        value={inputText}
                        onChange={(e) =>{
                            setInputText(e.target.value)
                            translateText(e.target.value)  
                        }}
                    />
                </div>

                {/* <div className={translationStyle['change']}>
                    <div className={translationStyle['change-img']}>
                        <img
                            src={process.env.PUBLIC_URL + '/images/change.png'}
                            alt='change'
                            onClick={handleButtonClick}
                        />
                    </div>
                </div> */}

                <div className={translationStyle['result']}>
                    <select onChange={(e) => handleLanguageChange(e, 'result')}>
                        <option value='e'>영어 (미국)</option>
                        <option value='k' selected>한국어</option>
                        <option value='j'>일본어</option>
                        <option value='c'>중국어</option>
                    </select>
                    <input
                        className={translationStyle['result-text']}
                        placeholder={resultPlaceholder}
                        value={resultText}
                        onChange={(e) =>setResultText(e.target.value)}
                        readOnly
                    />
                </div>
            </div>
        </div>
    )
}

export default Translation;