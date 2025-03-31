import { Response, Request } from "express-serve-static-core";
import express, { Express } from "express";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import requestIp from "request-ip";

import EnvVars from "@src/config/env.conf";
import HttpStatusCodes from "@src/constants/http-status-codes";
import { NodeEnvs } from "@src/enums/node-envs.enum";
import router from "@src/routers";
import Paths from "@src/routers/paths";
import { apiLimiter } from "@src/helpers/rate-limit";
import favicon from "serve-favicon";

export function createApp() {
  const app: Express = express();

  app.use(express.static(path.join(__dirname, "../public")));
  app.use(favicon(path.join(__dirname, "../public", "favicon.ico")));
  app.use(express.json({ limit: "1kb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ credentials: true }));
  app.use(requestIp.mw());
  app.use(compression());
  app.disable("x-powered-by");
  app.set("trust proxy", 2);

  if (EnvVars.NodeEnv === NodeEnvs.Development.valueOf()) {
    app.use(morgan("dev"));
  }

  if (EnvVars.NodeEnv === NodeEnvs.Production.valueOf()) {
    app.use(helmet({ hidePoweredBy: true }));
  }

  app.get("/", (req: Request, response: Response) => {
    response.status(HttpStatusCodes.OK).send("Server is runing...");
  });

  // initialize routers
  app.use(Paths.Base, apiLimiter, router);

  return app;
}
