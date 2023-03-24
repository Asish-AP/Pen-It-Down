import mysql from "mysql";

export const db = mysql.createConnection({
  host: "eu-cdbr-west-03.cleardb.net",
  user: "b3abc6fb8b22d1",
  password: "42cdff01",
  database: "heroku_e38287ae2c9872d",
});
