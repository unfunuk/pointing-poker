import React from "react";
import "./votes.scss";
interface VotesInt {
  score: string[];
  players: JSX.Element[];
}

function Votes({ score, players }: VotesInt): JSX.Element {
  return (
    <div className="votes">
      <div className="votes__header">
        <span>Score: </span>
        <span>Players: </span>
      </div>
      <div className="votes__body">
        <div>
          {score.map((value) => {
            return <p key="1">{value}</p>;
          })}
        </div>
        <div>
          {players.map((player) => {
            return <div key="2">{player}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Votes;
