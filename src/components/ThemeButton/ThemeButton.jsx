import React from 'react';
import ThemeContext from "../../contexts/ThemeContext";
import { useContext } from "react";
import { SunOutlined } from '@ant-design/icons';
import { MoonOutlined } from '@ant-design/icons';
import './ThemeButton.css';

const ThemeButton = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <div>
        <button onClick={toggleTheme} className="btn-icon">
          {theme === "light" ? <MoonOutlined /> : <SunOutlined />}
        </button>
      </div>
    );
}

export default ThemeButton;
