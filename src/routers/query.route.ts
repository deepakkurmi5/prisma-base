import { Router } from "express";

import Paths from "./paths";
import QueryController from "@src/controllers/query.controller";

const queryRouter = Router();

queryRouter.get(Paths.Query.Get[0], QueryController.query);

export default queryRouter;
