import { Document } from 'mongoose';

export interface IVisitor extends Document {
    _id: string;
    visitorId: string;
    ipAddress: string;
    userAgent: string;
    browserInfo: Object;
    deviceInfo: Object;
    performanceInfo: Object;
    locationInfo: Object;
  }