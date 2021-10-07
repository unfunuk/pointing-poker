import { TypeofCards } from "../../../pages/constants";
import { PopUpComponents } from "./constants";

export type GeneralPopUpProps = {
  popUpComponent: PopUpComponents;
  isDealer?: boolean;
  isOpen: boolean;
  onClose: any;
  leftButtonText: string;
  rightButtonText: string;
  sessionId?: string;
  title: string;
  isCreateIssue?: boolean;
  issueId?: string;
  scoreType?: string;
  typeOfCards?: TypeofCards;
};
