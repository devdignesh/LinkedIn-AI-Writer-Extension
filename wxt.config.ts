import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
   
  runner: {
    startUrls: ["https://www.linkedin.com/messaging/thread/*"],
  },
});