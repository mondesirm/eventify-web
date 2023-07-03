import { SortOrder } from "../../util/SortOrder";

export type PositionOrderByInput = {
  coordinates?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  tripId?: SortOrder;
  updatedAt?: SortOrder;
};
