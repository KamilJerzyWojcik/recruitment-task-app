import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
return <header className={classes.header}>
      <div className={classes.logo}>Test App</div>
      <nav className={classes.nav}>
        <ul className={classes.navigation}>
          <li className={classes.navigation__item}>
            <NavLink to="/github"
            className = {({ isActive }) => (isActive ? `${classes.navigation__link + " " + classes.active}` : classes.navigation__link)}
            >
              Github wyszukiwarka
            </NavLink>
          </li>
          <li className={classes.navigation__item}>
            <NavLink to="/factorial" 
            className = {({ isActive }) => (isActive ? `${classes.navigation__link + " " + classes.active}` : classes.navigation__link)}>
              Siła
            </NavLink>
          </li>
          <li className={classes.navigation__item}>
            <NavLink to="/about"
            className = {({ isActive }) => (isActive ? `${classes.navigation__link + " " + classes.active}` : classes.navigation__link)}>
              O projekcie
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
};

export default MainNavigation;