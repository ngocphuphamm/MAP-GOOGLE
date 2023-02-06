import { Config } from "./Config";

const development: Config = {
  host: "http://localhost",
  port: process.env.PORT || 3000,
};

development.base = `${development.host}:${development.port}`;

export {development};