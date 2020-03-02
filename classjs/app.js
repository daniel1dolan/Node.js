const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(require("./controllers/index"));
app.use(require("./controllers/aboutUs"));
app.use(require("./controllers/schools"));

app.listen(port, () => {
  console.log("listening on port 3000");
});
