var express = require("express");

var router = express.Router();

const activitiesService = require("../services/activities.service");

router.get("/", async (req, res) => {
  const result = await activitiesService.findAll(req.query);
  return res.json(result);
});

module.exports = router;
