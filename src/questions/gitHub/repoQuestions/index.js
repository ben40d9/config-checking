import { Octokit, App } from "octokit";

const octokit = new Octokit({ auth: `${process.env.GH_TOKEN}` });

//vars for tests, dont just want to keep putting vars
//in .env b/c they arent private info, just repo names
const configRepo = "config-checking";

//will use later to ask username & name of repo, that user wants data from
//variables are just hardcoded for now
// const myRepo = await octokit.request("GET /repos/{owner}/{repo}", {
//   owner: `${process.env.GH_OWNER}`,
//   repo: `${process.env.GH_REPO_NAME}`,
// });
// console.log(myRepo);

//just another test to get a specific files' contents
// const repoContents = await octokit.request(
//   "GET /repos/{owner}/{repo}/contents/{path}",
//   {
//     owner: `${process.env.GH_OWNER}`,
//     repo: configRepo,
//     path: "index.js",
//   }
// );
// console.log(repoContents.data);

//this will list all of the public repositories for the
//specified user
const listReposOfUser = await octokit.request("GET /users/{username}/repos", {
  username: `${process.env.GH_OWNER}`,
});
console.log(listReposOfUser);
