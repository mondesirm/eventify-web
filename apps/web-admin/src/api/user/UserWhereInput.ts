import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvitationListRelationFilter } from "../invitation/InvitationListRelationFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";

export type UserWhereInput = {
  attendedEvents?: EventListRelationFilter;
  avatar?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  id?: StringFilter;
  ownedEvents?: EventListRelationFilter;
  receivedInvitations?: InvitationListRelationFilter;
  sentInvitations?: InvitationListRelationFilter;
  trips?: TripListRelationFilter;
  updatedAt?: DateTimeFilter;
  username?: StringFilter;
};
