import React from "react";
import { VotesInt } from "./types";
import "./votes.scss";

function Votes({ score, players }: VotesInt): JSX.Element {
  return (
    <div className="votes">
      <div className="votes__score">
        <p className="votes__head-text">Score: </p>
        {score.map((value) => {
          return (
            <p className="votes__card card-score" key="1">
              {value}
            </p>
          );
        })}
      </div>
      <div className="votes__players">
        <p className="votes__head-text">Players: </p>
        {players.map((player) => {
          return (
            <div className="votes__card" key="2">
              {player}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Votes;
