import React, { useState } from "react";
import Button from "../components/Button/Button";
import { Buttons } from "../components/Button/constants";
import Input from "../components/Input/Input";
import { PopUpComponents } from "../components/PopUp/GeneralPopUp/constants";
import GeneralPopUp from "../components/PopUp/GeneralPopUp/GeneralPopUp";
import "./main.scss";

function Main(location: any): JSX.Element {
  const [id, setId] = useState<string>("");
  const [isDealerPopUpOpen, setIsDealerPopUpOpen] = useState<boolean>(false);
  const handleDillerClick = () => {
    setIsDealerPopUpOpen(true);
  };
  const [isNotDealerPopUpOpen, setIsNotDealerPopUpOpen] =
    useState<boolean>(false);
  useEffect(() => {
    if (location.match.params.sessionId !== undefined) {
      setId(location.match.params.sessionId);
    }
  }, []);
  const handleNotDillerClick = async () => {
    try {
      const data: Array<{ sessionId: string }> = await (
        await axiosInstance.get(`/session/${id}`)
      ).data;
      if (data.length !== 0) {
        setIsNotDealerPopUpOpen(true);
      } else {
        setErrorText(`Wrong id`);
      }
    } catch (e) {
      console.error(e);
    }
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
            title="Connect to lobby"
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
          value={id}
          Button={
            <Button
              type={Buttons.Primary}
              text="Connect"
              onClick={handleNotDillerClick}
            />
          }
          onValueChange={setId}
        />
        <GeneralPopUp
          popUpComponent={PopUpComponents.MainPage}
          isDealer={false}
          title="Connect to lobby"
          isOpen={isNotDealerPopUpOpen}
          onClose={() => setIsNotDealerPopUpOpen(false)}
          leftButtonText="Confirm"
          rightButtonText="Cancel"
          sessionId={id}
        />
      </div>
    </div>
  );
}

export default Main;
