import { Octokit, App } from "octokit";

const octokit = new Octokit({
  auth: "YOUR-TOKEN",
});

await octokit.request("GET /octocat", {});
