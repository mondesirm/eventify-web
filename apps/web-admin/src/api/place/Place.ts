import { Category } from "../category/Category";
import { Event } from "../event/Event";

export type Place = {
  category?: Category;
  createdAt: Date;
  events?: Array<Event>;
  id: string;
  name: string;
  price: number;
  rating: number;
  updatedAt: Date;
  uri: string | null;
};
