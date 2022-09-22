import { Octokit, App } from "octokit";

const octokit = new Octokit({ auth: `${process.env.GH_TOKEN}` });

//will use later to ask username & name of repo, that user wants data from
//variables are just hardcoded for now
const myRepo = await octokit.request("GET /repos/{owner}/{repo}", {
  owner: `${process.env.GH_OWNER}`,
  repo: `${process.env.GH_REPO_NAME}`,
});

console.log(myRepo);
