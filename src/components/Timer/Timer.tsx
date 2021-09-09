import React, { ChangeEvent, useState } from "react";
import "./timer.scss";
import { Mode } from "./constants";
import { TimerProps } from "./types";

function Timer({
  mode,
  configuration = { minutes: "00", seconds: "00" },
}: TimerProps): JSX.Element {
  const [minutes, setMinutes] = useState<string>(configuration.minutes);
  const [seconds, setSeconds] = useState<string>(configuration.seconds);
  const handleMinutes = (text: string) => {
    if (text === "" || text === "0") {
      setMinutes(`00`);
    } else {
      if (Number(text) > 0 && Number(text) < 60) {
        if (Number(text) < 10 && Number(text) > 0) {
          setMinutes(`0${Number(text)}`);
        } else {
          setMinutes(`${Number(text)}`);
        }
      }
    }
  };
  const handleSeconds = (text: string) => {
    if (text === "" || text === "0") {
      setSeconds(`00`);
    } else {
      if (Number(text) >= 0 && Number(text) < 60) {
        if (Number(text) < 10 && Number(text) > 0) {
          setSeconds(`0${Number(text)}`);
        } else {
          setSeconds(`${Number(text)}`);
        }
      }
    }
  };
  return (
    <div className="timer">
      <label htmlFor="minutes__input" className="minutes__label">
        Minutes
        {mode === Mode.Game ? (
          <div className="minutes">{minutes}</div>
        ) : (
          <input
            type="text"
            id="minutes__input"
            className="minutes__input"
            value={minutes}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleMinutes(e.target.value)
            }
          />
        )}
      </label>
      :
      <label htmlFor="seconds__input" className="seconds__label">
        Seconds
        {mode === Mode.Game ? (
          <div className="seconds">{seconds}</div>
        ) : (
          <input
            type="text"
            id="seconds__input"
            className="seconds__input"
            value={seconds}
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
