import { App } from "@slack/bolt";
import { LogLevel, ConsoleLogger } from "@slack/logger";

const logLevel = (process.env.SLACK_LOG_LEVEL as LogLevel) || LogLevel.INFO;
const logger = new ConsoleLogger();
logger.setLevel(logLevel);

const config = {
  token: process.env.SLACK_BOT_TOKEN || "token",
  signingSecret: process.env.SLACK_SIGNING_SECRET || "secret",
  logger: logger,
  logLevel: logLevel
};

export const app = new App(config);
