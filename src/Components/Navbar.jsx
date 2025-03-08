import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="logo"> */}
      <img className="logo" src="./logo.png" alt="logo" />
      {/* </div> */}
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="hire-me">Hire Me</button>
    </nav>
  );
};

export default Navbar;
