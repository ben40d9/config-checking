const { prompt } = require("inquirer");

const { emailQuestion, usernameQuestion } = require("./prompts/index");

const questionsMap = {
  email: emailQuestion,
  username: usernameQuestion,
};

/**
 * @param {any} keyFromQuestionsMap - key corresponding to the question we want to ask
 * @returns {}
 */
function askFor(keyFromQuestionsMap) {
  const activeQuestion = questionsMap[keyFromQuestionsMap];
  return new Promise(function (res, rej) {
    prompt([activeQuestion])
      .then(function (answers) {
        res(answers);
      })
      .catch(function (error) {
        console.log(error);
        rej(error);
      });
  });
}

module.exports = {
  askFor,
};
