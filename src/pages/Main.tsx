import React, { useState } from "react";
import Button from "../components/Button/Button";
import { Buttons } from "../components/Button/constants";
import Input from "../components/Input/Input";
import { Priorities } from "../components/Issue/constants";
import IssueResults from "../components/IssueResults/IssueResults";
import { PopUpComponents } from "../components/PopUp/GeneralPopUp/constants";
import GeneralPopUp from "../components/PopUp/GeneralPopUp/GeneralPopUp";
import "./main.scss";

function Main(): JSX.Element {
  const [url, setUrl] = useState("");
  const [isDealerPopUpOpen, setIsDealerPopUpOpen] = useState<boolean>(false);
  const handleDillerClick = () => {
    setIsDealerPopUpOpen(true);
  };
  const [isNotDealerPopUpOpen, setIsNotDealerPopUpOpen] =
    useState<boolean>(false);
  const handleNotDillerClick = () => {
    setIsNotDealerPopUpOpen(true);
  };
  return (
    <div className="main">
      <div className="main__title">
        <span>
          <img src="cards.jpg" alt="cards" />
        </span>
        <span className="main__title_text main__title_poker">Poker</span>
        <p className="main__title_slash"></p>
        <span className="main__title_text main__title_planning">Plannig</span>
      </div>
      <div className="main__section">
        <p className="main__section_text">Start your planning:</p>
        <div className="main__section_button">
          <p className="main__section_discription">Create session:</p>
          <Button
            type={Buttons.Primary}
            text="New game"
            onClick={handleDillerClick}
          />
          <GeneralPopUp
            popUpComponent={PopUpComponents.MainPage}
            isDealer={true}
            isOpen={isDealerPopUpOpen}
            onClose={() => setIsDealerPopUpOpen(false)}
            leftButtonText="Confirm"
            rightButtonText="Cancel"
          />
        </div>
      </div>
      <div className="main__section">
        <p className="main__section_text">OR:</p>
        <Input
          label="Connect to lobby by URL:"
          value={url}
          Button={
            <Button
              type={Buttons.Primary}
              text="Connect"
              onClick={handleNotDillerClick}
            />
          }
          onValueChange={setUrl}
        />
        <GeneralPopUp
          popUpComponent={PopUpComponents.MainPage}
          isDealer={false}
          isOpen={isNotDealerPopUpOpen}
          onClose={() => setIsNotDealerPopUpOpen(false)}
          leftButtonText="Confirm"
          rightButtonText="Cancel"
        />
      </div>
      <IssueResults
        result={[
          {
            name: "fwefw",
            priority: Priorities.Low,
            statistics: [
              { value: "10", content: "sp", percent: "50%" },
              { value: "12", content: "sf", percent: "25%" },
            ],
          },
        ]}
      />
    </div>
  );
}

export default Main;
