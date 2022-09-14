const { prompt } = require("inquirer");

const { emailQuestion, usernameQuestion } = require("./prompts/index");

const questionsMap = {
  email: emailQuestion,
  username: usernameQuestion,
};

function askFor(keyFromQuestionsMap) {
  // extract the question object we want from the map above.
  // in the files we use it in, this allows us to do something like:

  // >  const email = ask('email');

  // instead of thinking so much about how to do it...import this pass that,
  // what's the name of the question object i'm looking for, etc.
  const activeQuestion = questionsMap[keyFromQuestionsMap];

  // ask the question, return the result. this should be heavily error handled.
  prompt([activeQuestion])
    .then(function (answers) {
      // log and return
      console.log(`Your answer(s) were: \n ${JSON.stringify(answers)}`);
      return answers;
    })
    .catch(function (error) {
      console.log(error);
    });
}

/*
  because the map is dealt with in here, all we have to export
  is the question - when we use it in other files we just pass 
  the corresponding key from 'questionsMap'
*/
module.exports = {
  askFor,
};
