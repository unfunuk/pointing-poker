import React, { useState } from "react";
import { HeadingModes } from "./constants";
import "./headingSection.scss";

function HeadingSection(): JSX.Element {
  const [mode, setMode] = useState<HeadingModes>(HeadingModes.DefaultMode);
  const [text, setText] = useState<string>("Heading");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <>
      {mode === HeadingModes.DefaultMode ? (
        <div className="heading">
          <p>{text}</p>
          <img
            src="edit.svg"
            className="heading__edit"
            alt="edit"
            onClick={() => setMode(HeadingModes.EditMode)}
          />
        </div>
      ) : (
        <div className="heading">
          <input
            className="heading__input"
            type="text"
            onChange={handleInput}
          />
          <img
            src="edit.svg"
            className="heading__edit"
            alt="edit"
            onClick={() => setMode(HeadingModes.DefaultMode)}
          />
        </div>
      )}
    </>
  );
}

export default HeadingSection;
