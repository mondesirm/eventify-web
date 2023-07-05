export interface IVisitor {
  visitorId: string;
  ipAddress: string;
  userAgent: string;
  browserInfo: Object;
  deviceInfo: Object;
  performanceInfo: Object;
  locationInfo: Object;
}
