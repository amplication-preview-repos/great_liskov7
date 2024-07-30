import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type FeedbackUpdateInput = {
  comments?: string | null;
  rating?: number | null;
  session?: SessionWhereUniqueInput | null;
};
