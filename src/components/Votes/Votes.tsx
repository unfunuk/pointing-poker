import React from "react";
import "./votes.scss";
interface VotesInt {
  score: string[];
  players: JSX.Element[];
}

function Votes({ score, players }: VotesInt): JSX.Element {
  return (
    <div className="votes">
      <div className="votes__score">
        <span className="votes__head-text">Score: </span>
        {score.map((value) => {
          return (
            <p className="votes__card" key="1">
              {value}
            </p>
          );
        })}
      </div>
      <div className="votes__players">
        <span className="votes__head-text">Players: </span>
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
