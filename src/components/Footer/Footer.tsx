import React from "react";
import { GITHUBS } from "./constants";
import "./footer.scss";

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__githubs">
        {GITHUBS.map(({ url, id }) => (
          <a key={id} href={url}>
            <img
              className="footer__github_icon"
              src="github.ico"
              alt="github-picture"
            />
            <span className="footer__github_id">{id}</span>
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
