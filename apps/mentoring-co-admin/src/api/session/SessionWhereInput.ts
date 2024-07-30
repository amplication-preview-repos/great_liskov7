import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenteeWhereUniqueInput } from "../mentee/MenteeWhereUniqueInput";
import { MentorWhereUniqueInput } from "../mentor/MentorWhereUniqueInput";

export type SessionWhereInput = {
  date?: DateTimeNullableFilter;
  duration?: IntNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  mentee?: MenteeWhereUniqueInput;
  mentor?: MentorWhereUniqueInput;
  typeField?: "Option1";
};
