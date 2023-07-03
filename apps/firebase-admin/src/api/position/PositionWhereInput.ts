import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";

export type PositionWhereInput = {
  coordinates?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  trip?: TripWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
