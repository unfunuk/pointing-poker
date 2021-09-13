import React from "react";
import { GameTimerProps } from "../types";

function GameTimer({
  configuration: { minutes, seconds },
}: GameTimerProps): JSX.Element {
  return (
    <>
      <label className="minutes__label">
        Minutes
        <div className="minutes">{minutes}</div>
      </label>
      <label className="seconds__label">
        Seconds
        <div className="seconds">{seconds}</div>
      </label>
    </>
  );
}
export default GameTimer;
