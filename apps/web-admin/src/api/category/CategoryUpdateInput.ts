import { EventUpdateManyWithoutCategoriesInput } from "./EventUpdateManyWithoutCategoriesInput";
import { PlaceUpdateManyWithoutCategoriesInput } from "./PlaceUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  events?: EventUpdateManyWithoutCategoriesInput;
  icon?: string;
  name?: string;
  places?: PlaceUpdateManyWithoutCategoriesInput;
};
