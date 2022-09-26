import { octokit } from "../index.js";
import { configRepo } from "./index.js";

//function to get a specific files' contents
const allRepoContents = await octokit.request(
  "GET /repos/{owner}/{repo}/contents/{path}",
  {
    owner: `${process.env.GH_OWNER}`,
    repo: `${configRepo}`,
    path: "index.js",
  }
);

//set up to get .data.content, will return in Base64
const repoContents = allRepoContents.data.content;

//need to set up function to translate from Base64
let buff = Buffer.from(repoContents, "base64");
let data = buff.toString();
console.log(data);
//publish new branch

// console.log(repoContents);

// export { repoContents };
