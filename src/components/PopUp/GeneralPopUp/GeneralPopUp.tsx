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
import IssuePopUp from "../IssuePopUp/IssuePopUp";
import { Priorities } from "../../Issue/constants";
import CardPopUp from "../CardPopUp/CardPopUp";
import { TypeofCards } from "../../../pages/constants";

function GeneralPopUp({
  popUpComponent,
  isDealer,
  isOpen,
  onClose,
  leftButtonText,
  rightButtonText,
  sessionId,
  title,
  isCreateIssue,
  issueId,
  scoreType,
  typeOfCards,
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
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [issueNameError, setIssueNameError] = useState<string>("");
  const [issueName, setIssueName] = useState<string>("");
  const [cardValue, setCardValue] = useState<string>("");
  const [issuePriority, setIssuePriority] = useState<Priorities>(
    Priorities.Hight
  );
  const [cardValueError, setCardValueError] = useState<string>("");

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
            sessionStorage.clear();
            sessionStorage.setItem(
              "user",
              JSON.stringify({
                firstName,
                lastName,
                jobPosition,
                initials,
                role: "dealer",
                avatarSource: imageSource,
                sessionId: newSessionId,
                id,
              })
            );
            await axiosInstance.post(`/session`, {
              sessionId: newSessionId,
              isGameStarted: false,
            });
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
          sessionStorage.clear();
          sessionStorage.setItem(
            "user",
            JSON.stringify({
              firstName,
              lastName,
              jobPosition,
              initials,
              role: isObserver ? "observer" : "player",
              avatarSource: imageSource,
              sessionId,
              id,
            })
          );
          onClose();
          history.push(`/lobby/${sessionId}`);
        }
      }
      setChooseImageButtonText("Choose File");
      setImageSource("");
    }
    if (popUpComponent === PopUpComponents.Issue && isCreateIssue) {
      if (issueName !== "") {
        const id = uuidv4();
        try {
          await axiosInstance.post("/issues", {
            priority: issuePriority,
            title: issueName,
            sessionId,
            id,
          });
          onClose();
        } catch (e) {
          console.error(e);
        }
      }
    }
    if (popUpComponent === PopUpComponents.Issue && !isCreateIssue) {
      try {
        await axiosInstance.put(`/issues/id/${issueId}`, {
          priority: issuePriority,
          title: issueName,
        });
        onClose();
      } catch (e) {
        console.error(e);
      }
    }
    if (popUpComponent === PopUpComponents.Card && cardValueError === "") {
      const id = uuidv4();
      try {
        await axiosInstance.post(`/cards`, {
          value: cardValue,
          id,
          sessionId,
          content: imageSource === "" ? scoreType : imageSource,
        });
        onClose();
      } catch (e) {
        console.error(e);
      }
    }
  };
  useEffect(() => {
    if (firstName !== "") {
      setFirstNameError("");
    } else {
      setFirstNameError("Enter first name");
    }
  }, [firstName]);
  useEffect(() => {
    if (issueName !== "") {
      setIssueNameError("");
    } else {
      setIssueNameError("Enter issue title");
    }
  }, [issueName]);
  function isSquare(num: number) {
    return num > 0 && Math.sqrt(num) % 1 === 0;
  }
  function isFibonacci(num: number) {
    if (isSquare(5 * (num * num) - 4) || isSquare(5 * (num * num) + 4)) {
      return true;
    } else {
      return false;
    }
  }
  function isPowerOfTwo(x: number) {
    return (Math.log(x) / Math.log(2)) % 1 === 0;
  }
  useEffect(() => {
    if (typeOfCards === TypeofCards.FibonacciNumbers) {
      if (cardValue !== "" && isFibonacci(Number(cardValue))) {
        setCardValueError("");
      } else {
        setCardValueError(`Enter ${typeOfCards}`);
      }
    } else {
      if (cardValue !== "" && isPowerOfTwo(Number(cardValue))) {
        setCardValueError("");
      } else {
        setCardValueError(`Enter ${typeOfCards}`);
      }
    }
  }, [cardValue, typeOfCards]);

  const handleCancel = () => {
    onClose();
    setChooseImageButtonText("Choose file");
    setFirstName("");
    setImageSource("");
    setIssueName("");
  };

  if (!isOpen) return <></>;
  return createPortal(
    <div className="pop-up">
      <div className="pop-up__content">
        {popUpComponent === PopUpComponents.MainPage &&
          isDealer !== undefined && (
            <MainPagePopUp
              title={title}
              error={firstNameError}
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
        {popUpComponent === PopUpComponents.Issue && (
          <IssuePopUp
            title={title}
            issueName={issueName}
            setIssueName={setIssueName}
            issuePriority={issuePriority}
            setIssuePriority={setIssuePriority}
            error={issueNameError}
          />
        )}
        {popUpComponent === PopUpComponents.Card &&
          scoreType &&
          typeOfCards && (
            <CardPopUp
              title={title}
              imageSource={imageSource}
              setImageSource={setImageSource}
              chooseImageButtonText={chooseImageButtonText}
              setChooseImageButtonText={setChooseImageButtonText}
              cardValue={cardValue}
              setCardValue={setCardValue}
              scoreType={scoreType}
              typeOfCards={typeOfCards}
              cardValueError={cardValueError}
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
