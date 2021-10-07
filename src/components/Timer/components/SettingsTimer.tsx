import React, { useState } from "react";
import { DEFAULT_TIMER_VALUE } from "../constants";
function SettingsTimer(): JSX.Element {
  const [minutes, setMinutes] = useState<string>(DEFAULT_TIMER_VALUE);
  const [seconds, setSeconds] = useState<string>(DEFAULT_TIMER_VALUE);

  const handleChange =
    (onChange: React.Dispatch<React.SetStateAction<string>>) =>
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      const isValidTimerValue = Number(value) >= 0 && Number(value) < 60;
      if (Number(value) > 0 && Number(value) < 10) {
        value = "0" + Number(value);
      } else {
        if (value.startsWith("0")) {
          value = Number(value).toString();
        }
      }
      if (isValidTimerValue) {
        onChange(value);
      }
    };

  const handleMinutesBlur = () => {
    if (Number(minutes) === 0) {
      setMinutes(DEFAULT_TIMER_VALUE);
    }
  };

  const handleSecondsBlur = () => {
    if (Number(seconds) === 0) {
      setSeconds(DEFAULT_TIMER_VALUE);
    }
  };

  return (
    <>
      <label htmlFor="minutes__input" className="minutes__label">
        Minutes
        <input
          type="text"
          id="minutes__input"
          className="minutes__input"
          value={minutes}
          onChange={handleChange(setMinutes)}
          onBlur={handleMinutesBlur}
        />
      </label>
      <label htmlFor="seconds__input" className="seconds__label">
        Seconds
        <input
          type="text"
          id="seconds__input"
          className="seconds__input"
          value={seconds}
          onChange={handleChange(setSeconds)}
          onBlur={handleSecondsBlur}
        />
      </label>
    </>
  );
}

export default SettingsTimer;
