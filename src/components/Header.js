import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>
      Budget<b className="header-title-fyi">FYI</b>
    </h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Add Expense
    </NavLink>
    <NavLink to="/about" activeClassName="is-active">
      About
    </NavLink>
    <NavLink to="/contact" activeClassName="is-active">
      Contact
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

export default Header;
