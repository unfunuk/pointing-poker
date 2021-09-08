import React, { useState } from "react";
import "./switcher.scss";

function Switcher(): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="switcher">
      <label htmlFor="switcher__input" className="switcher__label">
        Label:
        <input
          checked={isActive}
          type="checkbox"
          id="switcher__input"
          className="switcher__input"
          onChange={() => {
            setIsActive(!isActive);
          }}
        />
        <span className="switcher__button" />
      </label>
    </div>
  );
}

export default Switcher;
