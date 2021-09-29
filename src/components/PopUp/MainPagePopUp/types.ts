export type MainPagePopUpProps = {
  chooseImageButtonText: string;
  setChooseImageButtonText: React.Dispatch<React.SetStateAction<string>>;
  imageSource: string;
  setImageSource: React.Dispatch<React.SetStateAction<string>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  jobPosition: string;
  setJobPosition: React.Dispatch<React.SetStateAction<string>>;
  initials: string;
  setInitials: React.Dispatch<React.SetStateAction<string>>;
  isObserver?: boolean;
  setIsObserver?: React.Dispatch<React.SetStateAction<boolean>>;
  isDealer: boolean;
};
