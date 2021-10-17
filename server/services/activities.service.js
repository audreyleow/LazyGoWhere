const { Activity } = require("../models/activity.model");

async function findAll(options) {
  const { limit, categoryDescriptions } = options;

  const result = {};

  for (const categoryDescription of categoryDescriptions) {
    let query = Activity.find({ categoryDescription });

    if (limit) {
      query = query.limit(+limit);
    }

    const data = await query.exec();

    result[categoryDescription] = data;
  }

  return result;
}

async function getAllMrtStations() {
  const result = {};
  const activities = await Activity.find().exec();

  for (const activity of activities) {
    result[activity.nearestMrtStation] = true;
  }

  return Object.keys(result);
}

module.exports = { findAll, getAllMrtStations };
