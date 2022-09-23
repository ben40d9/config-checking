import { octokit } from "../index.js";
import { configRepo } from "./index.js";

//function to get a specific files' contents
const allRepoContents = await octokit.request(
  "GET /repos/{owner}/{repo}/contents/{path}",
  {
    owner: `${process.env.GH_OWNER}`,
    repo: configRepo,
    path: "index.js",
  }
);

const repoContents = allRepoContents.data;
console.log(repoContents);
