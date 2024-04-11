import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import translationStyle from '../../styles/translation/translationPage.module.css';

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

    useEffect(() => {
        const debouncedTranslateText = debounce(translateText, 300);
        return () => {
            debouncedTranslateText.cancel();
        };
    }, []);

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

    const translateText = function(text) {
        const authKey = "c329d234-0b70-43e7-a803-e91eba9a9b61:fx"
        fetch("/deepl/v2/translate", 
          {
            method: "POST",
            headers: {
                "Authorization": "DeepL-Auth-Key " + authKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({ "text": [text], "target_lang": "JA" })
        }).then(res => res.json())
        .then(data => {
            setResultText(data.translations[0].text)
            console.log(data)
        })
    }

    return(
        <div className={translationStyle['container']}>
            <p className={translationStyle['title']}>번역</p>

            <div className={translationStyle['box']}>
                <div className={translationStyle['input']}>
                    <select value={inputTarget} onChange={(e) => handleLanguageChange(e, 'input')}>
                        <option value='EN'>영어 (미국)</option>
                        <option value='KO' selected>한국어</option>
                    </select>
                    <input
                        className={translationStyle['input-text']}
                        placeholder={inputPlaceholder}
                        value={inputText}
                        onChange={(e) => {
                            setInputText(e.target.value);
                            translateText(e.target.value);
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
                        <option value='EN' selected>영어 (미국)</option>
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