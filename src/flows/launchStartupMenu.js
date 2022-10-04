// this file should askFor('startupMenu') and ask the user what they want to do.
// main app functionaliies will be presented (clone a repo? practice questions? etc)
// based on the answer from that, send into another flow or just do a simple action.

import askFor from "../inquirer/ask.js";

import { infoFlow } from "../actions/getRepoInfo.js";
import { repoContentFlow } from "../actions/getRepoContent.js";
import { userInfoFlow } from "../actions/getUserInfo.js";

export const launchStartupMenu = async () => {
  const menuOfQuestions = await askFor("startup");
  return menuOfQuestions;
};

//just a mock of what will happen depending on what is chosen in
//this function works,
export const nextStep = async () => {
  const wait = await launchStartupMenu();

  // TODO: move this logic into a switch case
  switch (wait.startUp) {
    case "Get User Information": {
      userInfoFlow();
      break;
    }

    default: {
      console.log("default");
    }
  }

  // if (wait.startUp === "Get User Information") {
  //   userInfoFlow();
  // }
  // if (wait.startUp === "Clone a Repo") {
  //   //incomplete
  //   return "You will next clone a repo! Code coming soon!";
  // }
  // if (wait.startUp === "Get Repo Information") {
  //   infoFlow();
  // }
  // if (wait.startUp === "Get a Repos Content") {
  //   repoContentFlow();
  // }
  // if (wait.startUp === "Practice Questions") {
  //   //incomplete
  //   return "You will ppractice code! Code coming soon!";
  // }
};
