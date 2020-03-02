const express = require("express");
const router = express.Router();

router.get("/animals", (req, res) => {
  res.send("this is my animals page");
});

module.exports = router;
