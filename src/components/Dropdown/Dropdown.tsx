import React from "react";
import { Dropdownopions } from "./type";
import "./dropdown.scss";

function Dropdown({ options }: Dropdownopions): JSX.Element {
  return (
    <form>
      <select className="select">
        {options.map((option) => {
          return (
            <option className="select__option" key={option}>
              {option}
            </option>
          );
        })}
        {console.log(options)}
      </select>
    </form>
  );
}

export default Dropdown;
