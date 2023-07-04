import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";

export type PositionUpdateInput = {
  coordinates?: string;
  trip?: TripWhereUniqueInput | null;
};
