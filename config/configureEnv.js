import { port as userPort } from "./default.js";

import askFor from "../src/inquirer/ask.js";

const { NODE_CONFIG_APP_PORT, NODE_CONFIG_APP_EMAIL } = process.env;

const isAskEmailDisabled =
  NODE_CONFIG_APP_EMAIL === undefined ||
  NODE_CONFIG_APP_EMAIL === "NODE_CONFIG_APP_EMAIL";

const configureEnv = async () => {
  const port = await configurePort();
  const email = await configureEmail();
  return {
    port,
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
  let selectedPath;
  try {
    if (answer === "Get User Information") {
      selectedPath = "one";
      console.log(selectedPath);
      return selectedPath;
    }
    if (answer === "List Repos That User Owns") {
      selectedPath = "two";
      console.log(selectedPath);
      return selectedPath;
    }
    if (answer === "Get Repo Information") {
      selectedPath = "three";
      console.log(selectedPath);
      return selectedPath;
    }
    if (answer === "Get All Contributors On Repo") {
      selectedPath = "four";
      console.log(selectedPath);
      return selectedPath;
    }
  } catch (err) {
    console.log(err, "an err has occurred");
  }
};

export default configureEnv;
