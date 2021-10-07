import React, { useState } from "react";
import Input from "../Input/Input";
import { HeadingModes } from "./constants";
import "./headingSection.scss";
import { HedingSectionProps } from "./types";

function HeadingSection({
  textValue,
  text,
  setText,
}: HedingSectionProps): JSX.Element {
  const [mode, setMode] = useState<HeadingModes>(HeadingModes.DefaultMode);
  return (
    <>
      {textValue ? (
        <p className="heading__text">{textValue}</p>
      ) : mode === HeadingModes.DefaultMode ? (
        <div className="heading">
          {text && <p className="heading__text">{text}</p>}
          {text && (
            <img
              src="edit.svg"
              className="heading__edit"
              alt="edit"
              onClick={() => setMode(HeadingModes.EditMode)}
            />
          )}
        </div>
      ) : (
        <div className="heading">
          {text && <Input onValueChange={setText} value={text} />}
          {text && (
            <img
              src="edit.svg"
              className="heading__edit"
              alt="edit"
              onClick={() => setMode(HeadingModes.DefaultMode)}
            />
          )}
        </div>
      )}
    </>
  );
}

export default HeadingSection;
