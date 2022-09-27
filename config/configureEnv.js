import { port as userPort } from "./default.js";

import askFor from "../src/inquirer/ask.js";

const { NODE_CONFIG_APP_PORT, NODE_CONFIG_APP_EMAIL, GH_OWNER } = process.env;

const isAskEmailDisabled =
  NODE_CONFIG_APP_EMAIL === undefined ||
  NODE_CONFIG_APP_EMAIL === "NODE_CONFIG_APP_EMAIL";

const isAskUsernameDisabled = GH_OWNER === undefined || GH_OWNER === "GH_OWNER";

//will prob have to make another configureEnv() that awaits
//github q. and then asks the required info to run octokit function
export const configureEnv = async () => {
  // const port = configurePort();
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
    if (process.env.GH_TOKEN !== "") {
      // or default token val
      token = process.env.GH_TOKEN;
      return token;
    }
    // TODO: write this fcn
    // const { token } = await askFor("token");
    process.env.GH_TOKEN = token;
    return token;
  } catch (err) {
    console.log(err, "error during user token configuration");
  }
};

//configure email
const configureEmail = async () => {
  let email;
  try {
    if (isAskEmailDisabled) {
      email = NODE_CONFIG_APP_EMAIL;
      return email;
    }
    const { email } = await askFor("email");
    process.env.NODE_CONFIG_APP_EMAIL = email;
    return email;
  } catch (err) {
    console.log(err, "error during user email configuration");
  }
};

//configure github username
//at some point need to check the val of this vs function
//we made to check if un us valid on gh
const configureUsername = async () => {
  let owner;
  try {
    if (isAskUsernameDisabled) {
      owner = GH_OWNER;
      return owner;
    }
    const { owner } = await askFor("username");
    process.env.GH_OWNER = owner;
    return owner;
  } catch (err) {
    console.log(err, "error during username configuration");
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

export const isCriticalAppDataLoaded = (env) => {
  /*   token should go here as well */
  const criticalEnvVariables = ["PORT"];

  if (!criticalEnvVariables.every((envVar) => env[envVar])) {
    throw new Error(
      "You are missing a critical environment variable. Please try restarting the app again."
    );
  }
};
