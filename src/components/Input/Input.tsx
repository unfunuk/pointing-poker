import React, { useState } from "react";

import "./input.scss";

function Input(): JSX.Element {
  const [value, setValue] = useState("");

  return (
    <div className="input">
      <label>
        <p className="input__description">Label:</p>
        <input
          className="input__field"
          type="text"
          name="input"
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
          }}
        />
      </label>
      {/* TO DO: add Button component after its merge */}
    </div>
  );
}

export default Input;
