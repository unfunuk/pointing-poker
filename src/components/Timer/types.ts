import { Mode } from "./constants";

export interface TimerProps {
  mode: Mode;
  configuration?: { minutes: string; seconds: string };
}
