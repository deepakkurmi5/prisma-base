import { Router } from "express";

import Paths from "./paths";
import AuthController from "@src/controllers/auth.controller";

const authRouter = Router();

authRouter.post(Paths.Auth.Base, AuthController.signIn);

export default authRouter;
