//just want to set up this simple function, returning a messy obj, to test functionality

//will fix where i am setting up octokit promise, am just manually importing for now
import { Octokit, App } from "octokit";

const octokit = new Octokit({
  auth: `${process.env.GH_TOKEN}`,
});

import askFor from "../inquirer/ask.js";

// import { configureUsername } from "./requiredActionParams/configureUsername.js";

export const infoFlow = async () => {
  const owner = await askFor("username");

  const repo = await askFor("repo");

  const allRepoInfo = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: `${owner.ghUsername}`,
    repo: `${repo.ghRepoName}`,
  });

  console.log(allRepoInfo.data);
};
infoFlow();

// //repo owner & repo name is required
// const allRepoInfo = await octokit.request("GET /repos/{owner}/{repo}", {
//   owner: `${process.env.GH_OWNER}`,
//   repo: `${configRepo}`,
// });

// //var that only gets repo data portion of obj
// const getRepo = allRepoInfo.data;
// console.log(getRepo);
