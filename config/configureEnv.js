import { port as userPort } from "./default.js";

import askFor from "../src/inquirer/ask.js";

const { NODE_CONFIG_APP_PORT, NODE_CONFIG_APP_EMAIL } = process.env;

const isAskEmailDisabled =
  NODE_CONFIG_APP_EMAIL === undefined ||
  NODE_CONFIG_APP_EMAIL === "NODE_CONFIG_APP_EMAIL";

const configureEnv = async () => {
  const port = await configurePort();
  const github = await configureGitHubQuestion();
  const email = await configureEmail();
  return {
    port,
    github,
    email,
  };
};

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

const configureGitHubQuestion = async () => {
  const { selectedPath } = await askFor("github");
  return selectedPath;
};

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

export default configureEnv;
