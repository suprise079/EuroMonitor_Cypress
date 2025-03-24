import { defineConfig } from "cypress";
require("dotenv").config();

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      config.env = {
        ...config.env,
        ...process.env,
      };
      return config;
    },
  },
});
