// this file should askFor('startupMenu') and ask the user what they want to do.
// main app functionaliies will be presented (clone a repo? practice questions? etc)
// based on the answer from that, send into another flow or just do a simple action.

import askFor from "../inquirer/ask.js";

import { infoFlow } from "../actions/getRepoInfo.js";

export const launchStartupMenu = async () => {
  const menuOfQuestions = await askFor("startup");
  return menuOfQuestions;
};

//just a mock of what will happen depending on what is chosen in
export const nextStep = async () => {
  const wait = await launchStartupMenu();
  let theWay;
  if (wait.startUp === "Get User Information") {
    //run whatever you need
    theWay = "u will get info";
    return theWay;
  }
  if (wait.startUp === "Clone a Repo") {
    //run whatever you need
    theWay = "u will get info";
    return theWay;
  }
  if (wait.startUp === "Get Repo Information") {
    return infoFlow();
  }
  if (wait.startUp === "Get a Repos Content") {
    //run
    theWay = "u will get info";
    return theWay;
  }
  if (wait.startUp === "Practice Questions") {
    //run whatever you need
    theWay = "u will get info";
    return theWay;
  }
  return theWay;
};

nextStep();
