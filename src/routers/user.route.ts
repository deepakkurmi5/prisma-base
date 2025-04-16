import { Router } from "express";

import Paths from "./paths";
import UserController from "@src/controllers/user.controller";

const userRouter = Router();

userRouter.get(Paths.User.Get[0], UserController.getUsers);
userRouter.get(Paths.User.Get[1], UserController.latestUserPostMostLike);

export default userRouter;
