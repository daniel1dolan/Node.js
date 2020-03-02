const express = require("express");
const router = express.Router();

// Emulates a database
let carBlogs = [
  {
    id: 1,
    carName: "Lambogno",
    header: "Lamboghetti",
    body: "Bologne bologne lamborgogne",
    author: "Diego Rivera",
    imageURL:
      "https://i.kym-cdn.com/photos/images/original/001/315/248/c62.jpg",
    publishDate: "Jan. 1, 2020"
  },
  {
    id: 2,
    carName: "Tesla",
    header: "Tesla Lamboghetti",
    body: "Bologne bologne lamborgogne",
    author: "Diego Rivera",
    imageURL:
      "https://cdn.motor1.com/images/mgl/2RX0k/s1/these-are-some-of-the-best-memes-about-the-tesla-cybertruck-official-unveil.jpg",
    publishDate: "Jan. 1, 2020"
  },
  {
    id: 3,
    carName: "Volkswagen",
    header: "Volkswagen Lamboghetti",
    body: "Bologne bologne lamborgogne",
    author: "Diego Rivera",
    imageURL:
      "https://www.meme-arsenal.com/memes/1c02e6a29c89d1882e3a6631aa5f6d71.jpg",
    publishDate: "Jan. 2, 2020"
  }
];

router.get("/cars/:carID", (req, res) => {
  //   res.send("Index page");
  let carID = req.param("carID");
  res.render("cars", {
    carBlogs: carBlogs[carID]
  });
});

module.exports = router;
