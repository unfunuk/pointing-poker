import React, { useEffect, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router";
import axiosInstance from "../api/api";
import Button from "../components/Button/Button";
import { Buttons } from "../components/Button/constants";
import HeadingSection from "../components/HeadingSection/HeadingSection";
import MembersSection from "../components/MembersSection/MembersSection";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import { UserData } from "../components/PlayerCard/types";
import { Session } from "./constants";
import "./lobby.scss";

function Lobby(
  location: RouteComponentProps<{ sessionId: string }>
): JSX.Element {
  const history = useHistory();
  const [users, setUsers] = useState<UserData[]>([]);
  const [headingText, setHeadingText] = useState<string>("");
  const [dealer, setDealer] = useState<UserData>();
  const getDealer = async () => {
    try {
      const responce: UserData[] = await (
        await axiosInstance.get(`/users/role/dealer`)
      ).data;
      setDealer(responce[0]);
    } catch (e) {
      console.error(e);
    }
  };
  const getUsersData = async () => {
    try {
      const responce: UserData[] = await (
        await axiosInstance.get(
          `/users/session/${location.match.params.sessionId}`
        )
      ).data;
      const currentUsers = responce.filter(
        (user: UserData) => user.role !== "dealer"
      );
      setUsers(currentUsers);
    } catch (e) {
      console.error(e);
    }
  };
  const handleExitClick = async () => {
    const user: UserData = JSON.parse(sessionStorage.getItem("user") as string);
    await axiosInstance.delete(`/users/id/${user.id}`);
    history.replace("/");
  };
  const getSessionData = async () => {
    const responce: Session[] = await (
      await axiosInstance.get(`/session/${location.match.params.sessionId}`)
    ).data;
    if (responce[0] === undefined) {
      history.replace(`/`);
    } else {
      setHeadingText(responce[0].headingText);
      if (responce[0].isGameStarted) {
        history.replace(`/game/${location.match.params.sessionId}`);
      }
    }
  };
  useEffect(() => {
    getUsersData();
    getSessionData();
    getDealer();
    setInterval(() => {
      getUsersData();
      getSessionData();
    }, 1000);
  }, []);
  return (
    <div className="lobby">
      <div className="lobby__heading">
        <HeadingSection textValue={headingText} />
      </div>
      <span className="lobby__text">Scram master:</span>
      {dealer && (
        <PlayerCard
          shouldShowRemoveButton={false}
          isCurrentPlayer={false}
          userData={dealer}
        />
      )}
      <div className="lobby__button_exit">
        <Button
          type={Buttons.Secondary}
          text="Exit"
          onClick={handleExitClick}
        />
      </div>
      <div className="membersSection">
        {users.length !== 0 && <MembersSection members={users} />}
      </div>
    </div>
  );
}

export default Lobby;
