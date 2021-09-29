import React, { useState } from "react";
import Button from "../../Button/Button";
import { Buttons } from "../../Button/constants";
import { GeneralPopUpProps } from "./types";
import "./generalPopUp.scss";
import { PopUpComponents } from "./constants";
import MainPagePopUp from "../MainPagePopUp/MainPagePopUp";
import { createPortal } from "react-dom";

function GeneralPopUp({
  popUpComponent,
  isDealer,
  isOpen,
  onClose,
  leftButtonText,
  rightButtonText,
}: GeneralPopUpProps): JSX.Element {
  const [chooseImageButtonText, setChooseImageButtonText] =
    useState<string>("Choose file");
  const [imageSource, setImageSource] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [jobPosition, setJobPosition] = useState<string>("");
  const [initials, setInitials] = useState<string>("");
  const [isObserver, setIsObserver] = useState<boolean>(false);

  const handleSubmit = () => {
    if (popUpComponent === PopUpComponents.MainPage) {
      if (firstName !== "") {
        onClose();
      }
    }
  };
  const handleCancel = () => onClose();

  if (!isOpen) return <></>;
  return createPortal(
    <div className="pop-up">
      <div className="pop-up__content">
        {popUpComponent === PopUpComponents.MainPage && (
          <MainPagePopUp
            imageSource={imageSource}
            setImageSource={setImageSource}
            chooseImageButtonText={chooseImageButtonText}
            setChooseImageButtonText={setChooseImageButtonText}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            jobPosition={jobPosition}
            setJobPosition={setJobPosition}
            initials={initials}
            setInitials={setInitials}
            isObserver={isObserver}
            setIsObserver={setIsObserver}
            isDealer={isDealer}
          />
        )}
        <div className="pop-up__buttons">
          <Button
            type={Buttons.Primary}
            text={leftButtonText}
            onClick={handleSubmit}
          />
          <Button
            type={Buttons.Secondary}
            text={rightButtonText}
            onClick={handleCancel}
          />
        </div>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
}

export default GeneralPopUp;
