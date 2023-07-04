import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PlaceWhereInput = {
  category?: CategoryWhereUniqueInput;
  createdAt?: DateTimeFilter;
  events?: EventListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  price?: FloatFilter;
  rating?: IntFilter;
  updatedAt?: DateTimeFilter;
  uri?: StringNullableFilter;
};
