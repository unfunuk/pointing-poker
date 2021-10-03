import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { Buttons } from "../../Button/constants";
import { GeneralPopUpProps } from "./types";
import "./generalPopUp.scss";
import { PopUpComponents } from "./constants";
import MainPagePopUp from "../MainPagePopUp/MainPagePopUp";
import { createPortal } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../../api/api";

function GeneralPopUp({
  popUpComponent,
  isDealer,
  isOpen,
  onClose,
  leftButtonText,
  rightButtonText,
  sessionId,
}: GeneralPopUpProps): JSX.Element {
  const history = useHistory();
  const [chooseImageButtonText, setChooseImageButtonText] =
    useState<string>("Choose file");
  const [imageSource, setImageSource] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [jobPosition, setJobPosition] = useState<string>("");
  const [initials, setInitials] = useState<string>("");
  const [isObserver, setIsObserver] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const handleSubmit = async () => {
    if (popUpComponent === PopUpComponents.MainPage) {
      if (firstName !== "") {
        const newSessionId = uuidv4();
        const id = uuidv4();
        if (isDealer) {
          try {
            await axiosInstance.post("/users", {
              firstName,
              lastName,
              jobPosition,
              initials,
              role: "dealer",
              avatarSource: imageSource,
              sessionId: newSessionId,
              id,
            });
            await axiosInstance.post(`/session`, { sessionId: newSessionId });
            onClose();
            history.push("/settings");
          } catch (e) {
            console.error(e);
          }
        } else {
          await axiosInstance.post("/users", {
            firstName,
            lastName,
            jobPosition,
            initials,
            role: isObserver ? "observer" : "player",
            avatarSource: imageSource,
            sessionId,
            id,
          });
          onClose();
          history.push(`/lobby/${sessionId}`);
        }
      } else {
        setError("Enter first name");
      }
    }
  };
  useEffect(() => {
    if (firstName !== "") {
      setError("");
    }
  }, [firstName]);
  const handleCancel = () => onClose();

  if (!isOpen) return <></>;
  return createPortal(
    <div className="pop-up">
      <div className="pop-up__content">
        {popUpComponent === PopUpComponents.MainPage && (
          <MainPagePopUp
            error={error}
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
