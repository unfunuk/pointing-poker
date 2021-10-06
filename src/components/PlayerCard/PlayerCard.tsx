import React from "react";
import Avatar from "../Avatar/Avatar";
import "./playerCard.scss";
import { PlayerCardProps } from "./types";

function PlayerCard({
  userData: { firstName, lastName, jobPosition, avatarSource, initials, id },
  isCurrentPlayer,
  shouldShowRemoveButton,
  onClick,
}: PlayerCardProps): JSX.Element {
  return (
    <div className="playerCard">
      {avatarSource ? (
        <Avatar initials={initials} imageSource={avatarSource} />
      ) : (
        <Avatar initials={initials} />
      )}
      <div className="playerCard__info">
        {isCurrentPlayer && (
          <div className="playerCard__aboutYou">It`s you</div>
        )}
        <div className="playerCard__name">{`${firstName} ${lastName}`}</div>
        <div className="playerCard__jobPosition">{jobPosition}</div>
      </div>
      {shouldShowRemoveButton && (
        <img
          className="playerCard__removeImage"
          alt="Remove card icon"
          src="removeCardIcon.png"
          id={String(id)}
          onClick={onClick}
        />
      )}
    </div>
  );
}

export default PlayerCard;
