import {
  configureEnv,
  isCriticalAppDataLoaded,
} from "./config/configureEnv.js";

import { launchStartupMenu, nextStep } from "./src/flows/launchStartupMenu.js";

import * as dotenv from "dotenv";
dotenv.config();

(async () => {
  await configureEnv();
  isCriticalAppDataLoaded() && nextStep();
  // await nextStep();
})(); // <--- note that this runs it
