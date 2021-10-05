import React, { useState } from "react";
import Input from "../Input/Input";
import { HeadingModes } from "./constants";
import "./headingSection.scss";
import { HedingSectionProps } from "./types";

function HeadingSection({ textValue }: HedingSectionProps): JSX.Element {
  const [mode, setMode] = useState<HeadingModes>(HeadingModes.DefaultMode);
  const [text, setText] = useState<string>("Heading");
  return (
    <>
      {textValue ? (
        <p className="heading__text">{textValue}</p>
      ) : mode === HeadingModes.DefaultMode ? (
        <div className="heading">
          <p className="heading__text">{text}</p>
          <img
            src="edit.svg"
            className="heading__edit"
            alt="edit"
            onClick={() => setMode(HeadingModes.EditMode)}
          />
        </div>
      ) : (
        <div className="heading">
          <Input onValueChange={setText} value={text} />
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
