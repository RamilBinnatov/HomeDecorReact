import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list--item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navbar__list--item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="navbar__list--item">
            <NavLink to="/product">Products</NavLink>
          </li>
          <li className="navbar__list--item">
            <NavLink to="/collection">Collections</NavLink>
          </li>
          <li className="navbar__list--item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
