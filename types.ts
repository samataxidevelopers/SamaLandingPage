
export enum TabType {
  MAIN = 'MAIN',
  PRIVACY = 'PRIVACY',
  TERMS = 'TERMS'
}

export type Language = 'en' | 'ar';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
