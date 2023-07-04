import { Trip } from "../trip/Trip";

export type Position = {
  coordinates: string;
  createdAt: Date;
  id: string;
  trip?: Trip | null;
  updatedAt: Date;
};
