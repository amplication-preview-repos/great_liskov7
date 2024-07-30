import { FeedbackCreateNestedManyWithoutSessionsInput } from "./FeedbackCreateNestedManyWithoutSessionsInput";
import { MenteeWhereUniqueInput } from "../mentee/MenteeWhereUniqueInput";
import { MentorWhereUniqueInput } from "../mentor/MentorWhereUniqueInput";

export type SessionCreateInput = {
  date?: Date | null;
  duration?: number | null;
  feedbacks?: FeedbackCreateNestedManyWithoutSessionsInput;
  mentee?: MenteeWhereUniqueInput | null;
  mentor?: MentorWhereUniqueInput | null;
  typeField?: "Option1" | null;
};
