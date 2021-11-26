const express = require("express");
const router = express.Router();
const Springkasteel = require("./models/springkasteel");
router.get("/", (req, res) => {
    console.log("/ route werd opgeroepen");
    res.send(
      "<h1>Welcome to the API, these are the available routes</h1>" +
        "<h2>/springkasteel</h2>"
    );
  });
  module.exports = router;
