import { Router } from "express";
import Paths from "./paths";

import authRouter from "./auth.route";
import userRouter from "./user.route";
import postRouter from "./post.route";
import queryRouter from "./query.route";

const router = Router();

// Endpoints for Authentication
router.use(Paths.Auth.Base, authRouter);

// Endpoints for Client
router.use(Paths.User.Base, userRouter);
router.use(Paths.Post.base, postRouter);
router.use(Paths.Query.Base, queryRouter);

export default router;
