export interface PlayerCardProps {
  userData: UserData;
  isThatYou: boolean;
  isSmth: boolean;
}
interface UserData {
  firstName: string;
  lastName: string;
  jobPosition: string;
  avatarSource: string;
  role: string;
  initials: string;
}
