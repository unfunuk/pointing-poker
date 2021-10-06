import React from "react";
import Dropdown from "../../Dropdown/Dropdown";
import Input from "../../Input/Input";
import { Priorities } from "../../Issue/constants";
import "./issuePopUp.scss";
import IssuePopUpProps from "./types";

function IssuePopUp({
  title,
  issueName,
  setIssueName,
  issuePriority,
  setIssuePriority,
  error,
}: IssuePopUpProps): JSX.Element {
  return (
    <>
      <div className="pop-up__header">
        <span className="pop-up__title">{title}</span>
      </div>
      <div>
        <Input label="Title" value={issueName} onValueChange={setIssueName} />
        <span style={{ color: "red" }}>{error}</span>
        <p>Priority:</p>
        <Dropdown
          options={[Priorities.Hight, Priorities.Middle, Priorities.Low]}
          selectValue={issuePriority}
          onSelectValue={setIssuePriority}
        />
      </div>
    </>
  );
}
export default IssuePopUp;
