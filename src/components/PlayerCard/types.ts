export interface PlayerCardProps {
  userData: UserData;
  isCurrentPalyer: boolean;
  shouldShowRemoveButton: boolean;
}
interface UserData {
  firstName: string;
  lastName: string;
  jobPosition: string;
  avatarSource: string;
  role: string;
  initials: string;
}
