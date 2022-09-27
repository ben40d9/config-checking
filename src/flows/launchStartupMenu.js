// this file should askFor('startupMenu') and ask the user what they want to do.
// main app functionaliies will be presented (clone a repo? practice questions? etc)
// based on the answer from that, send into another flow or just do a simple action.

import askFor from "../inquirer/ask.js";

export const launchStartupMenu = async () => {
  const menuOfQuestions = await askFor("github");
  return menuOfQuestions;
};
