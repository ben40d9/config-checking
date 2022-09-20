import inquirer from "inquirer";
const { prompt } = inquirer;

import { emailQuestion, usernameQuestion } from "./prompts/index.js";

const questionsMap = {
  email: emailQuestion,
  username: usernameQuestion,
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
