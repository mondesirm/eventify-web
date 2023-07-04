import { EventCreateNestedManyWithoutUsersInput } from "./EventCreateNestedManyWithoutUsersInput";
import { InvitationCreateNestedManyWithoutUsersInput } from "./InvitationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutUsersInput } from "./TripCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  attendedEvents?: EventCreateNestedManyWithoutUsersInput;
  avatar?: string | null;
  email: string;
  ownedEvents?: EventCreateNestedManyWithoutUsersInput;
  password: string;
  receivedInvitations?: InvitationCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  sentInvitations?: InvitationCreateNestedManyWithoutUsersInput;
  trips?: TripCreateNestedManyWithoutUsersInput;
  username: string;
};
