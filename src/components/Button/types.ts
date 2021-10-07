import React from "react";
import { Buttons } from "./constants";

export interface ButtonProps {
  type: Buttons;
  text: string;
  onClick?: any;
}
