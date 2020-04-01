import dotenv from "dotenv";
dotenv.config();

import { app } from "./initializers";
import Hello from "./scripts/hello";
import Echo from "./scripts/echo";

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log(`⚡️ Bolt app is running!`);
})();

Hello();
Echo();