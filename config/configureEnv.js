const { port: userPort } = require("./default");
const { askFor } = require("../src/inquirer/ask");

const { NODE_CONFIG_APP_PORT, NODE_CONFIG_APP_EMAIL } = process.env;

const isAskEmailDisabled =
  NODE_CONFIG_APP_EMAIL === undefined ||
  NODE_CONFIG_APP_EMAIL === "NODE_CONFIG_APP_EMAIL";

function configureEnv() {
  return new Promise(function (res, rej) {
    const port = configurePort();

    configureEmail().then(function (email) {
      res({ port, email });
    });

    rej("error during env configuration");
  });
}

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

function configureEmail() {
  return new Promise(function (res, rej) {
    let email;

    if (isAskEmailDisabled) {
      email = NODE_CONFIG_APP_EMAIL;
      res(email);
    }

    askFor("email").then((answer) => {
      res(answer);
    });

    rej("error during user email configuration");
  });
}

module.exports = {
  configureEnv,
};
