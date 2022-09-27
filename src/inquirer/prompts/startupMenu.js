//will switch base question to "what will you be getting info on repos || users"
const startupQuestion = {
  type: "list",
  name: "startUp",
  message: "What would you like to do?",
  choices: [
    "Get User Information",
    "Clone a Repo",
    "Get Repo Information",
    "Get a Repos Content",
    "Practice Questions",
  ],
  filter(val) {
    return val;
  },
};

export { startupQuestion };
