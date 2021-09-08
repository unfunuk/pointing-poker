import React, { ChangeEvent, useState } from "react";
import "./timer.scss";
import { Mode } from "./constants";
import { TimerProps } from "./types";

function Timer({ mode, time }: TimerProps): JSX.Element {
  const [minutesValue, setMinutesValue] = useState<string>(
    mode === Mode.GameMode && time ? `${Math.trunc(time / 60)}` : "00"
  );
  const [secondsValue, setSecondsValue] = useState<string>(
    mode === Mode.GameMode && time ? `${time % 60}` : "00"
  );
  const handleMinutes = (text: string) => {
    if (text === "" || text === "0") {
      setMinutesValue(`00`);
    } else {
      if (Number(text) > 0 && Number(text) < 60) {
        if (Number(text) < 10 && Number(text) > 0) {
          setMinutesValue(`0${Number(text)}`);
        } else {
          setMinutesValue(`${Number(text)}`);
        }
      }
    }
  };
  const handleSeconds = (text: string) => {
    if (text === "" || text === "0") {
      setSecondsValue(`00`);
    } else {
      if (Number(text) >= 0 && Number(text) < 60) {
        if (Number(text) < 10 && Number(text) > 0) {
          setSecondsValue(`0${Number(text)}`);
        } else {
          setSecondsValue(`${Number(text)}`);
        }
      }
    }
  };
  return (
    <div className="timer">
      <label htmlFor="minutes__input" className="minutes__label">
        Minutes
        {mode === Mode.GameMode ? (
          <div className="minutes">{minutesValue}</div>
        ) : (
          <input
            type="text"
            id="minutes__input"
            className="minutes__input"
            value={minutesValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleMinutes(e.target.value)
            }
          />
        )}
      </label>
      :
      <label htmlFor="seconds__input" className="seconds__label">
        Seconds
        {mode === Mode.GameMode ? (
          <div className="seconds">{secondsValue}</div>
        ) : (
          <input
            type="text"
            id="seconds__input"
            className="seconds__input"
            value={secondsValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleSeconds(e.target.value)
            }
          />
        )}
      </label>
    </div>
  );
}

export default Timer;
