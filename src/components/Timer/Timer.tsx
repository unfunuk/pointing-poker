import React from "react";
import "./timer.scss";
import { Mode } from "./constants";
import { TimerProps } from "./types";
import GameTimer from "./components/GameTimer";
import SettingsTimer from "./components/SettingsTimer";

function Timer({
  mode,
  configuration = { minutes: "00", seconds: "00" },
}: TimerProps): JSX.Element {
  return (
    <div className="timer">
      {mode === Mode.Game ? (
        <GameTimer configuration={configuration} />
      ) : (
        <SettingsTimer />
      )}
    </div>
  );
}

export default Timer;
