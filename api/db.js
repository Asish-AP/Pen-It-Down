import mysql from "mysql";

const db = mysql.createPool({
  host: "eu-cdbr-west-03.cleardb.net",
  user: "b3abc6fb8b22d1",
  password: "42cdff01",
  database: "heroku_e38287ae2c9872d",
});
db.on("error", function (err) {
  console.log(err.code); // 'ER_BAD_DB_ERROR'
});
export default db;
