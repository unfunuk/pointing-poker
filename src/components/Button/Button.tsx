import classNames from "classnames";
import React from "react";
import "./button.scss";

function Button({ type }: { type: string }): JSX.Element {
  const btnClass = classNames("btn", {
    "btn-primary": type === "primary",
    "btn-additional": type === "additional",
  });
  return <div className={btnClass}>Button</div>;
}

export default Button;
