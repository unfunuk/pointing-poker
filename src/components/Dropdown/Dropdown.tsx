import React from "react";
import { Dropdownopions } from "./type";
import "./dropdown.scss";

function Dropdown({ options }: Dropdownopions): JSX.Element {
  return (
    <form>
      <select className="select">
      {options.map((option) => 
            <option className="select__option" key={option}>
              {option}
            </option>
        )}
      </select>
    </form>
  );
}

export default Dropdown;
