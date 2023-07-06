import { IEvent } from './event.interface';

export interface IEventGetAllResponse {
  status: number;
  message: string;
  events: IEvent[];
}
