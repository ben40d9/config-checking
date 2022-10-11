const repoNameQuestion = {
  type: "input",
  name: "ghRepoName",
  message: "What is the repo's name?",
  default: "next-blog",
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

export { repoNameQuestion };
