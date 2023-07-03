import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { EventUpdateManyWithoutPlacesInput } from "./EventUpdateManyWithoutPlacesInput";

export type PlaceUpdateInput = {
  category?: CategoryWhereUniqueInput;
  events?: EventUpdateManyWithoutPlacesInput;
  name?: string;
  price?: number;
  rating?: number;
  uri?: string | null;
};
