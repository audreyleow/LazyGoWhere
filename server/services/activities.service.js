const { Activity } = require("../models/activity.model");

async function findAll(options) {
  const { limit, skip, categoryDescriptions } = options;

  const findOptions = {};

  if (categoryDescriptions) {
    findOptions.categoryDescription = { $in: categoryDescriptions };
  }

  let query = Activity.find(findOptions);

  if (limit) {
    query = query.limit(+limit);
  }

  if (skip) {
    query = query.skip(+skip);
  }

  const data = await query.exec();

  return data;
}

module.exports = { findAll };
