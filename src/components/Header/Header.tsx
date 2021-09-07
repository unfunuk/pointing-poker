import React from "react";
import "./header.scss";

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header-top"></div>
      <div className="header-botton"></div>
      <img className="header-logo" src="favicon.ico" alt="logo" />
    </header>
  );
}

export default Header;
