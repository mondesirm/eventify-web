import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { EventCreateNestedManyWithoutPlacesInput } from "./EventCreateNestedManyWithoutPlacesInput";

export type PlaceCreateInput = {
  category: CategoryWhereUniqueInput;
  events?: EventCreateNestedManyWithoutPlacesInput;
  name: string;
  price: number;
  rating: number;
  uri?: string | null;
};
