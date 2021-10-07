import React from "react";
import "./timer.scss";
import { DEFAULT_TIMER_VALUE, Mode } from "./constants";
import { TimerProps } from "./types";
import GameTimer from "./components/GameTimer";
import SettingsTimer from "./components/SettingsTimer";

function Timer({
  mode,
  configuration = {
    minutes: DEFAULT_TIMER_VALUE,
    seconds: DEFAULT_TIMER_VALUE,
  },
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
