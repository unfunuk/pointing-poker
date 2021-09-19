import React, { useState } from "react";
import Button from "../components/Button/Button";
import { Buttons } from "../components/Button/constants";
import Input from "../components/Input/Input";
import "./main.scss";

function Main(): JSX.Element {
  const [url, setUrl] = useState("");
  return (
    <div className="static">
      <div className="static__title">
        <span>
          <img src="cards.jpg" alt="image of the cards" />
        </span>
        <span className="static__title_text static__title_poker">Poker</span>
        <p className="static__title_slash"></p>
        <span className="static__title_text static__title_planning">
          Plannig
        </span>
      </div>
      <div className="static__section">
        <p className="static__section_text">Start your planning:</p>
        <div className="static__section_button">
          <p className="static__section_discription">Create session:</p>
          <Button type={Buttons.Primary} text="New game" />
        </div>
      </div>
      <div className="static__section">
        <p className="static__section_text">OR:</p>
        <Input
          label="Connect to lobby by URL:"
          value={url}
          Button={<Button type={Buttons.Primary} text="Connect" />}
          onValueChange={setUrl}
        />
      </div>
    </div>
  );
}

export default Main;
