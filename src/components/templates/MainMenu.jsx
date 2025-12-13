import React from 'react';
import { NavLink } from "react-router";

const MainMenu = () => {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">User</NavLink>
        <NavLink to="/select-date">Date</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/weather">Weather</NavLink>
      </nav>
    );
}

export default MainMenu;
