export interface PlayerCardProps {
  userData: UserData;
  isCurrentPalyer: boolean;
  shouldShowRemoveButton: boolean;
}
export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  jobPosition: string;
  avatarSource: string;
  role: string;
  initials: string;
}
