import { Session } from "../session/Session";

export type Mentee = {
  age: number | null;
  createdAt: Date;
  id: string;
  name: string | null;
  preferences: string | null;
  sessions?: Array<Session>;
  skills: string | null;
  updatedAt: Date;
};
