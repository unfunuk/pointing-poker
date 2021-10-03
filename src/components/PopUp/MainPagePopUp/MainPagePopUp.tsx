import React, { useEffect } from "react";
import Avatar from "../../Avatar/Avatar";
import Input from "../../Input/Input";
import Switcher from "../../Switcher/Switcher";
import { Labels } from "../GeneralPopUp/constants";
import "./mainPagePopUp.scss";
import { MainPagePopUpProps } from "./types";

function MainPagePopUp({
  chooseImageButtonText,
  setChooseImageButtonText,
  imageSource,
  setImageSource,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  jobPosition,
  setJobPosition,
  initials,
  setInitials,
  isObserver,
  setIsObserver,
  isDealer,
  error,
}: MainPagePopUpProps): JSX.Element {
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

  return (
    <>
      <div className="pop-up__header">
        <span className="pop-up__title">Connect to lobby</span>
        {!isDealer && (
          <Switcher
            label="Connect as Observer"
            onIsObserverChange={setIsObserver}
          />
        )}
      </div>
      <div className="pop-up__main">
        <form className="pop-up__form">
          <Input
            label={Labels.FirstName}
            onValueChange={setFirstName}
            value={firstName}
          />
          <span style={{ color: "red" }}>{error}</span>
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
            <div className="input__file">{chooseImageButtonText}</div>
          </label>
        </form>
        <Avatar initials={initials} imageSource={imageSource} />
      </div>
    </>
  );
}
export default MainPagePopUp;
