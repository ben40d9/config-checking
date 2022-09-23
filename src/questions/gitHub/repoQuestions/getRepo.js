import { octokit } from "../index.js";

//just testing w set data of my own repo
const configRepo = "config-checking";

//will use later to ask username & name of repo, that user wants data from
//variables are just hardcoded for now
//repo owner & repo name is required
const repoObj = await octokit.request("GET /repos/{owner}/{repo}", {
  owner: `${process.env.GH_OWNER}`,
  repo: `${process.env.GH_REPO_NAME}`,
});

//var that only gets repo data portion of obj
const getRepo = repoObj.data;

console.log(getRepo);
