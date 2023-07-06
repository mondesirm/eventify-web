import { IVisitor } from './visitor.interface';

export interface IVisitorGetAllResponse {
  status: number;
  message: string;
  visitors: IVisitor[];
}
