import Game from "../pages/Game";
import Lobby from "../pages/Lobby";
import Main from "../pages/Main";
import Settings from "../pages/Settings";

export interface RouteSchema {
  key: string;
  path: string;
  component: React.FunctionComponent;
}
const ROUTES: RouteSchema[] = [
  {
    path: "/",
    key: "main",
    component: Main,
  },
  {
    path: "/settings",
    key: "settings",
    component: Settings,
  },
  {
    path: "/game",
    key: "game",
    component: Game,
  },
  {
    path: "/lobby",
    key: "lobby",
    component: Lobby,
  },
];
export default ROUTES;
