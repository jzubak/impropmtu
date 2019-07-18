import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import Logo from "../../images/logo(horizontal).png"
import Icon from "../../images/icon.png"
import "./style.css"


  const Nav = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="navbar">
      <a className="" href="/">
        <img src={Logo} alt="logo" className="height mt-1 full"></img>
        <img src={Icon} alt="logo" className="height mt-1 icon"></img>
      </a>
      <div>
      {!isAuthenticated && (
        <button className="font login"
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button className="font login" onClick={() => logout()}>Log out</button>}
    </div>
    </nav>
  );
}

export default Nav;

