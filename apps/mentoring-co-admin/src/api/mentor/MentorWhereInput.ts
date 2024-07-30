import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type MentorWhereInput = {
  age?: IntNullableFilter;
  experience?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  sessions?: SessionListRelationFilter;
  skills?: StringNullableFilter;
};
