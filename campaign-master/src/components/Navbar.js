import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.png";

const Navbar = ({ location }) => {
  const { pathname } = location;
  return (
    <nav
      className={`w-full py-3 lg:px-20 px-5 flex flex-col lg:flex-row items-center ${
        pathname === "/home" ? "text-white" : "text-black"
      }`}
    >
      <div className="w-24 mr-20 mb-5 text-right">
        <img src={logo} />
      </div>
      <ul className="flex lg:flex-row flex-col items-center uppercase text-sm">
        <li className="mr-10 mb-5 lg:mb-0">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="mr-10 mb-5 lg:mb-0">
          <NavLink to="/priorities">priorities</NavLink>
        </li>
        <li className="mr-10 mb-5 lg:mb-0">
          <NavLink to="/news">Events and News</NavLink>
        </li>
        <li className="mr-10 mb-5 lg:mb-0">
          <NavLink to="/about">About Yahaya</NavLink>
        </li>
        <li className="bg-red-600 py-3 px-10 rounded-md text-white">
          <a href="#">Become a volunteer</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
