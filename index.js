import configureEnv from "./config/configureEnv.js";
import * as dotenv from "dotenv";
dotenv.config();

(async () => {
  try {
    await configureEnv();
    await console.log(process.env);
  } catch (err) {
    console.log(err);
  }
})(); // <--- note that this runs it
