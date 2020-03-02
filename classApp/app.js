const express = require("express");
const app = express();
let port = 3000;

app.use(require("./routes/index"));
// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

app.use(require("./routes/aboutUs"));
// app.get("/aboutUs", (req, res) => {
//   res.send("About us");
// });

app.use(require("./routes/cars"));
// app.get("/cars/:cars", (req, res) => {
//   let cars = req.param("cars");
//   res.send(`${cars} cars`);
// });

app.use(require("./routes/animals"));
// app.get("/animals", (req, res) => {
//   res.send("Animals");
// });

app.listen(port, () => {
  console.log("Listening on port 3000");
});
