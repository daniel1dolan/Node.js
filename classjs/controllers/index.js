const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("Index page");
  let fruits = ["oranges", "apples", "pears", "mango", "tomatoes", "bananas"];
  res.render("index", {
    pageTitle: "Vegan Recipes",
    description: "How to make delicious vegan recipes.",
    fruitList: fruits
  });
});

module.exports = router;
