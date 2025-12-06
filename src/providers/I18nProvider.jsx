import React, {useState, useEffect} from 'react';
import I18nContext from '../contexts/I18nContext';
import translations from '../translations/translations';

const I18nProvider = ({children}) => {

    const [currentLang, setCurrentLang] = useState('EN');

    useEffect(() => {
        const savedLang = localStorage.getItem("lang");
        if (savedLang) setCurrentLang(savedLang);
    }, []);

    const changeLang = (lang) => {
        if(translations[lang]){
            setCurrentLang(lang);
            localStorage.setItem('lang', lang);
        }        
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
