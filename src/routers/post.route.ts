import { Router } from "express";

import Paths from "./paths";
import PostController from "@src/controllers/post.controller";

const postRouter = Router();

postRouter.get(Paths.Post.Get[0], PostController.getPosts);

export default postRouter;
