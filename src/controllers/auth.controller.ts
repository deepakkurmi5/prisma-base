import { Request, Response } from "express-serve-static-core";

import HttpStatusCodes from "@src/constants/http-status-codes";

export default class AuthController {
  static async signIn(req: Request, res: Response): Promise<any> {
    try {
      return res.status(HttpStatusCodes.OK).send();
    } catch (error) {
      return error;
    }
  }
}
