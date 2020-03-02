const express = require("express");
const router = express.Router();

router.get("/cars(/:cars)?", (req, res) => {
  let cars = req.param("cars");
  res.send(`${cars} cars`);
});

module.exports = router;
