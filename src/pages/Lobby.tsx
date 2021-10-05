import React from "react";
import { RouteComponentProps } from "react-router";
import HeadingSection from "../components/HeadingSection/HeadingSection";

function Lobby(
  location: RouteComponentProps<{ sessionId: string }>
): JSX.Element {
  return (
    <div>
      {console.log(location.match.params.sessionId)}
      <HeadingSection textValue="txt" />
    </div>
  );
}

export default Lobby;
