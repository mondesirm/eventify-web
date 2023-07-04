import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  limit?: SortOrder;
  ownerId?: SortOrder;
  placeId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  visibility?: SortOrder;
};
