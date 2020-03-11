const express = require("express");
const router = express.Router();
const body_parser = require("body-parser");

router.use(body_parser.urlencoded({ extended: false }));

router.post("/", (req, res) => {
  console.log(req.body);
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let emailAddress = req.body.emailAddress;
  let phoneNumber = req.body.phoneNumber;
  let zipCode = req.body.zipCode;
  res.render("index", {
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    zipCode,
    allInfo: req.body,
    check: "true"
  });
});

router.get("/", (req, res) => {
  res.render("index", {
    check: "false"
  });
});

module.exports = router;
//first Name
//last Name
//email address
//phone number
// zip code
// <!-- <% if (<%= check%> == "true") { %> <% for (const [key, value] of <%=
//     allInfo%>) { %>
//     <li><%= key%> <%= value%></li>
//     <%} }%> -->
