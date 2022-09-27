import { octokit } from "../octokit";

//this will list all of the public repositories for the
//specified user
const listReposOfUser = await octokit.request("GET /users/{username}/repos", {
  username: `${process.env.GH_OWNER}`,
});
