//will switch base question to "what will you be getting info on repos || users"
const gitHubQuestion = {
  type: "list",
  name: "github",
  message: "What information would you like to find?",
  choices: [
    "Get User Information",
    "List Repos That User Owns",
    "Get Repo Information",
    "Get All Contributors On Repo",
  ],
  filter(val) {
    return val.toLowerCase();
  },
};

export { gitHubQuestion };
