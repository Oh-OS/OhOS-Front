import { useEffect, useState } from 'react';
import '../../styles/common/Style.css'
import translationStyle from '../../styles/translation/translationPage.module.css'

function translateText(text, source_lang, target_lang) {
    console.log(text, source_lang, target_lang);
    const authKey = `${process.env.REACT_APP_TRANSLATEAPIKEY}`;
    return new Promise((resolve, reject) => {
    fetch("/deepl/v2/translate", {
        method: "POST",
        headers: {
            "Authorization": "DeepL-Auth-Key " + authKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "text": [text],"source_lang": source_lang, "target_lang": target_lang})
    }).then(res => {
        console.log(res)
        return res.json();
    }).then(data => {
        // console.log("경과" , data.translations[0].text);
        resolve(data.translations[0].text);
    }).catch(error => {
            reject(error);
        });
    });
} 

function Translation() {
    const [inputTarget, setInputTarget] = useState('KO');
    const [resultTarget, setResultTarget] = useState('EN');
    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('');
    const [inputPlaceholder, setInputPlaceholder] = useState('텍스트 입력');
    const [resultPlaceholder, setResultPlaceholder] = useState('Enter text');
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    const placeholders = {
        'EN': 'Enter text',
        'KO': '텍스트 입력',
        'JA': 'テキスト入力',
        'ZH': '输入文字'
    }

    const handleButtonClick = () => {
        if(resultTarget === 'JA' || resultTarget === 'ZH') {
            return;
        }
        
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
    
   
    
    useEffect(() => {
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }
        setDebounceTimeout(setTimeout(() => {
            if (inputText.length >= 1) {
                translateText(inputText, inputTarget, resultTarget)
                .then(text => {
                    setResultText(text);
                })
                .catch(error => {
                    console.error("Translation error:", error);
                });
            }
        }, 1000));

        return () => {
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
        };
    }, [inputText, inputTarget, resultTarget])

    
    return(
        <div className={translationStyle['container']}>
            <p className={translationStyle['title']}>번역</p>
            <div className={translationStyle['box']}>
                <div className={translationStyle['input']}>
                    <select value={inputTarget} onChange={(e) => handleLanguageChange(e, 'input')}>
                        <option value='EN'>영어 (미국)</option>
                        <option value='KO'>한국어</option>
                    </select>
                    <textarea
                        className={translationStyle['input-text']}
                        placeholder={inputPlaceholder}
                        value={inputText}
                        onChange={(e) =>{
                            setInputText(e.target.value);
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
                    <textarea
                        className={translationStyle['result-text']}
                        placeholder={resultPlaceholder}
                        value={resultText}
                        onChange={(e) => setResultText(e.target.value)}
                        readOnly
                    />
                </div>
            </div>
        </div>
    )
}

export default Translation;