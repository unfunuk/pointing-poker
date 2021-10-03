import { PopUpComponents } from "./constants";

export type GeneralPopUpProps = {
  popUpComponent: PopUpComponents;
  isDealer: boolean;
  isOpen: boolean;
  onClose: any;
  leftButtonText: string;
  rightButtonText: string;
  sessionId?: string;
};
