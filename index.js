import configureEnv from "./config/configureEnv.js";
import * as dotenv from "dotenv";
dotenv.config();
//test new branch
// console.log(process.env);

configureEnv().then(() => {
  console.log(process.env);
});
