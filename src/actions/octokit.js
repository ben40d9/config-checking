import { Octokit, App } from "octokit";

export const octokit = new Octokit({
  auth: `${process.env.GH_TOKEN}`,
});

// TODO: make a "Github gateway". Have a function called "createGithubGateway" or something.
// it returns an object with every github lookup we have on it. You then modular import
// the one you need:
export async function createGithubGateway(octokitInstance) {
  getUserInfo: await octokit.request("GET /users/{username}", {
    username: `${username.ghUsername}`,
  });
  if (getUserInfo.status === 200) {
    console.log(getUserInfo.data);
    return;
  }
  //   if (getUserInfo.status === 404) {
  //     return console.log("User does not exist ");
  //   }
}
