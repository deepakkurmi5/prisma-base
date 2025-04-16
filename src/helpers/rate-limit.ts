import { Response, Request } from "express";
import rateLimit from "express-rate-limit";

import { ipWhitelist } from "@src/constants";

// apply rate limiting to all requests
export const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  message: async (_: Request, res: Response) => {
    return res.status(404).send({
      code: 404,
      message: "Too many requests from this IP, please try again later",
    });
  },
  skip: (req: Request) => {
    for (const ipw of ipWhitelist) {
      if (req.clientIp.includes(ipw)) {
        return true;
      }
    }
    return false;
  },
});
