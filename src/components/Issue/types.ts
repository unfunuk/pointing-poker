import { IssueModes, Priorities } from "./constants";

export interface IssueProps {
  mode: IssueModes;
  issueName?: string;
  isDealer?: boolean;
  isCurrent: boolean;
  priority?: Priorities;
}
