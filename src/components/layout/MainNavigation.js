import React from "react";
import {Link} from "react-router-dom";

const MainNavigation = () => {
return <header>
      <div>Test App</div>
      <nav>
        <ul>
          <li>
            <Link to="/github">
              Github wyszukiwarka
            </Link>
          </li>
          <li>
            <Link to="/factorial">
              Siła
            </Link>
          </li>
          <li>
            <Link to="/about">
              O projekcie
            </Link>
          </li>
        </ul>
      </nav>
    </header>
};

export default MainNavigation;