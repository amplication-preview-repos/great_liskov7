import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type MenteeWhereInput = {
  age?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  preferences?: StringNullableFilter;
  sessions?: SessionListRelationFilter;
  skills?: StringNullableFilter;
};
