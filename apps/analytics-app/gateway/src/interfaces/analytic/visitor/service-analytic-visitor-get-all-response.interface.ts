import { IVisitor } from './visitor.interface';

export interface IServiceVisitorGetAllResponse {
  status: number;
  message: string;
  visitors: IVisitor[];
}
