import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>
      Portfolio<b className="header-title-fyi">React</b>
    </h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/portfolio" activeClassName="is-active" exact={true}>
      Portfolio
    </NavLink>
    <NavLink to="/contact" activeClassName="is-active">
      Contact
    </NavLink>
    <NavLink to="/about" activeClassName="is-active">
      About
    </NavLink>
  </header>
);

export default Header;
