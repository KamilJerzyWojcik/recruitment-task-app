import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
return <header className={classes.header}>
      <div className={classes.logo}>Test App</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/github"
            className = {({ isActive }) => (isActive ? classes.active : "")}>
              Github wyszukiwarka
            </NavLink>
          </li>
          <li>
            <NavLink to="/factorial" 
            className = {({ isActive }) => (isActive ? classes.active : "")}>
              Siła
            </NavLink>
          </li>
          <li>
            <NavLink to="/about"
            className = {({ isActive }) => (isActive ? classes.active : "")}>
              O projekcie
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
};

export default MainNavigation;