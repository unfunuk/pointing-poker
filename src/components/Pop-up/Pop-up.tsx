import React, { useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { Buttons } from "../Button/constants";
import Input from "../Input/Input";
import Switcher from "../Switcher/Switcher";
import { Labels } from "./constants";
import "./pop-up.scss";

function PopUp(): JSX.Element {
  const [chooseImageButtonText, setChooseImageButtonText] =
    useState<string>("Choose file");
  const [imageSource, setImageSource] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [jobPosition, setJobPosition] = useState<string>("");
  const [initials, setInitials] = useState<string>("");
  const [isObserver, setIsObserver] = useState<boolean>(false);

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
      setChooseImageButtonText(`File: ${currentFiles[0].name}`);
      setImageSource(`${URL.createObjectURL(currentFiles[0])}`);
    } else {
      setChooseImageButtonText("Choose file");
      setImageSource("");
    }
  }
  const handleSubmit = () => {};
  const handleCancel = () => {
    setFirstName("");
    setImageSource("");
    setLastName("");
    setIsObserver(false);
    setJobPosition("");
  };
  return (
    <div className="pop-up">
      <div className="pop-up__content">
        <div className="pop-up__header">
          <span className="pop-up__title">Connect to lobby</span>
          <Switcher
            label="Connect as Observer"
            onIsObserverChange={setIsObserver}
          />
        </div>
        <div className="pop-up__main">
          <form className="pop-up__form">
            <Input
              label={Labels.FirstName}
              onValueChange={setFirstName}
              value={firstName}
            />
            <Input
              label={Labels.LastName}
              onValueChange={setLastName}
              value={lastName}
            />
            <Input
              label={Labels.JobPosition}
              onValueChange={setJobPosition}
              value={jobPosition}
            />
            <label htmlFor="file-input" className="form__label">
              <p className="form__paragraph">Image:</p>
              <input
                id="file-input"
                type="file"
                className="form__input"
                onChange={handleFileChange}
              />
              <div className="input__button">{chooseImageButtonText}</div>
            </label>
          </form>
          <Avatar initials={initials} imageSource={imageSource} />
        </div>
        <div className="pop-up__buttons">
          <Button
            type={Buttons.Primary}
            text="Confirm"
            onClick={handleSubmit}
          />
          <Button
            type={Buttons.Secondary}
            text="Cancel"
            onClick={handleCancel}
          />
        </div>
      </div>
    </div>
  );
}

export default PopUp;
