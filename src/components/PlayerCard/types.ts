export interface PlayerCardProps {
  userData: UserData;
  isCurrentPlayer: boolean;
  shouldShowRemoveButton: boolean;
  onClick?: any;
}
export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  jobPosition: string;
  avatarSource: string;
  role: string;
  initials: string;
  sessionId: string;
}
