import { UserData } from "../PlayerCard/types";

export interface ChatProps {
  arrayOfMessages: Array<ArrayOfMessages>;
}

export interface ArrayOfMessages {
  message: string;
  user: UserData;
}
