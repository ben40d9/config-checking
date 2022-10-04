import { askFor } from "../../inquirer/ask";

const { NODE_CONFIG_APP_EMAIL } = process.env;

const isAskEmailDisabled =
  NODE_CONFIG_APP_EMAIL === undefined ||
  NODE_CONFIG_APP_EMAIL === "NODE_CONFIG_APP_EMAIL";

//configure email
export const configureEmail = async () => {
  let email;
  try {
    if (isAskEmailDisabled) {
      email = NODE_CONFIG_APP_EMAIL;
      return email;
    }
    const { email } = await askFor("email");
    process.env.NODE_CONFIG_APP_EMAIL = email;
    return email;
  } catch (err) {
    console.log(err, "error during user email configuration");
  }
};
