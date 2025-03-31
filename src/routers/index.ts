import { Router } from "express";
import Paths from "./paths";

import authRouter from "./auth.route";

const router = Router();

// Endpoints for Authentication
router.use(Paths.Auth.Base, authRouter);

export default router;
