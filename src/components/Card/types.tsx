export interface CardValue {
  value?: string;
  content: string;
  onClick?: any;
  onDeleteCardClick?: any;
  id?: string;
}
export interface CardData {
  value: string;
  content: string;
  sessionId: string;
  id: string;
}
