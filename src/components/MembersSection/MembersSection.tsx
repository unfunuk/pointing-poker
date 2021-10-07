import React from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
import { UserData } from "../PlayerCard/types";
import "./membersSection.scss";
import { MembersSectionProps } from "./types";

function MembersSection({
  members,
  onClick,
}: MembersSectionProps): JSX.Element {
  const user: UserData = JSON.parse(sessionStorage.getItem("user") as string);
  return (
    <div className="membersSection">
      <div className="membersSection__labelText">Members:</div>
      <div className="membersSection__users">
        {members.map((playerCard: UserData) => (
          <PlayerCard
            key={playerCard.id}
            isCurrentPlayer={user.id === playerCard.id}
            shouldShowRemoveButton={true}
            userData={playerCard}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default MembersSection;
