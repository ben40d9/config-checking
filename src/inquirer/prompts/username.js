const usernameQuestion = {
  type: "input",
  name: "ghUsername",
  message: "What's your GitHub username?",
  //validate that the answer
  validate(answer) {
    //an empty answer would be false,
    if (!answer) {
      //in which case we return an error message
      return "Please, fill your name!";
    }
    return true;
  },
};

export default usernameQuestion;
