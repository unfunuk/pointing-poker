import { AdmitMechanism, TypeofCards } from "../../pages/constants";
import { Priorities } from "../Issue/constants";

export interface DropdownOpions {
  options: Array<string>;
  selectValue: Priorities | TypeofCards | AdmitMechanism;
  onSelectValue:
    | React.Dispatch<React.SetStateAction<Priorities>>
    | React.Dispatch<React.SetStateAction<TypeofCards>>
    | React.Dispatch<React.SetStateAction<AdmitMechanism>>;
}
