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
  return port;
}

const configureEmail = async () => {
  let email;
  try {
    if (isAskEmailDisabled) {
      email = NODE_CONFIG_APP_EMAIL;
      return email;
    }
    const answer = await askFor("email");
    return answer;
  } catch (err) {
    console.log(err, "error during user email configuration");
  }
};
configureEnv();

export { configureEnv };
