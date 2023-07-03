import { Event } from "../event/Event";
import { Place } from "../place/Place";

export type Category = {
  createdAt: Date;
  events?: Array<Event>;
  icon: string;
  id: string;
  name: string;
  places?: Array<Place>;
  updatedAt: Date;
};
