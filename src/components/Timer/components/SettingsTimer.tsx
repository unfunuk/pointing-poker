import React, { ChangeEvent, useState } from "react";
const SettingsTimer = (): JSX.Element => {
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");

  const handleMinutes = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (Number(value) >= 0 && Number(value) < 60) {
      setMinutes(value);
    }
  };

  const handleSeconds = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (Number(value) >= 0 && Number(value) < 60) {
      setSeconds(value);
    }
  };

  const handleMinutesBlur = () => {
    if (minutes === "") {
      setMinutes(`00`);
    }
  };

  const handleSecondsBlur = () => {
    if (seconds === "") {
      setSeconds(`00`);
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
          onChange={handleMinutes}
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
          onChange={handleSeconds}
          onBlur={handleSecondsBlur}
        />
      </label>
    </>
  );
};

export default SettingsTimer;
