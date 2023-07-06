import { IEvent } from './event.interface';

export interface IServiceEventGetAllResponse {
  status: number;
  message: string;
  events: IEvent[];
}
