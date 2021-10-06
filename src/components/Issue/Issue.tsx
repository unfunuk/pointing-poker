import React from "react";
import classNames from "classnames";
import { IssueModes } from "./constants";
import "./issue.scss";
import { IssueProps } from "./types";

function Issue({
  mode,
  isDealer,
  isCurrent,
  onAddClick,
  onDeleteClick,
  onEditClick,
  issueData,
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
          {issueData && issueData.title ? issueData.title : "Create new Issue"}
        </div>
        <div className="issue__images">
          {!issueData ? (
            <img
              className="issue__image"
              src="plus.svg"
              alt="plus"
              onClick={onAddClick}
            />
          ) : mode === IssueModes.EditMode && issueData ? (
            <>
              <img
                className="issue__image"
                src="edit.svg"
                alt="edit"
                onClick={onEditClick}
                id={issueData.id}
              />
              <img
                className="issue__image"
                src="delete.svg"
                alt="delete"
                onClick={onDeleteClick}
                id={issueData.id}
              />
            </>
          ) : (
            isDealer && (
              <img className="issue__image" src="cross.svg" alt="cross" />
            )
          )}
        </div>
      </div>
      {issueData && issueData.priority && (
        <div className="issue__priority">{issueData.priority}</div>
      )}
    </div>
  );
}

export default Issue;
