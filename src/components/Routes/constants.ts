import { Route } from "./types";
import Game from "../../pages/Game";
import Lobby from "../../pages/Lobby";
import Main from "../../pages/Main";
import Settings from "../../pages/Settings";
import Input from "../Input/Input";

const ROUTES: Route[] = [
  {
    path: "/",
    key: "main",
    component: Input,
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
