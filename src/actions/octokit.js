import { Octokit, App } from "octokit";

import askFor from "../inquirer/ask.js";

export const octokit = new Octokit({
  auth: `${process.env.GH_TOKEN}`,
});

// todoDone: made a "Github gateway". Have a function called "createGithubGateway" or something.
// it returns an object with every github lookup we have on it. You then modular import
// the one you need:

//returns an object w/ every GitHub lookup we have on it
export const githubGateway = {
  getUserInformation: async () => {
    const username = await askFor("username");

    const getUserInformation = await octokit.request("GET /users/{username}", {
      username: `${username.ghUsername}`,
    });

    if (getUserInformation.status === 200) {
      console.log(getUserInformation.data);
      return getUserInformation.data;
    }
  },

  cloneRepo: async () => {
    console.log("We can not clone yet!");
  },

  getRepoInformation: async () => {
    const owner = await askFor("username");

    const repo = await askFor("repo");

    const allRepoInfo = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: `${owner.ghUsername}`,
      repo: `${repo.ghRepoName}`,
    });

    console.log(allRepoInfo.data);
  },

  getRepoContent: async () => {
    const owner = await askFor("username");

    const repo = await askFor("repo");

    const path = await askFor("path");

    //function to get a specific files' contents
    const allRepoContents = await octokit.request(
      "GET /repos/{owner}/{repo}/contents/{path}",
      {
        owner: `${owner.ghUsername}`,
        repo: `${repo.ghRepoName}`,
        path: `${path.filePath}`,
      }
    );

    //set up to get .data.content, will return in Base64
    const repoContents = allRepoContents.data.content;
    //console.log(repoContents)

    //need to set up function to translate from Base64
    let buff = Buffer.from(repoContents, "base64");
    let data = buff.toString();
    console.log(data);
  },

  practiceQuestions: async () => {
    console.log("Path Not Set up yet!");
  },
};
