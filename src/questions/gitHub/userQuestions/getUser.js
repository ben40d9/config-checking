import { octokit } from "../index.js";

const getUserInfo = await octokit.request("GET /user", {});
console.log(getUserInfo);

export { getUserInfo };
