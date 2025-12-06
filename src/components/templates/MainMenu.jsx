import React from 'react';
import { NavLink } from "react-router";

const MainMenu = () => {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/user">User</NavLink>
        <NavLink to="/select-date">Date</NavLink>
      </nav>
    );
}

export default MainMenu;
