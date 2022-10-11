//will switch base question to "what will you be getting info on repos || users"
const whichPracticeQuestion = {
  type: "list",
  name: "startUp",
  message: "What question would you like to solve?",
  choices: [
    "This One",
    "Return Sum Of Array",
    "Maybe This One",
    "Or This One",
    "Has To Be This One",
  ],
  filter(val) {
    return val;
  },
};

export { whichPracticeQuestion };
