import React from "react";
import "./header.scss";

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header__top"></div>
      <div className="header__bottom"></div>
      <img
        className="header__logo"
        src={`${window.location.origin}/logo.ico`}
        alt="logo"
      />
    </header>
  );
}

export default Header;
