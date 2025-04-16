import "./pre-start";
import http from "http";
import logger from "jet-logger";
import debug from "debug";
// import os from "os";
// import cluster from "cluster";

import { createApp } from "./app";
import EnvVars from "@src/config/env.conf";

// const numCPUs = os.cpus().length;

const app = createApp();

const server = http.createServer(app);

const SERVER_START_MSG = `Runing on port: http://localhost:${EnvVars.Port.toString()}/`;

const startServer = async () => {
  try {
    // if (cluster.isPrimary) {
    // Fork workers.
    //   for (let i = 0; i < numCPUs; i++) {
    //     cluster.fork();
    //   }
    //   cluster.on("exit", (worker) => {
    //     console.log(`worker ${worker.process.pid} died`);
    //   });
    // } else {
    server.listen(EnvVars.Port, () => {
      logger.info(SERVER_START_MSG);
    });
    // }
  } catch (error) {
    logger.err(`An error occurred while starting the server: ${error}`);
    const exit = process.exit;
    exit(1);
  }
};

server.on("SIGTERM", () => {
  debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    debug("HTTP server closed");
  });
});

startServer();
