import * as Express from "express";

declare global {
  namespace Express {
    interface Request {
      clientIp: string;
    }
  }
}

export default Express;
