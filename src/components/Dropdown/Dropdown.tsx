import React from "react";
import { DropdownOpions } from "./type";
import "./dropdown.scss";
import { Priorities } from "../Issue/constants";

function Dropdown({
  options,
  selectValue,
  onSelectValue,
}: DropdownOpions): JSX.Element {
  return (
    <form>
      <select
        className="select"
        value={selectValue}
        onChange={(event) => {
          onSelectValue(event.target.value as any);
        }}
      >
        {options.map((option) => (
          <option className="select__option" key={option}>
            {option}
          </option>
        ))}
      </select>
    </form>
  );
}

export default Dropdown;
