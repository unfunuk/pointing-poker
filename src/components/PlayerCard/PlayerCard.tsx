import React from "react";
import Avatar from "../Avatar/Avatar";
import "./playerCard.scss";
import { PlayerCardProps } from "./types";

function PlayerCard({
  userData: { firstName, lastName, jobPosition, avatarSource, initials },
  isThatYou,
  isSmth,
}: PlayerCardProps): JSX.Element {
  return (
    <div className="playerCard">
      {avatarSource ? (
        <Avatar initials={initials} imageSource={avatarSource} />
      ) : (
        <Avatar initials={initials} />
      )}
      <div className="playerCard__info">
        {isThatYou && <div className="playerCard__aboutYou">It`s you</div>}
        <div className="playerCard__name">{`${firstName} ${lastName}`}</div>
        <div className="playerCard__jobPosition">{jobPosition}</div>
      </div>
      {isSmth && (
        <img
          className="playerCard__removeImage"
          alt="removeCard"
          src="vector.png"
        />
      )}
    </div>
  );
}

export default PlayerCard;
