import React from "react";
import Input from "../../Input/Input";
import "./cardPopUp.scss";
import CardPopUpProps from "./types";

function CardPopUp({
  title,
  cardValue,
  setCardValue,
  setChooseImageButtonText,
  setImageSource,
  chooseImageButtonText,
  scoreType,
  typeOfCards,
  cardValueError,
}: CardPopUpProps): JSX.Element {
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
        <span className="pop-up__title">{title}</span>
      </div>
      <div>
        <Input
          label={`Enter ${typeOfCards}`}
          value={cardValue}
          onValueChange={setCardValue}
        />
        <p style={{ color: "red" }}>{cardValueError}</p>
        <label htmlFor="file-input" className="form__label">
          <p className="form__paragraph">
            Your score type is {scoreType} but you can choose image:
          </p>
          <input
            id="file-input"
            type="file"
            className="form__input"
            onChange={handleFileChange}
          />
          <div className="input__file">{chooseImageButtonText}</div>
        </label>
      </div>
    </>
  );
}
export default CardPopUp;
