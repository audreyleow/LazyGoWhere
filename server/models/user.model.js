const mongoose = require("mongoose");

const itinerarySchema = mongoose.Schema({
  name: { type: String, required: true },
  numberOfActivities: { type: Number, required: true },
  activityIds: [String],
});

const userSchema = new mongoose.Schema(
  {
    _id: String,
    itineraries: { type: [itinerarySchema], default: [] },
  },
  { timestamps: true }
);

module.exports = { User: mongoose.model("User", userSchema) };
