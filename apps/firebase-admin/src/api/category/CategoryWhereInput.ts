import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlaceListRelationFilter } from "../place/PlaceListRelationFilter";

export type CategoryWhereInput = {
  events?: EventListRelationFilter;
  icon?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  places?: PlaceListRelationFilter;
};
