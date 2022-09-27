import {
  configureEnv,
  isCriticalAppDataLoaded,
} from "./config/configureEnv.js";

import { launchStartupMenu } from "./src/flows/launchStartupMenu.js";

import * as dotenv from "dotenv";
dotenv.config();

(async () => {
  await configureEnv();
  isCriticalAppDataLoaded() && launchStartupMenu();
})(); // <--- note that this runs it
