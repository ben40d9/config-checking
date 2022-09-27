//will get contents, setting up after get info is done
import askFor from "../inquirer/ask.js";
import { octokit } from "./octokit.js";

export const repoContentFlow = async () => {
  const owner = await askFor("username");
  console.log(owner);

  const repo = await askFor("repo");
  console.log(repo);

  const path = await askFor("path");
  console.log(path);

  //function to get a specific files' contents
  const allRepoContents = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: `${owner.ghUsername}`,
      repo: `${repo.ghRepoName}`,
      path: `${path.filePath}`,
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
repoContentFlow();
