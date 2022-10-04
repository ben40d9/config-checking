const tokenQuestion = {
  type: "input",
  name: "token",
  message: "What's the gitHub personal access token?",
  //validate that the answer
  validate(answer) {
    //an empty answer would be false, FOR NOW
    //need to check github and see if there are token str requirements
    //for ex like 16 characters long, only capital letters ect
    //or if there is just a straight up check if valid octokit function
    if (!answer) {
      //in which case we return an error message
      return "Please, enter token!";
    }
    return true;
  },
};

export { tokenQuestion };
