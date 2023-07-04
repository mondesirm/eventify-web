import { Event } from "../event/Event";
import { User } from "../user/User";

export type Invitation = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  kind?: "friend_request" | "event_attendance";
  recipient?: User;
  sender?: User;
  updatedAt: Date;
};
