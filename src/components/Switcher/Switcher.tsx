import React, { useState } from "react";
import "./switcher.scss";
import { SwitcherProps } from "./types";

function Switcher({ label, onChange, id }: SwitcherProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    onChange(!isActive);
    setIsActive(!isActive);
  };

  return (
    <div className="switcher">
      <label htmlFor={id} className="switcher__label">
        <span className="switcher__labelText">{label}</span>
        <input
          checked={isActive}
          type="checkbox"
          id={id}
          className="switcher__input"
          onChange={handleToggle}
        />
        <span className="switcher__button" />
      </label>
    </div>
  );
}

export default Switcher;
