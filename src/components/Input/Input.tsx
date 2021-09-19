import React from "react";

import "./input.scss";
import { InputProps } from "./types";

function Input({
  Button,
  label,
  onValueChange,
  value,
}: InputProps): JSX.Element {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  return (
    <div className="input">
      <label>
        {label ? <p className="input__description">{label}</p> : null}
        <input
          className="input__field"
          type="text"
          name="input"
          value={value}
          onChange={handleInput}
        />
      </label>
      <p className="input__button"> {Button ? Button : null} </p>
    </div>
  );
}

export default Input;
