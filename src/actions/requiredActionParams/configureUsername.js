const { GH_OWNER } = process.env.GH_OWNER;

const isAskUsernameDisabled = GH_OWNER === undefined || GH_OWNER === "GH_OWNER";

import askFor from "../../inquirer/ask.js";

//configure github username
//at some point need to check the val of this vs function
//we made to check if un us valid on gh
export const configureUsername = async () => {
  let owner;
  try {
    if (isAskUsernameDisabled) {
      owner = GH_OWNER;
      return owner;
    }
    owner = await askFor("username");
    process.env.GH_OWNER = owner;
    return owner;
  } catch (err) {
    console.log(err, "error during username configuration");
  }
};
