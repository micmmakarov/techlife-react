import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </div>
  );
}

export default Navigation;
