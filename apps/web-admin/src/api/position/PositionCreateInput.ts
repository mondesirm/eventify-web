import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";

export type PositionCreateInput = {
  coordinates: string;
  trip?: TripWhereUniqueInput | null;
};
