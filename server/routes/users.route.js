const express = require("express");
const router = express.Router();

const { isAuthorized } = require("../middlewares/auth.middleware");
const usersService = require("../services/users.service");

router.get("/itineraries", isAuthorized, async function (req, res) {
  const itineraries = await usersService.findItineraries(req.user);
  return res.json(itineraries);
});

router.post("/itineraries/init", isAuthorized, async function (req, res) {
  const itineraries = await usersService.initItinerary(req.user, req.body);
  return res.json(itineraries);
});

router.post("/itineraries", isAuthorized, async function (req, res) {
  const itineraries = await usersService.createItinerary(req.user, req.body);
  return res.json(itineraries);
});

router.patch("/itineraries/complete/:id", isAuthorized, async function (req, res) {
  const itineraries = await usersService.completeItinerary(req.user, req.params.id);
  return res.json(itineraries);
});

router.put("/itineraries/:id", isAuthorized, async function (req, res) {
  const itineraries = await usersService.updateItinerary(
    req.params.id,
    req.user,
    req.body
  );
  return res.json(itineraries);
});

router.delete("/itineraries/:id", isAuthorized, async function (req, res) {
  const itineraries = await usersService.removeItinerary(
    req.params.id,
    req.user
  );
  return res.json(itineraries);
});

module.exports = router;
