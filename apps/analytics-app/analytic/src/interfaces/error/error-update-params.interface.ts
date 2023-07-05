export interface IErrorUpdateParams {
  message: string;
  source: string;
  lineNo: number;
  colNo: number;
  error: string | null;
  timestamp: string;
  visitorId: string;
}
