import { SessionUpdateManyWithoutMentorsInput } from "./SessionUpdateManyWithoutMentorsInput";

export type MentorUpdateInput = {
  age?: number | null;
  experience?: string | null;
  name?: string | null;
  sessions?: SessionUpdateManyWithoutMentorsInput;
  skills?: string | null;
};
