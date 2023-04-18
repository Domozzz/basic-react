import React from "react";
import Logo from "../image/logo.png";
import "./Header.css";

function Header({ title }) {
  return (
    <div>
      <nav>
        <img src={Logo} alt="logo" className="logo" />
        <a href="/">{title}</a>
      </nav>
    </div>
  );
}

export default Header;
