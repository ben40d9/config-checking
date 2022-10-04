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

//want to keep below function syntax b/c may use when i refactor function
//to send dif inq questions based on their returned answer from configureGitHubQuestion

// const configureGitHubQuestion = async () => {
//   const { selectedPath } = await askFor("github");
//   try {
//     if (selectedPath === "Get User Information") {
//       console.log(selectedPath);
//       return selectedPath;
//     }
//     if (selectedPath === "List Repos That User Owns") {
//       console.log(selectedPath);
//       return selectedPath;
//     }
//     if (selectedPath === "Get Repo Information") {
//       console.log(selectedPath);
//       return selectedPath;
//     }
//     if (selectedPath === "Get All Contributors On Repo") {
//       console.log(selectedPath);
//       return selectedPath;
//     }
//   } catch (err) {
//     console.log(err, "an err has occurred");
//   }
// };

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

// export const isCriticalAppDataLoaded = (env) => {
//   /*   token should go here as well */
//   const criticalEnvVariables = ["PORT"];

//   if (!criticalEnvVariables.every((envVar) => env[envVar])) {
//     throw new Error(
//       "You are missing a critical environment variable. Please try restarting the app again."
//     );
//   }
// };
