require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` }); //console.log(process.env);

console.log(process.env.USR_USERNAME);
console.log(process.env.USR_PASSWORD);
console.log(process.env.THE_API);

//in the vscode terminal run : NODE_ENV=production node index.js
//or NODE_ENV=development node index.js, to get the data
//corresponding to the node environment set

//
