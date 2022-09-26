//vars for tests, dont just want to keep putting vars
//in .env b/c they arent private info, just repo names
const configRepo = "config-checking";

//import all functions here so its easier to call throughout app
import { contributors } from "./repoContributors";
import { getRepo } from "./getRepo";
import { repoContents } from "./fileFromRepo";

export { configRepo, contributors, getRepo, repoContents };
