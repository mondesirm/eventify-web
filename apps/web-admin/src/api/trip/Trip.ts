import { Position } from "../position/Position";
import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  day: Date;
  id: string;
  positions?: Array<Position>;
  updatedAt: Date;
  user?: User;
};
