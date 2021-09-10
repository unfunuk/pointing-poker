import React from "react";
import { Configuration } from "../types";

const GameTimer = ({
  configuration: { minutes, seconds },
}: {
  configuration: Configuration;
}): JSX.Element => {
  return (
    <>
      <div className="minutes">{minutes}</div>
      <div className="seconds">{seconds}</div>
    </>
  );
};
export default GameTimer;
