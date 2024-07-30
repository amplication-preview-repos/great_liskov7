import { SessionCreateNestedManyWithoutMentorsInput } from "./SessionCreateNestedManyWithoutMentorsInput";

export type MentorCreateInput = {
  age?: number | null;
  experience?: string | null;
  name?: string | null;
  sessions?: SessionCreateNestedManyWithoutMentorsInput;
  skills?: string | null;
};
