const whatPathQuestion = {
  type: "input",
  name: "filePath",
  message: "What is the path to the file that you want to find?",
  default: "src/actions/getUserInfo.js",
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

export { whatPathQuestion };
