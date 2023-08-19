const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
//import library CORS
const cors = require("cors");

//use cors
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("API Ready To GO!");
});

const mainRoute = require("./routes/route");
app.use("/api/main", mainRoute);

app.listen(port, () => {
  console.log(`app running at http:/localhost:${port}`);
});
