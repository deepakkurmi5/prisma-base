import * as express from "express-serve-static-core";

declare global {
  namespace Express {
    interface Request {
      clientIp: string;
    }
  }
}
export default { express };
