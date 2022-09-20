import configureEnv from "./config/configureEnv.js";
import * as dotenv from "dotenv";
dotenv.config();

const wrapperOnEnv = async () => {
  try {
    await configureEnv();
    await console.log(process.env);
  } catch (err) {
    console.log(err);
  }
};
wrapperOnEnv();
