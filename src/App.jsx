// import "./App.css"
// import logo from "./logo.svg"

import { Outlet } from "react-router";
import MainMenu from "./components/templates/MainMenu";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import I18nButton from "./components/I18n/I18nButton";
import { Link } from "react-router";
import { UserOutlined } from '@ant-design/icons';
import './components/user-icon/UserIcon.css';

function App() {

  return (
    <>
      <header>
        <MainMenu />
        <div className="contexts">
          <Link to="/registration"><UserOutlined className="user-icon"/></Link>
          <ThemeButton />
          <I18nButton />
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default App;

