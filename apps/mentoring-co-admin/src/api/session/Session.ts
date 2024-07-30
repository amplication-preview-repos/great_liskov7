import { Feedback } from "../feedback/Feedback";
import { Mentee } from "../mentee/Mentee";
import { Mentor } from "../mentor/Mentor";

export type Session = {
  createdAt: Date;
  date: Date | null;
  duration: number | null;
  feedbacks?: Array<Feedback>;
  id: string;
  mentee?: Mentee | null;
  mentor?: Mentor | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
