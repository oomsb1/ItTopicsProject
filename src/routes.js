const express = require("express");
const router = express.Router();
const Springkasteel = require("./models/springkasteel");
router.get("/", (req, res) => {
    console.log("/ route werd opgeroepen");
    res.send(
      "<h1>Welcome to the API, these are the available routes</h1>" +
        "<h2>/Springkasteel</h2>"
    );
  });
  //Alle springkastelen vragen
router.get("/springkasteel", async (req, res) => {
    console.log("/Springkasteel route called");
    try {
      res.json(await Springkasteel.find());
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });
  //Springkasteel vragen met ID
router.get("/springkasteel/:id", async (req, res) => {
    console.log("/Springkasteel/:id route called");
    try {
      res.json(await Springkasteel.findById(req.params.id));
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });
  
  //Springkasteel aanmaken
  router.post("/Springkasteel/", async (req, res) => {
    console.log("/Springkasteel/create route called");
    try {
      res.json(await Springkasteel.create(req.body));
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });
  //Springkasteel updaten
  router.put("/springkasteel/:id", async (req, res) => {
    console.log("/Springkasteel/update route called");
    try {
      res.json(await Springkasteel.findByIdAndUpdate(req.params.id, { $set: req.body }));
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });
  //Springkasteel verwijderen
  router.delete("/springkasteel/:id", async (req, res) => {
      console.log("/Springkasteel/delete route called");
      try {
        res.json(await Springkasteel.findByIdAndDelete(req.params.id, { $set: req.body }));
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    });
  module.exports = router;
