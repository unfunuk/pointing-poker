import React, { useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { Buttons } from "../Button/constants";
import Input from "../Input/Input";
import Switcher from "../Switcher/Switcher";
import { Labels } from "./constants";
import "./pop-up.scss";

function PopUp(): JSX.Element {
  const [fileText, setFileText] = useState<string>("Choose file");
  const [imageSource, setImageSource] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [jobPosition, setJobPosition] = useState<string>("");
  const [initials, setInitials] = useState<string>("");

  useEffect(() => {
    setInitials(
      `${firstName !== "" ? firstName[0].toUpperCase() : ""}${
        lastName !== "" ? lastName[0].toUpperCase() : ""
      }`
    );
  }, [firstName, lastName]);
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const currentFiles = event.target.files as FileList;
    if (currentFiles.length !== 0) {
      setFileText(`File: ${currentFiles[0].name}`);
      setImageSource(`${URL.createObjectURL(currentFiles[0])}`);
    } else {
      setFileText("Choose file");
      setImageSource("");
    }
  }
  return (
    <div className="pop-up">
      <div className="pop-up__content">
        <div className="pop-up__header">
          <span className="pop-up__title">Connect to lobby</span>
          <Switcher label="Connect as Observer" />
        </div>
        <div className="pop-up__main">
          <form className="pop-up__form form">
            <Input label={Labels[0]} setUpperValue={setFirstName} />
            <Input label={Labels[1]} setUpperValue={setLastName} />
            <Input label={Labels[2]} setUpperValue={setJobPosition} />
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
          <Avatar initials={initials} imageSource={imageSource} />
        </div>
        <div className="pop-up__buttons">
          <Button type={Buttons.Primary} text="Confirm" />
          <Button type={Buttons.Secondary} text="Cancel" />
        </div>
      </div>
    </div>
  );
}

export default PopUp;
