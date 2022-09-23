import { octokit } from "../index.js";

//this will list all of the public repositories for the
//specified user
const listReposOfUser = await octokit.request("GET /users/{username}/repos", {
  username: `${process.env.GH_OWNER}`,
});

console.log(listReposOfUser);
