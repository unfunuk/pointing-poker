import React from "react";
import classNames from "classnames";
import "./button.scss";
import { Buttons } from "./constants";
import { ButtonProps } from "./types";

function Button({ type, text }: ButtonProps): JSX.Element {
  const className = classNames("button", {
    "button-primary": type === Buttons.Primary,
    "button-secondary": type === Buttons.Secondary,
  });
  return <div className={className}>{text}</div>;
}

export default Button;
