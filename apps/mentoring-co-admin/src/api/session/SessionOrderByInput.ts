import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  menteeId?: SortOrder;
  mentorId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
