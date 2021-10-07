import { IssueModes, Priorities } from "./constants";

export interface IssueProps {
  mode: IssueModes;
  isDealer?: boolean;
  isCurrent: boolean;
  onAddClick?: any;
  onEditClick?: any;
  onDeleteClick?: any;
  issueData?: IssueData;
}
export interface IssueData {
  title: string;
  priority: Priorities;
  sessionId: string;
  id: string;
}
