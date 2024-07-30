import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type FeedbackWhereInput = {
  comments?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  session?: SessionWhereUniqueInput;
};
