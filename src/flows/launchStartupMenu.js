// this file should askFor('startupMenu') and ask the user what they want to do.
// main app functionaliies will be presented (clone a repo? practice questions? etc)
// based on the answer from that, send into another flow or just do a simple action.

import askFor from "../inquirer/ask.js";

export const launchStartupMenu = async () => {
  const menuOfQuestions = await askFor("startup");
  return menuOfQuestions;
  //   const whatsNext = () => {
  //     if (menuOfQuestions === "Get User Information") {
  //       //run whatever you need
  //       return "u will get info";
  //     }
  //     if (menuOfQuestions === "Clone a Repo") {
  //       //run whatever you need
  //       return "u will get info";
  //     }
  //     if (menuOfQuestions === "Get Repo Information") {
  //       const thism = infoFlow();
  //       return thism;
  //     }
  //     if (menuOfQuestions === "Get a Repos Content") {
  //       //run
  //       return "u will get info";
  //     }
  //     if (menuOfQuestions === "Practice Questions") {
  //       //run whatever you need
  //       return "u will get info";
  //     } else {
  //       return "you messed up";
  //     }
  //   };
  //   const nextStep = await whatsNext();
};
