import React from "react";
import "./card.scss";
import { CardValue } from "./types";

function Card({ value, content }: CardValue): JSX.Element {
  return (
    <div className="card">
      <p className="card__top">{value}</p>
      <p className="card__content">{content}</p>
      <p className="card__bottom">{value}</p>
    </div>
  );
}
export default Card;
