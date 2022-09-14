const emailQuestion = {
  type: "input",
  name: "email",
  message: "What's your email address?",
  //validate the answer
  validate: (answer) => {
    //using a regex that matches most real world addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //if user input does not match email criteria
    if (!emailRegex.test(answer)) {
      //we return an error message
      return "You have to provide a valid email address!";
    }
    return true;
  },
};

module.exports = {
  emailQuestion,
};
