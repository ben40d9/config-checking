//will switch base question to "what will you be getting info on repos || users"
const whichPracticeQuestion = {
  type: "list",
  name: "startUp",
  message: "What function would you like to attempt to solve?",
  choices: [
    "Takes a Year & Returns NBA Champion From That Year",
    "Takes a Teams Name and Tell All Of The Years That They Have Won The Championship",
    "Takes a Year & Returns NBA Finals MVP From That Year",
    "Test : Sum of Values in Array",
    "Do You Want To Choose This One?",
  ],
  filter(val) {
    return val;
  },
};

export { whichPracticeQuestion };
