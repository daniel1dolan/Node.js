const express = require("express");
const router = express.Router();

router.get("/schools", (req, res) => {
  //   res.send("Index page");
  res.render("schools");
});

module.exports = router;
