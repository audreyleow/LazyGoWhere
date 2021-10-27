const express = require("express");
require("express-async-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const usersRouter = require("./routes/users.route");
const catsRouter = require("./routes/cats.route");
const activitiesRouter = require("./routes/activities.route");

const admin = require("firebase-admin");

const app = express();

function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500);
  res.json({ message: "Internal server error" });
}

admin.initializeApp({
  credential: admin.credential.cert({
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: process.env.private_key.replace(/\\n/g, "\n"),
    client_email: process.env.client_email,
    client_id: process.env.client_id,
  }),
});

mongoose
  .connect(
    `mongodb+srv://${process.env.mongo_username}:${process.env.mongo_password}@cluster0.hwyf0.mongodb.net/test?retryWrites=true&w=majority`
  )
  .then(() => {
    app.use(logger("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

    app.use("/users", usersRouter);
    app.use("/cats", catsRouter);
    app.use("/activities", activitiesRouter);

    app.use(express.static(path.join(__dirname, "build")));
    app.use((req, res, next) => {
      res.sendFile(path.join(__dirname, "build", "index.html"));
    });

    app.use(errorHandler);
  });

module.exports = app;
