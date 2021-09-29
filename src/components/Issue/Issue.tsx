import React from "react";
import classNames from "classnames";
import { IssueModes } from "./constants";
import "./issue.scss";
import { IssueProps } from "./types";

function Issue({
  mode,
  issueName,
  isDealer,
  isCurrent,
  priority,
}: IssueProps): JSX.Element {
  const className = classNames("issue", {
    issue_current: isCurrent === true,
    issue_notCurrent: isCurrent === false,
  });
  return (
    <div className={className}>
      {isCurrent && <div className="issue__currentText">Current</div>}
      <div className="issue__information">
        <div className="issue__name">
          {issueName ? issueName : "Create new Issue"}
        </div>
        <div className="issue__images">
          {!issueName ? (
            <img className="issue__image" src="plus.svg" alt="plus" />
          ) : mode === IssueModes.EditMode ? (
            <>
              <img className="issue__image" src="edit.svg" alt="edit" />
              <img className="issue__image" src="delete.svg" alt="delete" />
            </>
          ) : (
            isDealer && (
              <img className="issue__image" src="cross.svg" alt="cross" />
            )
          )}
        </div>
      </div>
      {priority && <div className="issue__priority">{priority}</div>}
    </div>
  );
}

export default Issue;
