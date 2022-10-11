// this file should askFor('startupMenu') and ask the user what they want to do.
// main app functionaliies will be presented (clone a repo? practice questions? etc)
// based on the answer from that, send into another flow or just do a simple action.

import askFor from "../inquirer/ask.js";

import { githubGateway } from "../actions/octokit.js";

//displays startup menu q
export const launchStartupMenu = async () => {
  const menuOfQuestions = await askFor("startup");
  return menuOfQuestions;
};

//the process for what will happen depending on what
//is chosen in launchStartupMenu()
export const nextStep = async () => {
  const wait = await launchStartupMenu();

  //moved this logic into a switch case
  switch (wait.startUp) {
    case "Get User Information": {
      githubGateway.getUserInformation();
      break;
    }
    case "Clone a Repo": {
      githubGateway.cloneRepo();
      break;
    }
    case "Get Repo Information": {
      githubGateway.getRepoInformation();
      break;
    }
    case "Get a Repos Content": {
      githubGateway.getRepoContent();
      //here is where i return repo content
      break;
    }
    case "Practice Questions": {
      githubGateway.practiceQuestions();
      break;
    }

    default: {
      console.log("default");
    }
  }
};
