import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";
import { InvitationUpdateManyWithoutUsersInput } from "./InvitationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutUsersInput } from "./TripUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  attendedEvents?: EventUpdateManyWithoutUsersInput;
  avatar?: string | null;
  email?: string;
  ownedEvents?: EventUpdateManyWithoutUsersInput;
  password?: string;
  receivedInvitations?: InvitationUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  sentInvitations?: InvitationUpdateManyWithoutUsersInput;
  trips?: TripUpdateManyWithoutUsersInput;
  username?: string;
};
