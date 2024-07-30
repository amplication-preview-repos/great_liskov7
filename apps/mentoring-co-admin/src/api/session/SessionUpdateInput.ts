import { FeedbackUpdateManyWithoutSessionsInput } from "./FeedbackUpdateManyWithoutSessionsInput";
import { MenteeWhereUniqueInput } from "../mentee/MenteeWhereUniqueInput";
import { MentorWhereUniqueInput } from "../mentor/MentorWhereUniqueInput";

export type SessionUpdateInput = {
  date?: Date | null;
  duration?: number | null;
  feedbacks?: FeedbackUpdateManyWithoutSessionsInput;
  mentee?: MenteeWhereUniqueInput | null;
  mentor?: MentorWhereUniqueInput | null;
  typeField?: "Option1" | null;
};
