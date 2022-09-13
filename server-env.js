//this is a mock of if we had set serverport and serverhost
//in the .env file

const http = require("http");

require("dotenv").config();

let serverport = process.env.PORT;
let serverhost = process.env.HOST;

let serverServer = createServer((req, res) => {
  console.log("The request has been made");
  res.writeHead(200, { "content-Type": "text/plain" });
  res.end("nice");
});

serverServer.listen(serverport, serverhost, () => {
  console.log(`Server is listening to ${serverhost} on port ${serverport}`);
});
