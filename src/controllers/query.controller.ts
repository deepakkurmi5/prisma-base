import type { Request, Response } from "express";

import HttpStatusCodes from "@src/constants/http-status-codes";
import prisma from "@src/lib/prisma";

export default class QueryController {
  static async query(req: Request, res: Response): Promise<any> {
    try {
      const posts = await prisma.user.findMany({
        include: {
          _count: {
            select: {
              posts: {
                where: {
                  published: false,
                },
              },
            },
          },
        },
      });
      return res.status(HttpStatusCodes.OK).json(posts);
    } catch (error) {
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
