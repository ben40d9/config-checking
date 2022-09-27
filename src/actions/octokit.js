import { Octokit, App } from "octokit";

export const octokit = new Octokit({
  auth: `${process.env.GH_TOKEN}`,
});
