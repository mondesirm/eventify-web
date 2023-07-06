import { IError } from './error.interface';

export interface IErrorGetAllResponse {
  status: number;
  message: string;
  errors: IError[];
}
