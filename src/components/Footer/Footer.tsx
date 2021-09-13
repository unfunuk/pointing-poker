import React from "react";
import { GITHUBS } from "./constants";
import "./footer.scss";

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__githubs">
        {GITHUBS.map(({ ghlink, name }) => (
          <a key={name} href={ghlink}>
            <img
              className="footer__githubs_icon"
              src="github.ico"
              alt={`github-${name}`}
            />
            <span className="footer__githubs_name">{name}</span>
          </a>
        ))}
      </div>
      <div className="footer__rsshool">
        <a href="https://rs.school/react/">
          <img
            className="footer__rsshool_icon"
            src="rsschool.svg"
            alt="rsschool.svg"
          />
        </a>
        <span className="footer__rsshool_year">2021</span>
      </div>
    </footer>
  );
}
export default Footer;
