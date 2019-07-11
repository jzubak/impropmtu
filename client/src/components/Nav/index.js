import React from "react";
import Logo from "../../images/logo(horizontal).png"
import Icon from "../../images/icon.png"
import "./style.css"

function Nav() {
  return (
    <nav className="navbar">
      <a className="" href="/">
        <img src={Logo} alt="logo" className="height mt-1 full"></img>
        <img src={Icon} alt="logo" className="height mt-1 icon"></img>
      </a>
    </nav>
  );
}

export default Nav;

