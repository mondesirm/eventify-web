import { SortOrder } from "../../util/SortOrder";

export type PlaceOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
  uri?: SortOrder;
};
