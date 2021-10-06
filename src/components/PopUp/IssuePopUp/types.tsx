import { Priorities } from "../../Issue/constants";

export default interface IssuePopUpProps {
  title: string;
  issueName: string;
  setIssueName: React.Dispatch<React.SetStateAction<string>>;
  issuePriority: Priorities;
  setIssuePriority: React.Dispatch<React.SetStateAction<Priorities>>;
  error: string;
}
