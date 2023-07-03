import { PositionUpdateManyWithoutTripsInput } from "./PositionUpdateManyWithoutTripsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripUpdateInput = {
  day?: Date;
  positions?: PositionUpdateManyWithoutTripsInput;
  user?: UserWhereUniqueInput;
};
