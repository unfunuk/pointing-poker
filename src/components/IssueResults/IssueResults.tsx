import { title } from "process";
import React from "react";
import Card from "../Card/Card";
import { IssueModes } from "../Issue/constants";
import Issue from "../Issue/Issue";
import "./issueResults.scss";
import { IssueResult, IssueResultsProps } from "./types";

function IssueResults({ result }: IssueResultsProps): JSX.Element {
  return (
    <div className="statistics">
      {result.map(({ issueData, statistics }: IssueResult) => (
        <>
          <Issue
            mode={IssueModes.GameMode}
            isDealer={false}
            isCurrent={false}
            issueData={issueData}
          />
          <div className="statistics__field">
            {statistics.map((card) => (
              <div key={card.value} className="statistics__element">
                <Card value={card.value} content={card.content} />
                <div className="statistics__percent">{card.percent}</div>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default IssueResults;
