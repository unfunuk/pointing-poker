import React from "react";

import "./input.scss";
import { InputProps } from "./types";

function Input({
  Button,
  label,
  onValueChange,
  value,
  readOnly,
}: InputProps): JSX.Element {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onValueChange) {
      onValueChange(event.target.value);
    }
  };

  return (
    <div className="input">
      <label>
        {label ? <span className="input__description">{label}</span> : null}
        <input
          className="input__field"
          type="text"
          name="input"
          value={value}
          onChange={handleInput}
          readOnly={readOnly}
        />
      </label>
      {Button ? Button : null}
    </div>
  );
}

export default Input;
