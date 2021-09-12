import React, { useState } from "react";
import Button from "../Button/Button";
import { Buttons } from "../Button/constants";
import Switcher from "../Switcher/Switcher";
import { Labels } from "./constants";
import "./pop-up.scss";

function PopUp(): JSX.Element {
  const [fileText, setFileText] = useState("Choose file");
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const currentFiles = event.target.files as FileList;
    if (currentFiles.length !== 0) {
      setFileText(`File: ${currentFiles[0].name}`);
    } else {
      setFileText("Choose file");
    }
  }
  return (
    <div className="pop-up">
      <div className="pop-up__content">
        <div className="pop-up__header">
          <span className="pop-up__title">Connect to lobby</span>
          <Switcher />
        </div>
        <form className="pop-up__form form">
          {/* {Labels.map((value) => (
            <Input value={value} key={value} />
          ))} */}
          <label htmlFor="file-input" className="form__label">
            <p className="form__paragraph">Image:</p>
            <input
              id="file-input"
              type="file"
              className="form__input input"
              onChange={handleFileChange}
            />
            <div className="input__field">{fileText}</div>
          </label>
        </form>
        <div className="pop-up__buttons">
          <Button type={Buttons.Primary} text="Confirm" />
          <Button type={Buttons.Secondary} text="Cancel" />
        </div>
      </div>
    </div>
  );
}

export default PopUp;
