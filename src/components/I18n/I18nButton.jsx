import React from 'react';
import { useContext } from 'react';
import I18nContext from '../../contexts/I18nContext';
import './I18nButton.css';

const I18nButton = () => {

    const { currentLang, changeLang } = useContext(I18nContext);

    return (
      <div>
        <button onClick={() => {currentLang === "UA" ? changeLang("EN") : changeLang("UA");}} className='btn-i18n'>
          {currentLang}
        </button>
      </div>
    );
}

export default I18nButton;
