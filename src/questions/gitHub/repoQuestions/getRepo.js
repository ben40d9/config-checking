import { octokit } from "../index.js";
import { configRepo } from "./index.js";

//will use later to ask username & name of repo, that user wants data from
//variables are just hardcoded for now
//repo owner & repo name is required
const repoObj = await octokit.request("GET /repos/{owner}/{repo}", {
  owner: `${process.env.GH_OWNER}`,
  repo: `${configRepo}`,
});

//var that only gets repo data portion of obj
const getRepo = repoObj.data;

console.log(getRepo);
