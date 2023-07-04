import { Position as TPosition } from "../api/position/Position";

export const POSITION_TITLE_FIELD = "id";

export const PositionTitle = (record: TPosition): string => {
  return record.id || String(record.id);
};
