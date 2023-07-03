import { Event } from "../event/Event";
import { Invitation } from "../invitation/Invitation";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";

export type User = {
  attendedEvents?: Array<Event>;
  avatar: string | null;
  createdAt: Date;
  email: string;
  id: string;
  ownedEvents?: Array<Event>;
  receivedInvitations?: Array<Invitation>;
  roles: JsonValue;
  sentInvitations?: Array<Invitation>;
  trips?: Array<Trip>;
  updatedAt: Date;
  username: string;
};
