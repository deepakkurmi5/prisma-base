import { Router } from "express";

import Paths from "./paths";
import PostController from "@src/controllers/post.controller";

const postRouter = Router();

postRouter.get(Paths.Post.Get[0], PostController.getPosts);
postRouter.post(Paths.Post.Post[0], PostController.createPost);

export default postRouter;
