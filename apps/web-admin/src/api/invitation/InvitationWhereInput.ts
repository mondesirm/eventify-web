import { DateTimeFilter } from "../../util/DateTimeFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvitationWhereInput = {
  createdAt?: DateTimeFilter;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  kind?: "friend_request" | "event_attendance";
  recipient?: UserWhereUniqueInput;
  sender?: UserWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
