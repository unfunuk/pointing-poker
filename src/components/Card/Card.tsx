import React from "react";
import "./card.scss";
import { CardValue } from "./types";

function Card({ value, content }: CardValue): JSX.Element {
  const regExp = /(?:jpg|jpeg|png|ico)$/;

  return (
    <div className="card">
      <p className="card__top">{value}</p>
      {regExp.test(content) ? (
        <img src={content} alt={content} className="card__content_img" />
      ) : (
        <p className="card__content">{content}</p>
      )}
      <p className="card__bottom">{value}</p>
    </div>
  );
}
export default Card;
