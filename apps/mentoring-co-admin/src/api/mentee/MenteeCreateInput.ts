import { SessionCreateNestedManyWithoutMenteesInput } from "./SessionCreateNestedManyWithoutMenteesInput";

export type MenteeCreateInput = {
  age?: number | null;
  name?: string | null;
  preferences?: string | null;
  sessions?: SessionCreateNestedManyWithoutMenteesInput;
  skills?: string | null;
};
