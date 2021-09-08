import React from "react";
import classNames from "classnames";
import "./button.scss";
import { Buttons } from "./constants";
import { ButtonProps } from "./types";

function Button({ type, text }: ButtonProps): JSX.Element {
  const className = classNames("button", {
    button_primary: type === Buttons.Primary,
    button_secondary: type === Buttons.Secondary,
  });
  return <button className={className}>{text}</button>;
}

export default Button;
