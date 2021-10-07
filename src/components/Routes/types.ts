import { RouteComponentProps } from "react-router-dom";

export interface Route {
  key: string;
  path: string;
  component: any | React.FunctionComponent;
}
