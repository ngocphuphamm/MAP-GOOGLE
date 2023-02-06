import { Config } from "./Config";

export const production: Config = {
  port: process.env.PORT || 3000,
};
