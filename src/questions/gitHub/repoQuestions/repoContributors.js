import { octokit } from "../index.js";
import { configRepo } from "./index.js";

//gets entire obj returned from contributors of given repo
//repo owner & repo name is required
const contributorsOfRepo = await octokit.request(
  "GET /repos/{owner}/{repo}/contributors",
  {
    owner: `${process.env.GH_OWNER}`,
    repo: `${configRepo}`,
  }
);

//var that only gets contributors data (what we want)
const contributors = contributorsOfRepo.data;

console.log(contributors);

//can make a function to get contributors of
//given repo, and sort in an ordered list by
// # of contributions
