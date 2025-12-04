import React from 'react';
import { NavLink } from "react-router";

const MainMenu = () => {
    return (
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/user">user</NavLink>
      </nav>
    );
}

export default MainMenu;
