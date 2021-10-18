const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const usersRouter = require("./routes/users.route");
const catsRouter = require("./routes/cats.route");
const activitiesRouter = require("./routes/activities.route");

const admin = require("firebase-admin");

const serviceAccount = require("./secrets/firebase-keys.json");
const mongodbCredentials = require("./secrets/mongodb.json");

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

mongoose
  .connect(
    `mongodb+srv://${mongodbCredentials.username}:${mongodbCredentials.password}@cluster0.hwyf0.mongodb.net/test?retryWrites=true&w=majority`
  )
  .then(() => {
    app.use(logger("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

    app.use("/users", usersRouter);
    app.use("/cats", catsRouter);
    app.use("/activities", activitiesRouter);
  });

module.exports = app;
