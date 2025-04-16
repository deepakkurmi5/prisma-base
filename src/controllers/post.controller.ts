import type { Request, Response } from "express";

import HttpStatusCodes from "@src/constants/http-status-codes";
import PostService from "@src/services/post.service";

export default class PostController {
  static async getPosts(req: Request, res: Response): Promise<any> {
    try {
      const posts = await PostService.getPosts();
      return res.status(HttpStatusCodes.OK).json(posts);
    } catch (error) {
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
