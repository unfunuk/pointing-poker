import React, { useState } from "react";
import Button from "../Button/Button";
import { Buttons } from "../Button/constants";
import Input from "../Input/Input";

function Static(): JSX.Element {
  const [url, setUrl] = useState("");
  return (
    <div className="static">
      <div className="static__title">
        <span>
          <img src="cards.jpg" />
        </span>
        <span className="static__title_poker">Poker</span>
        <span className="static__title_slash"></span>
        <span className="static__title_plannig">Plannig</span>
      </div>
      <div className="static__start-geme">
        <p>Start your planning:</p>
        <Button type={Buttons.Primary} text="Start new game" />
      </div>
      <div className="static__start-geme">
        <p>OR:</p>
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
