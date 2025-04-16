import type { Request, Response } from "express";

import HttpStatusCodes from "@src/constants/http-status-codes";
import prisma from "@src/lib/prisma";

interface PostParams {
  perPage: number;
  cursor: number;
}

export default class QueryController {
  static async query(
    req: Request<object, object, object, PostParams>,
    res: Response,
  ): Promise<any> {
    try {
      const { perPage, cursor } = req.query;

      const posts = await prisma.post.findMany({
        take: Number(perPage),
        cursor: {
          id: Number(cursor),
        },
        orderBy: {
          id: "asc",
        },
      });
      return res.status(HttpStatusCodes.OK).json(posts);
    } catch (error) {
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
