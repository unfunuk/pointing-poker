import React from "react";
import "./card.scss";
import { CardValue } from "./types";

function Card({
  value,
  content,
  onClick,
  onDeleteCardClick,
  id,
}: CardValue): JSX.Element {
  const regExp = /(\W|^)http|png(\W|$)/;
  const isImage = (imageSrc: string) => regExp.test(imageSrc);

  return (
    <div className="card" onClick={onClick}>
      {value && <p className="card__top">{value}</p>}
      {value && (
        <img
          src="delete.svg"
          alt="delete card"
          className="card__delete"
          id={id}
          onClick={onDeleteCardClick}
        />
      )}
      {isImage(content) ? (
        <img src={content} alt={content} className="card__content_img" />
      ) : (
        <p className="card__content">{content}</p>
      )}
      {value && <p className="card__bottom">{value}</p>}
    </div>
  );
}
export default Card;
