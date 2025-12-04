// import "./App.css"
// import logo from "./logo.svg"

import { Outlet } from "react-router";
import MainMenu from "./components/templates/MainMenu";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import I18nButton from "./components/I18n/I18nButton";

function App() {

  return (
    <>
      <header>
        <MainMenu />
        <div className="contexts">
          <ThemeButton />
          <I18nButton />
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default App;

