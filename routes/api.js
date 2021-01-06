const router = require("express").Router();
const Exercise = require("../models/fitness.js");

router.post("/api/fitness", ({ body }, res) => {
  Exercise.create(body)
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/fitness/bulk", ({ body }, res) => {
  Exercise.insertMany(body)
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/fitness", (req, res) => {
  Exercise.find({})
    .sort({ date: -1 })
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
