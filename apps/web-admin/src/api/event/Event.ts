import { User } from "../user/User";
import { Category } from "../category/Category";
import { Invitation } from "../invitation/Invitation";
import { Place } from "../place/Place";

export type Event = {
  attendees?: Array<User>;
  category?: Category;
  createdAt: Date;
  date: Date;
  description: string | null;
  id: string;
  invitations?: Array<Invitation>;
  limit: number;
  owner?: User;
  place?: Place | null;
  title: string;
  updatedAt: Date;
  visibility?: "public" | "friends" | "unlisted";
  sam?: User | null;
};
