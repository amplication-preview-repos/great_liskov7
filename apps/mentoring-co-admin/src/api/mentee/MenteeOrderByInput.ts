import { SortOrder } from "../../util/SortOrder";

export type MenteeOrderByInput = {
  age?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  preferences?: SortOrder;
  skills?: SortOrder;
  updatedAt?: SortOrder;
};
