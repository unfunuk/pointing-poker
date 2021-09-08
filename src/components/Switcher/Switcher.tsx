import React, { useState } from "react";
import "./switcher.scss";

function Switcher(): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="switcher">
      <label htmlFor="switcher-input" className="switcher-label">
        Label:
        <input
          checked={isActive}
          type="checkbox"
          id="switcher-input"
          className="switcher-input"
          onChange={() => {
            setIsActive(!isActive);
          }}
        />
        <span className="switcher-button" />
      </label>
    </div>
  );
}

export default Switcher;
