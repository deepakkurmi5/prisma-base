import type { Request, Response } from "express";

import HttpStatusCodes from "@src/constants/http-status-codes";
import UserService from "@src/services/user.service";

export default class UserController {
  static async getUsers(req: Request, res: Response): Promise<any> {
    try {
      const users = await UserService.getUsers();
      return res.status(HttpStatusCodes.OK).json(users);
    } catch (error) {
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  static async latestUserPostMostLike(req: Request, res: Response): Promise<any> {
    try {
      const users = await UserService.getUserFilter();
      return res.status(HttpStatusCodes.OK).json(users);
    } catch (error) {
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
