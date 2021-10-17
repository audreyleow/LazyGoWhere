const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
    block: String,
    streetName: String,
    floorNumber: String,
    unitNumber: String,
    buildingName: String,
    postalCode: String,
  },
  { _id: false }
);

const businessHourSchema = mongoose.Schema(
  {
    daily: Boolean,
    openTime: String,
    closeTime: String,
    sequenceNumber: Number,
    day: String,
    description: String,
  },
  { _id: false }
);

const locationSchema = mongoose.Schema(
  {
    latitude: Number,
    longitude: Number,
  },
  { _id: false }
);

const activitySchema = new mongoose.Schema({
  _id: String,
  address: addressSchema,
  businessHour: [businessHourSchema],
  categoryDescription: String,
  description: String,
  imageIds: [String],
  location: locationSchema,
  name: String,
  nearestMrtStation: String,
  rating: Number,
  tags: [String],
  type: String,
});

module.exports = { Activity: mongoose.model("Activity", activitySchema) };
