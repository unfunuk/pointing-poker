import React from "react";
import "./avatar.scss";
import { AvatarProps } from "./types";

function Avatar({ initials, imgUrl }: AvatarProps): JSX.Element {
  return (
    <div className="avatar">
      {imgUrl ? (
        <img className="avatar__img" src={imgUrl} alt="avatar" />
      ) : (
        <>
          {initials.firstName !== ""
            ? initials.firstName[0].toUpperCase()
            : null}
          {initials.lastName !== "" ? initials.lastName[0].toUpperCase() : null}
        </>
      )}
    </div>
  );
}

export default Avatar;
