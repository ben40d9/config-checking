require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` }); //console.log(process.env);

console.log(process.env.USR_USERNAME);
console.log(process.env.USR_PASSWORD);
console.log(process.env.THE_API);
