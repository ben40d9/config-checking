import { Octokit, App } from "octokit";

const octokit = new Octokit({ auth: `${process.env.GH_TOKEN}` });

// await octokit.request("GET /orgs/{org}/repos", {
//   org: "ORG",
// });

await octokit.request("GET /repos/{owner}/{repo}", {
  owner: `${process.env.GH_OWNER}`,
  repo: `${process.env.GH_}`,
});
