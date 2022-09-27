const tokenQuestion = {
  type: "input",
  name: "token",
  message: "What's the gitHub personal access token?",
  //validate that the answer
  validate(answer) {
    //an empty answer would be false,
    if (!answer) {
      //in which case we return an error message
      return "Please, enter token!";
    }
    return true;
  },
};

export { tokenQuestion };
