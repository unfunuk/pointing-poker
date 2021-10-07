import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axiosInstance from "../api/api";
import Button from "../components/Button/Button";
import { Buttons } from "../components/Button/constants";
import HeadingSection from "../components/HeadingSection/HeadingSection";
import Input from "../components/Input/Input";
import MembersSection from "../components/MembersSection/MembersSection";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import { UserData } from "../components/PlayerCard/types";
import "./settings.scss";
import Issue from "../components/Issue/Issue";
import { IssueModes } from "../components/Issue/constants";
import { IssueData } from "../components/Issue/types";
import GeneralPopUp from "../components/PopUp/GeneralPopUp/GeneralPopUp";
import { PopUpComponents } from "../components/PopUp/GeneralPopUp/constants";
import Switcher from "../components/Switcher/Switcher";
import Timer from "../components/Timer/Timer";
import { Mode } from "../components/Timer/constants";
import Card from "../components/Card/Card";
import Dropdown from "../components/Dropdown/Dropdown";
import { AdmitMechanism, TypeofCards } from "./constants";
import { CardData } from "../components/Card/types";

function Settings(): JSX.Element {
  const history = useHistory();
  const [dealer, setDealer] = useState<UserData>(
    JSON.parse(sessionStorage.getItem("user") as string)
  );
  const [isCreateIssuePopUpOpen, setIsCreateIssuePopUpOpen] =
    useState<boolean>(false);
  const [isEditIssuePopUpOpen, setIsEditIssuePopUpOpen] =
    useState<boolean>(false);
  const [users, setUsers] = useState<UserData[]>([]);
  const [cards, setCards] = useState<CardData[]>([]);
  const [issues, setIssues] = useState<IssueData[]>([]);
  const [issueId, setIssueId] = useState<string>("");
  const [headingText, setHeadingText] = useState<string>("Heading");
  const [scoreTypeShort, setScoreTypeShort] = useState<string>("SP");
  const [isDealerPlayer, setIsDealerPlayer] = useState<boolean>(false);
  const [isChangingCards, setIsChangingCards] = useState<boolean>(false);
  const [isTimer, setIsTimer] = useState<boolean>(false);
  const [typeOfCards, setTypeOfCards] = useState<TypeofCards>(
    TypeofCards.FibonacciNumbers
  );
  const [admitMechanism, setAdmitMechanism] = useState<AdmitMechanism>(
    AdmitMechanism.AutoAdmit
  );
  const [isCardCreatePopUpOpen, setIsCardCreatePopUpOpen] =
    useState<boolean>(false);

  const getUsersData = async () => {
    const responce: UserData[] = await (
      await axiosInstance.get(`/users/session/${dealer.sessionId}`)
    ).data;
    const currentUsers = responce.filter(
      (user: UserData) => user.role !== "dealer"
    );
    setUsers(currentUsers);
  };
  const getIssuesData = async () => {
    const currentIssues: IssueData[] = await (
      await axiosInstance.get(`/issues/session/${dealer.sessionId}`)
    ).data;
    setIssues(currentIssues);
  };
  const getCardsData = async () => {
    const currentCards: CardData[] = await (
      await axiosInstance.get(`/cards/session/${dealer.sessionId}`)
    ).data;
    setCards(currentCards);
  };
  useEffect(() => {
    getUsersData();
    getIssuesData();
    getCardsData();
    setInterval(() => {
      getUsersData();
      getIssuesData();
      getCardsData();
    }, 1000);
  }, []);
  const copyLink = () => {
    navigator.clipboard.writeText(
      `http://${window.location.host}/${dealer.sessionId}`
    );
  };
  const handleHeadingInput = async (value: string) => {
    setHeadingText(value);
    await axiosInstance.put(`/session/${dealer.sessionId}`, {
      headingText: value,
    });
  };
  const handleStartGameClick = async () => {
    await axiosInstance.put(`/session/${dealer.sessionId}`, {
      isGameStarted: true,
    });
    history.replace(`/game/${dealer.sessionId}`);
  };
  const handleCancelGameClick = async () => {
    await axiosInstance.delete(`/session/${dealer.sessionId}`);
    await axiosInstance.delete(`/users/session/${dealer.sessionId}`);
    await axiosInstance.delete(`/issues/session/${dealer.sessionId}`);
    await axiosInstance.delete(`/cards/session/${dealer.sessionId}`);
    history.replace("/");
  };
  const handleAddIssueClick = () => {
    setIsCreateIssuePopUpOpen(true);
  };
  const handleDeleteIssueClick = async (event: React.MouseEvent) => {
    await axiosInstance.delete(
      `/issues/id/${(event.target as HTMLElement).id}`
    );
  };
  const handleDeleteCardClick = async (event: React.MouseEvent) => {
    await axiosInstance.delete(`/cards/id/${(event.target as HTMLElement).id}`);
  };
  const handleEditIssueClick = async (event: React.MouseEvent) => {
    setIssueId((event.target as HTMLElement).id);
    setIsEditIssuePopUpOpen(true);
  };
  const deleteUser = async (event: React.MouseEvent) => {
    await axiosInstance.delete(`/users/id/${(event.target as HTMLElement).id}`);
  };
  return (
    <div className="settings">
      <div className="headingSection">
        <HeadingSection text={headingText} setText={handleHeadingInput} />
      </div>
      <div className="settings__div">
        <p className="settings__text">Scram master:</p>
        <PlayerCard
          isCurrentPlayer={true}
          shouldShowRemoveButton={false}
          userData={dealer}
        />
      </div>
      <>
        <Input
          label="Link to lobby:"
          Button={
            <Button type={Buttons.Primary} text="Copy" onClick={copyLink} />
          }
          value={`http://${window.location.host}/${dealer.sessionId}`}
        />
      </>
      <div className="buttonsSection">
        <Button
          type={Buttons.Primary}
          text="Start game"
          onClick={handleStartGameClick}
        />
        <Button
          type={Buttons.Secondary}
          text="Cancel game"
          onClick={handleCancelGameClick}
        />
      </div>
      <div className="membersSection">
        {users.length !== 0 && (
          <MembersSection members={users} onClick={deleteUser} />
        )}
      </div>
      <div className="issueSection">
        <p className="settings__text">Issues:</p>
        <div className="issueSection__content">
          {issues.map((issue) => (
            <Issue
              issueData={issue}
              key={issue.id}
              mode={IssueModes.EditMode}
              isCurrent={false}
              onDeleteClick={handleDeleteIssueClick}
              onEditClick={handleEditIssueClick}
            />
          ))}
          <Issue
            isCurrent={false}
            mode={IssueModes.EditMode}
            onAddClick={handleAddIssueClick}
          />
          <GeneralPopUp
            popUpComponent={PopUpComponents.Issue}
            isOpen={isCreateIssuePopUpOpen}
            onClose={() => setIsCreateIssuePopUpOpen(false)}
            leftButtonText="Yes"
            rightButtonText="No"
            title="Create Issue"
            isDealer={true}
            sessionId={dealer.sessionId}
            isCreateIssue={true}
          />
          <GeneralPopUp
            popUpComponent={PopUpComponents.Issue}
            isOpen={isEditIssuePopUpOpen}
            onClose={() => setIsEditIssuePopUpOpen(false)}
            leftButtonText="Yes"
            rightButtonText="No"
            title="Edit Issue"
            sessionId={dealer.sessionId}
            isCreateIssue={false}
            issueId={issueId}
          />
        </div>
      </div>
      <div className="settingsSection">
        <p className="settings__text">Game settings:</p>
        <div className="settingsSection__items">
          <Switcher
            id="isDealerPlayer"
            label="Scram master as player:"
            onChange={setIsDealerPlayer}
          />
          <Switcher
            id="changeCard"
            label="Changing card in round end:"
            onChange={setIsChangingCards}
          />
          <Switcher label="Is timer needed:" onChange={setIsTimer} id="timer" />
          <span className="settings__span">Choose set of cards:</span>
          <Dropdown
            options={[TypeofCards.FibonacciNumbers, TypeofCards.PowerOdNumber2]}
            selectValue={typeOfCards}
            onSelectValue={setTypeOfCards}
          />
          <span className="settings__span">Admit mechanism:</span>
          <Dropdown
            options={[AdmitMechanism.AdmitReject, AdmitMechanism.AutoAdmit]}
            selectValue={admitMechanism}
            onSelectValue={setAdmitMechanism}
          />
          <Input
            label="Score type (short)"
            value={scoreTypeShort}
            onValueChange={setScoreTypeShort}
          />
          {isTimer && (
            <>
              <span className="settings__span">Round Time:</span>
              <Timer mode={Mode.Settings} />
            </>
          )}
          <div className="cardsSection">
            <span className="settings__span">Add card values:</span>
            <div className="cardsSection__items">
              {cards.map(({ id, sessionId, value, content }: CardData) => (
                <Card
                  key={id}
                  content={content}
                  value={value}
                  onDeleteCardClick={handleDeleteCardClick}
                  id={id}
                />
              ))}
              <Card
                content="addCard.png"
                onClick={() => setIsCardCreatePopUpOpen(true)}
              />
              <GeneralPopUp
                popUpComponent={PopUpComponents.Card}
                isOpen={isCardCreatePopUpOpen}
                onClose={() => setIsCardCreatePopUpOpen(false)}
                leftButtonText="Yes"
                rightButtonText="No"
                title="Create Card"
                sessionId={dealer.sessionId}
                scoreType={scoreTypeShort}
                typeOfCards={typeOfCards}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
