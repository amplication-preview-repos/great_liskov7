import { SessionUpdateManyWithoutMenteesInput } from "./SessionUpdateManyWithoutMenteesInput";

export type MenteeUpdateInput = {
  age?: number | null;
  name?: string | null;
  preferences?: string | null;
  sessions?: SessionUpdateManyWithoutMenteesInput;
  skills?: string | null;
};
