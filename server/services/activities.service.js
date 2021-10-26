const { Activity } = require("../models/activity.model");

async function findAll(options) {
  const { limit, skip, categoryDescriptions } = options;

  const result = {};

  for (const categoryDescription of categoryDescriptions) {
    let query = Activity.find({ categoryDescription });

    if (limit) {
      query = query.limit(+limit);
    }

    if (skip) {
      query.skip(+skip);
    }

    const data = await query.exec();

    result[categoryDescription] = data;
  }

  return result;
}

async function findOne(id) {
  const activity = await Activity.findById(id);
  return activity;
}

async function getAllMrtStations() {
  const result = {};
  const activities = await Activity.find().exec();

  for (const activity of activities) {
    result[activity.nearestMrtStation] = true;
  }

  return Object.keys(result);
}

module.exports = { findAll, getAllMrtStations, findOne };
