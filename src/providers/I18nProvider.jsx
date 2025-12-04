import React, {useState} from 'react';
import I18nContext from '../contexts/I18nContext';
import translations from '../translations/translations';

const I18nProvider = ({children}) => {

    const [currentLang, setCurrentLang] = useState('EN');

    const changeLang = (lang) => {
        if(translations[lang])
            setCurrentLang(lang);
    }

    const currentTexts = () => {
        return translations[currentLang];
    }

    const contextValue ={
        currentLang,
        changeLang,
        texts: currentTexts()
    }

    return (
        <I18nContext.Provider value={contextValue}>
            {children}
        </I18nContext.Provider>
    );
}

export default I18nProvider;
