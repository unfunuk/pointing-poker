import { IssueData } from "../Issue/types";

export interface IssueResultsProps {
  result: IssueResult[];
}
export interface IssueResult {
  issueData: IssueData;
  statistics: Array<IssueStatistics>;
}
interface IssueStatistics {
  value: string;
  content: string;
  percent: string;
}
