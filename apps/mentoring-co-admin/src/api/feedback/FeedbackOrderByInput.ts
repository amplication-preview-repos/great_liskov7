import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  sessionId?: SortOrder;
  updatedAt?: SortOrder;
};
