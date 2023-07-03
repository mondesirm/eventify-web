import { SortOrder } from "../../util/SortOrder";

export type InvitationOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  kind?: SortOrder;
  recipientId?: SortOrder;
  senderId?: SortOrder;
  updatedAt?: SortOrder;
};
