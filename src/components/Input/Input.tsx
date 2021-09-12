import React, { useState } from "react";

import "./input.scss";
import { InputProps } from "./types";

function Input({ Button, text, setUpperValue }: InputProps): JSX.Element {
  const [value, setValue] = useState("");

  const setValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setUpperValue(event.target.value); // поднимает значение вверх
  };

  return (
    <div className="input">
      <label>
        {text ? <p className="input__description">{text}</p> : null}
        <input
          className="input__field"
          type="text"
          name="input"
          value={value}
          onChange={setValues}
        />
      </label>
      {Button ? Button : null}
    </div>
  );
}

export default Input;
