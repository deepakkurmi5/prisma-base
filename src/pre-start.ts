import path from "path";
import dotenv from "dotenv";
import { parse } from "ts-command-line-args";
import { NodeEnvs } from "@src/enums/node-envs.enum";
import logger from "jet-logger";

interface IArgs {
  env: string;
}

/**
 * Switch Environment To development, test, production
 */
const args = parse<IArgs>({
  env: {
    type: String,
    defaultValue: NodeEnvs.Development,
    alias: "e",
  },
});

// Set the env file
const result = dotenv.config({
  path: path.join(__dirname, `../.env.${args.env}`),
});

logger.info(`Runing ${result.parsed?.NODE_ENV} Server`);

if (result.error) {
  throw result.error;
}
