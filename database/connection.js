const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "lilserv",
  password: "rendyfw666",
  database: "mqtt_API",
});

db.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connection Succuessfully!");
  }
});

module.exports = db;
