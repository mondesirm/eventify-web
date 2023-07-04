import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvitationListRelationFilter } from "../invitation/InvitationListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlaceWhereUniqueInput } from "../place/PlaceWhereUniqueInput";

export type EventWhereInput = {
  attendees?: UserListRelationFilter;
  category?: CategoryWhereUniqueInput;
  createdAt?: DateTimeFilter;
  date?: DateTimeFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  invitations?: InvitationListRelationFilter;
  limit?: IntFilter;
  owner?: UserWhereUniqueInput;
  place?: PlaceWhereUniqueInput;
  title?: StringFilter;
  updatedAt?: DateTimeFilter;
  visibility?: "public" | "friends" | "unlisted";
  sam?: UserWhereUniqueInput;
};
