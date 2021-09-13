import { Mode } from "./constants";

export interface TimerProps {
  mode: Mode;
  configuration?: Configuration;
}

export interface Configuration {
  minutes: string;
  seconds: string;
}

export interface GameTimerProps {
  configuration: Configuration;
}
