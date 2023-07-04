import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PositionListRelationFilter } from "../position/PositionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripWhereInput = {
  day?: DateTimeFilter;
  id?: StringFilter;
  positions?: PositionListRelationFilter;
  user?: UserWhereUniqueInput;
};
