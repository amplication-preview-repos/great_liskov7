import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type FeedbackCreateInput = {
  comments?: string | null;
  rating?: number | null;
  session?: SessionWhereUniqueInput | null;
};
