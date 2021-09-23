import React from "react";
import "./membersSection.scss";
import { MembersSectionProps } from "./types";

function MembersSection({ members }: MembersSectionProps): JSX.Element {
  return (
    <div className="membersSection">
      <div className="membersSection__labelText">Members:</div>
      <div className="membersSection__users">
        {members.map((playerCard: userData) => (
          <PlayerCard key={playerCard.id} />
        ))}
      </div>
    </div>
  );
}

export default MembersSection;
