import { Octokit, App } from "octokit";

const octokit = new Octokit({
  auth: `${process.env.GH_TOKEN}`,
});

const test = await octokit.request("GET /user", {});

console.log(test);
