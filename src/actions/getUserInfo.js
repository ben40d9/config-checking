import { octokit } from "./octokit.js";

import askFor from "../inquirer/ask.js";

export const userInfoFlow = async () => {
  const username = await askFor("username");

  //for now just having it return entire obj w/ user data returned from octokit function
  //eventually will split into individual q's where user can grab x,y,z user info they want
  const getUserInfo = await octokit.request("GET /users/{username}", {
    username: `${username.ghUsername}`,
  });
  if (getUserInfo.status === 200) {
    console.log(getUserInfo.data);
    return;
  }
  //   if (getUserInfo.status === 404) {
  //     return console.log("User does not exist ");
  //   }
};
