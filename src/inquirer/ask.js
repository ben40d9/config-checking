import prompt from "inquirer";

import { emailQuestion, usernameQuestion } from "./prompts/index";

const questionsMap = {
  email: emailQuestion,
  username: usernameQuestion,
};

const askFor = async (keyFromQuestionsMap) => {
  const activeQuestion = questionsMap[keyFromQuestionsMap];
  try {
    const answer = await prompt([activeQuestion]);
    return { answer };
  } catch (err) {
    console.log(err);
  }
};

export default askFor;
