const { port: userPort } = require("./default");
const { askFor } = require("../src/inquirer/ask");

const { NODE_CONFIG_APP_PORT, NODE_CONFIG_APP_EMAIL } = process.env;

function configureEnv() {
  configurePort()
    .then((data) => {
      console.log(data);
    })
    .then(
      configureEmail().then((data) => {
        console.log(data);
      })
    );
}

// function configureEnv() {
//   const port = configurePort();
//   configureEmail().then(function (email) {
//     return {
//       port,
//       email,
//     };
//   });
// }
//test new branch
function configurePort() {
  // initialize empty variable for port
  let port;

  // if port is not set...
  if (
    NODE_CONFIG_APP_PORT === undefined ||
    NODE_CONFIG_APP_PORT === "EXPRESS-SERVER-PORT"
  ) {
    // use the default. check definition of userPort!
    port = userPort;
  } else {
    port = NODE_CONFIG_APP_PORT;
  }

  // // if the above "if" case isn't met, set port = to the shell env var
  // port = NODE_CONFIG_APP_PORT || 3000;

  // return port, so we can use it wherever this function is called
  console.log(port);
  return port;
}

function configureEmail() {
  // configure email...follows same flow, except...
  let email;
  // if email is undefined,
  if (
    NODE_CONFIG_APP_EMAIL === undefined ||
    NODE_CONFIG_APP_EMAIL === "NODE_CONFIG_APP_EMAIL"
  ) {
    // run a function that will run inquirer prompt,
    // asking user for email etc.
    email = askFor("email");
  } else {
    // if condition not met, same as configurePort
    email = NODE_CONFIG_APP_EMAIL;
  }

  return console.log(email);
}
// configureEmail();
configureEnv();

// this is just so we dont have to worry about inquirer functionality  yet
// function promptForEmail() {
//   console.log("promptForEmail invoked");
//   return;
// }

module.exports = {
  configureEnv,
};
