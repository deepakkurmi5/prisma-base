import path from "path";
import dotenv from "dotenv";
import logger from "jet-logger";

// Set the env file
const result = dotenv.config({
  path: path.join(__dirname, "../.env"),
});

logger.info(`Runing ${result.parsed?.NODE_ENV} Server`);

if (result.error) {
  throw result.error;
}
