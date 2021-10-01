import { Priorities } from "../Issue/constants";

export interface IssueResultsProps {
  result: IssueResult[];
}
export interface IssueResult {
  name: string;
  priority: Priorities;
  statistics: Array<IssueStatistics>;
}
interface IssueStatistics {
  value: string;
  content: string;
  percent: string;
}
