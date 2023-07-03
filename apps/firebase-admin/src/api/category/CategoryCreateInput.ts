import { EventCreateNestedManyWithoutCategoriesInput } from "./EventCreateNestedManyWithoutCategoriesInput";
import { PlaceCreateNestedManyWithoutCategoriesInput } from "./PlaceCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  events?: EventCreateNestedManyWithoutCategoriesInput;
  icon: string;
  name: string;
  places?: PlaceCreateNestedManyWithoutCategoriesInput;
};
