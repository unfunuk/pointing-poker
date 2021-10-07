import React from "react";
import "./avatar.scss";
import { AvatarProps } from "./types";

function Avatar({ initials, imageSource }: AvatarProps): JSX.Element {
  return (
    <div className="avatar">
      {imageSource ? (
        <img className="avatar__image" src={imageSource} alt="avatar" />
      ) : (
        initials
      )}
    </div>
  );
}

export default Avatar;
