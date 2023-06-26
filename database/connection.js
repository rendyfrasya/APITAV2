const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "lilserv",
  password: "rendyfw666",
  database: "db_ta",
});

db.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connection Succuessfully!");
  }
});

module.exports = db;
