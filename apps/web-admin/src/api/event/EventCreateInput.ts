import { UserCreateNestedManyWithoutEventsInput } from "./UserCreateNestedManyWithoutEventsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InvitationCreateNestedManyWithoutEventsInput } from "./InvitationCreateNestedManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlaceWhereUniqueInput } from "../place/PlaceWhereUniqueInput";

export type EventCreateInput = {
  attendees?: UserCreateNestedManyWithoutEventsInput;
  category: CategoryWhereUniqueInput;
  date: Date;
  description?: string | null;
  invitations?: InvitationCreateNestedManyWithoutEventsInput;
  limit: number;
  owner: UserWhereUniqueInput;
  place?: PlaceWhereUniqueInput | null;
  title: string;
  visibility: "public" | "friends" | "unlisted";
  sam?: UserWhereUniqueInput | null;
};
