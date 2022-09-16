require("dotenv").config();
const express = require("express");
const app = express();

/*
  this is not as verbose as doing it in 2 lines... but only gets called
  once, and really shouldn't be changed by anyone but us anyway:
*/
require("./config/configureEnv");
configureEnv();
//   .then(({ port, email }) => {
//     // what is this? documentation :D
//     app.get("/env-vars", (req, res) => {
//       res.json({
//         port,
//         email,
//       });
//     });

//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`);
//     });
//   });
