import React, { useState } from "react";
import "./switcher.scss";
import { SwitcherProps } from "./types";

function Switcher({ value }: SwitcherProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="switcher">
      <label htmlFor="switcher-input" className="switcher__label">
        {value}
        <input
          checked={isActive}
          type="checkbox"
          id="switcher-input"
          className="switcher__input"
          onChange={handleToggle}
        />
        <span className="switcher__button" />
      </label>
    </div>
  );
}

export default Switcher;
