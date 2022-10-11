import { port as userPort } from "./default.js";

import askFor from "../src/inquirer/ask.js";

const { NODE_CONFIG_APP_PORT, GH_TOKEN } = process.env;

const isTokenDisabled = GH_TOKEN === undefined || GH_TOKEN === "GH_TOKEN";

//will prob have to make another configureEnv() that awaits
//github q. and then asks the required info to run octokit function
export const configureEnv = async () => {
  const port = configurePort();
  const token = await configureToken();
  return {
    port,
    token,
  };
};

//configure port
function configurePort() {
  let port;

  if (
    NODE_CONFIG_APP_PORT === undefined ||
    NODE_CONFIG_APP_PORT === "EXPRESS-SERVER-PORT"
  ) {
    port = userPort;
  } else {
    port = NODE_CONFIG_APP_PORT;
  }
  process.env.NODE_CONFIG_APP_PORT = port;
  return port;
}

//configure token
const configureToken = async () => {
  let token;
  try {
    if (isTokenDisabled) {
      token = process.env.GH_TOKEN;
      return token;
    }
    const { token } = await askFor("token");
    process.env.GH_TOKEN = token;
    return token;
  } catch (err) {
    console.log(err, "error during user token configuration");
  }
};

//should just change this function to be looking in .env and
//checking IF process.env.includes PORT && TOKEN, but IF NOT
//THEN throw new Error.
export const isCriticalAppDataLoaded = async () => {
  if (process.env.NODE_CONFIG_APP_PORT && process.env.GH_TOKEN === undefined) {
    throw new Error(
      "You are missing a critical environment variable. Please try restarting the app again."
    );
  } else {
    //just using this log as a test rn to see the function run before
    //launching the startup menu
    return console.log(process.env.NODE_CONFIG_APP_PORT, process.env.GH_TOKEN);
  }
};
