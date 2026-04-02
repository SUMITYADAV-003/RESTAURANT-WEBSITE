import React from "react";
import { NavLink } from "react-router-dom";
import "../components/style/Nav.scss";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className={(e) => e.isActive && "navlink"}>
        Home
      </NavLink>
      <NavLink to="/about" className={(e) => e.isActive && "navlink"}>
        About
      </NavLink>
      <NavLink to="/recipes" className={(e) => e.isActive && "navlink"}>
        Recipes
      </NavLink>
      <NavLink to="/create-recipes" className={(e) => e.isActive && "navlink"}>
        Crete-recipes
      </NavLink>
    </nav>
  );
};

export default Navbar;
