import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvitationCreateInput = {
  event?: EventWhereUniqueInput | null;
  kind: "friend_request" | "event_attendance";
  recipient: UserWhereUniqueInput;
  sender: UserWhereUniqueInput;
};
