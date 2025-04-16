const EnvVars = {
  NodeEnv: process.env.NODE_ENV ?? "development",
  Port: process.env.APP_PORT ?? 4000,
};

export default EnvVars;
