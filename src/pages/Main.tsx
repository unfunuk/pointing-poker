import React, { useState } from "react";
import Button from "../components/Button/Button";
import { Buttons } from "../components/Button/constants";
import Input from "../components/Input/Input";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import Votes from "../components/Votes/Votes";
import "./main.scss";

const UserData = {
  firstName: "string",
  lastName: "string",
  jobPosition: "stri,g",
  avatarSource: "string",
  role: "string",
  initials: "string",
};
const PlayerCardProps = {
  userData: UserData,
  isCurrentPalyer: true,
  shouldShowRemoveButton: true,
};

function Main(): JSX.Element {
  const [url, setUrl] = useState("");
  return (
    <div className="main">
      {
        <Votes
          score={["fitrst", "second", "third"]}
          players={[
            PlayerCard(PlayerCardProps),
            PlayerCard(PlayerCardProps),
            PlayerCard(PlayerCardProps),
          ]}
        />
      }
      {/* <div className="main__title">
        <span>
          <img src="cards.jpg" alt="image of the cards" />
        </span>
        <span className="main__title_text main__title_poker">Poker</span>
        <p className="main__title_slash"></p>
        <span className="main__title_text main__title_planning">Plannig</span>
      </div>
      <div className="main__section">
        <p className="main__section_text">Start your planning:</p>
        <div className="main__section_button">
          <p className="main__section_discription">Create session:</p>
          <Button type={Buttons.Primary} text="New game" />
        </div>
      </div>
      <div className="main__section">
        <p className="main__section_text">OR:</p>
        <Input
          label="Connect to lobby by URL:"
          value={url}
          Button={<Button type={Buttons.Primary} text="Connect" />}
          onValueChange={setUrl}
        />
      </div> */}
    </div>
  );
}

export default Main;
