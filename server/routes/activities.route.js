var express = require("express");

var router = express.Router();

const activitiesService = require("../services/activities.service");

router.get("/", async (req, res) => {
  const result = await activitiesService.findAll(req.query);
  return res.json(result);
});

router.get("/mrt", async (req, res) => {
  const result = await activitiesService.getAllMrtStations();
  return res.json(result);
});

router.get("/:id", async (req, res) => {
  const result = await activitiesService.findOne(req.params.id);
  return res.json(result);
});

module.exports = router;
