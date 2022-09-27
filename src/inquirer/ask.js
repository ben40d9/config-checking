import inquirer from "inquirer";
const { prompt } = inquirer;

import {
  emailQuestion,
  usernameQuestion,
  gitHubQuestion,
  tokenQuestion,
} from "./prompts/index.js";

const questionsMap = {
  email: emailQuestion,
  username: usernameQuestion,
  github: gitHubQuestion,
  token: tokenQuestion,
};

const askFor = async (keyFromQuestionsMap) => {
  const activeQuestion = questionsMap[keyFromQuestionsMap];
  try {
    const answer = await prompt([activeQuestion]);
    return answer;
  } catch (err) {
    console.log(err);
  }
};

export default askFor;
