import React from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
import "./chat.scss";
import { ArrayOfMessages, ChatProps } from "./types";

function Chat({ arrayOfMessages }: ChatProps): JSX.Element {
  return (
    <div className="chat">
      {arrayOfMessages.map(({ message, user }: ArrayOfMessages) => (
        <div key={user.id} className="chat__unit">
          <div className="chat__message">{message}</div>
          <div className="chat__user">
            <PlayerCard
              userData={{
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                initials: user.initials,
                jobPosition: user.jobPosition,
                avatarSource: user.avatarSource,
              }}
              isCurrentPalyer={false}
              shouldShowRemoveButton={false}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
export default Chat;
