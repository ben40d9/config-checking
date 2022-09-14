require("dotenv").config();

/*
  this is not as verbose as doing it in 2 lines... but only gets called
  once, and really shouldn't be changed by anyone but us anyway:
*/
const { port, email } = require("./config/configureEnv").configureEnv();

const express = require("express");
const app = express();

// what is this? documentation :D
app.get("/env-vars", (req, res) => {
  res.json({
    port,
    email,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
