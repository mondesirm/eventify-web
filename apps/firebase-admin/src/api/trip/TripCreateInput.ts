import { PositionCreateNestedManyWithoutTripsInput } from "./PositionCreateNestedManyWithoutTripsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripCreateInput = {
  day: Date;
  positions?: PositionCreateNestedManyWithoutTripsInput;
  user: UserWhereUniqueInput;
};
