import { Session } from "../session/Session";

export type Feedback = {
  comments: string | null;
  createdAt: Date;
  id: string;
  rating: number | null;
  session?: Session | null;
  updatedAt: Date;
};
