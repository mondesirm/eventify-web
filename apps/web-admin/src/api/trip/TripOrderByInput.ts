import { SortOrder } from "../../util/SortOrder";

export type TripOrderByInput = {
  createdAt?: SortOrder;
  day?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
