import { Session } from "../session/Session";

export type Mentor = {
  age: number | null;
  createdAt: Date;
  experience: string | null;
  id: string;
  name: string | null;
  sessions?: Array<Session>;
  skills: string | null;
  updatedAt: Date;
};
