import React, { useState } from "react";

import "./input.scss";
import { InputProps } from "./types";

function Input({ Button, label, setUpperValue }: InputProps): JSX.Element {
  const [value, setValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if(setUpperValue){
      setUpperValue(event.target.value);
    } 
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
          onChange={onChange}
        />
      </label>
      {Button ? Button : null}
    </div>
  );
}

export default Input;
