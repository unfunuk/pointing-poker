import React, { useState } from "react";
import Button from "../Button/Button";
import { Buttons } from "../Button/constants";
import Input from "../Input/Input";
import "./static.scss";

function Static(): JSX.Element {
  const [url, setUrl] = useState("");
  return (
    <div className="static">
      <div className="static__title">
        <span>
          <img src="cards.jpg" />
        </span>
        <span className="static__title_text static__title_poker">Poker</span>
        <p className="static__title_slash"></p>
        <span className="static__title_text static__title_planning">
          Plannig
        </span>
      </div>
      <div className="static__start">
        <p className="static_text">Start your planning:</p>
        <div className="static__start_btn">
          <p className="static__start_discription">Create session:</p>
          <Button type={Buttons.Primary} text="Start new game" />
        </div>
      </div>
      <div className="static__start">
        <p className="static_text">OR:</p>
        <Input
          label="Connect to lobby by URL:"
          Button={<Button type={Buttons.Primary} text="Connect" />}
          setUpperValue={setUrl}
        />
      </div>
    </div>
  );
}
export default Static;
