//will get contents, setting up after get info is done
import askFor from "../inquirer/ask";
import { octokit } from "./octokit";

export const repoContentFlow = async () => {
  const owner = askFor("username");

  const repo = askFor("repo");

  const path = "";

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
  //console.log(repoContents)

  //need to set up function to translate from Base64
  let buff = Buffer.from(repoContents, "base64");
  let data = buff.toString();
  console.log(data);
};
