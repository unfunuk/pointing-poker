import { TypeofCards } from "../../../pages/constants";

export default interface CardopUpProps {
  title: string;
  cardValue: string;
  setCardValue: React.Dispatch<React.SetStateAction<string>>;
  chooseImageButtonText: string;
  setChooseImageButtonText: React.Dispatch<React.SetStateAction<string>>;
  imageSource: string;
  setImageSource: React.Dispatch<React.SetStateAction<string>>;
  scoreType: string;
  typeOfCards: TypeofCards;
  cardValueError: string;
}
