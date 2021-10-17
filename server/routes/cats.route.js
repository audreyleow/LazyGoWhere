var express = require("express");
const { isAuthorized } = require("../middlewares/auth.middleware");
var router = express.Router();

const catsService = require("../services/cats.service");

router.get("/", function (req, res, next) {
  res.json(catsService.findAll());
});

router.get("/protected", isAuthorized, function (req, res, next) {
  console.log(req.user);
  res.json(catsService.findAll());
});

router.get("/:id", function (req, res, next) {
  const cat = catsService.find(req.params.id);

  if (!cat) {
    res.send("Cat not found", 404);
  } else {
    res.json({ name: cat });
  }
});

/*
router.post("/login", (req, res) => {
  // Test for token during login
  if (!req.header("x-auth-token")) {
    return res.status(4 00).send("No Token");
  }

  // Mock testing
  if (req.header("x-auth-token") !== "123456") {
    return res.status(401).send("Not authorized");
  }

  res.send("Logged in");
});
*/

module.exports = router;
