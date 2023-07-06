import { IError } from './error.interface';

export interface IServiceErrorGetAllResponse {
  status: number;
  message: string;
  errors: IError[];
}
