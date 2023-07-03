import { UserUpdateManyWithoutEventsInput } from "./UserUpdateManyWithoutEventsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InvitationUpdateManyWithoutEventsInput } from "./InvitationUpdateManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlaceWhereUniqueInput } from "../place/PlaceWhereUniqueInput";

export type EventUpdateInput = {
  attendees?: UserUpdateManyWithoutEventsInput;
  category?: CategoryWhereUniqueInput;
  date?: Date;
  description?: string | null;
  invitations?: InvitationUpdateManyWithoutEventsInput;
  limit?: number;
  owner?: UserWhereUniqueInput;
  place?: PlaceWhereUniqueInput | null;
  title?: string;
  visibility?: "public" | "friends" | "unlisted";
};
