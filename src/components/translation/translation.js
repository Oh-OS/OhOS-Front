import { useEffect, useState } from 'react';
import '../../styles/common/Style.css'
import translationStyle from '../../styles/translation/translationPage.module.css'


function Translation() {
    const [inputTarget, setInputTarget] = useState('KO');
    const [resultTarget, setResultTarget] = useState('EN');
    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('');
    const [inputPlaceholder, setInputPlaceholder] = useState('텍스트 입력');
    const [resultPlaceholder, setResultPlaceholder] = useState('Enter text');
    const placeholders = {
        'EN': 'Enter text',
        'KO': '텍스트 입력',
        'JA': 'テキスト入力',
        'ZH': '输入文字'
    }

    const handleButtonClick = () => {
        setResultText(inputText);
        setInputText(resultText);
        setInputTarget(resultTarget);
        setResultTarget(inputTarget);
        setInputPlaceholder(resultPlaceholder);
        setResultPlaceholder(inputPlaceholder);
    }
    const handleLanguageChange = (e, type) => {
        const selectedLanguage = e.target.value;
        const placeholder = placeholders[selectedLanguage];
        if (type === 'input') {
            setInputText('');
            setResultText('');
            setInputPlaceholder(placeholder);
            setInputTarget(selectedLanguage);
        } else if (type === 'result') {
            setInputText('');
            setResultText('');
            setResultPlaceholder(placeholder);
            setResultTarget(selectedLanguage)
        }
    };
    // 객체 형태 안에 바꿀 텍스트랑 어떤 값으로 바꿀 건지 보내야 함
    const translateText = function(text){
        const authKey = "";
        fetch("/deepl/v2/translate", {
            method: "POST",
            headers: {
                "Authorization": "DeepL-Auth-Key " + authKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "text": [text], "target_lang": "JA" })
        }).then(res => {
            // 오류 처리: HTTP 상태 코드 확인
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            // JSON 파싱 및 반환
            return res.json();
        }).then(data => {
            // 번역 결과를 처리하는 코드
            setResultText(data.translations[0].text);
            // console.log(data);
        }).catch(error => {
            // 오류 처리: 네트워크 오류 또는 JSON 형식 오류
            console.error('There was a problem with the fetch operation:', error);
        });
    };    
    return(
        <div className={translationStyle['container']}>
            <p className={translationStyle['title']}>번역</p>
            <div className={translationStyle['box']}>
                <div className={translationStyle['input']}>
                    <select value={inputTarget} onChange={(e) => handleLanguageChange(e, 'input')}>
                        <option value='EN'>영어 (미국)</option>
                        <option value='KO'>한국어</option>
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
                <div className={translationStyle['change']}>
                    <div className={translationStyle['change-img']}>
                        <img
                            src={process.env.PUBLIC_URL + '/images/change.png'}
                            alt='change'
                            onClick={handleButtonClick}
                        />
                    </div>
                </div>
                <div className={translationStyle['result']}>
                    <select value={resultTarget} onChange={(e) => handleLanguageChange(e, 'result')}>
                        <option value='EN'>영어 (미국)</option>
                        <option value='KO'>한국어</option>
                        <option value='JA'>일본어</option>
                        <option value='ZH'>중국어</option>
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