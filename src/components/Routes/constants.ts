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
