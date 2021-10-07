import { Route } from "./types";
import Game from "../../pages/Game";
import Lobby from "../../pages/Lobby";
import Main from "../../pages/Main";
import Settings from "../../pages/Settings";

const ROUTES: Route[] = [
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
    path: "/game/:sessionId",
    key: "game",
    component: Game,
  },
  {
    path: "/lobby/:sessionId",
    key: "lobby",
    component: Lobby,
  },
  {
    path: "/:sessionId",
    key: "pre-filled main",
    component: Main,
  },
];
export default ROUTES;
