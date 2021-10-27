const { User } = require("../models/user.model");
const { Activity } = require("../models/activity.model");
const mongoose = require("mongoose");

async function findOrCreateUser(user) {
  return User.findByIdAndUpdate(
    user.uid,
    { _id: user.uid },
    { upsert: true, new: true }
  ).exec();
}

async function getFullActivity(userDoc) {
  let newItineraries = userDoc.itineraries.map(async (itinerary) => {
    let activities = itinerary.activityIds.map(async (id) => {
      const activity = await Activity.findById(id).exec();
      return activity;
    });
    activities = await Promise.all(activities);

    const updatedItinerary = { ...itinerary.toJSON(), activities };
    delete updatedItinerary["activityIds"];
    return updatedItinerary;
  });

  newItineraries = await Promise.all(newItineraries);

  return { ...userDoc.toJSON(), itineraries: newItineraries };
}

async function findItineraries(user) {
  const userDoc = await findOrCreateUser(user);
  return await getFullActivity(userDoc);
}

async function generateActivities(numberOfActivities, categoryDescriptions) {
  const aggregateQuery = [{ $sample: { size: numberOfActivities } }];

  if (!!categoryDescriptions) {
    aggregateQuery.unshift({
      $match: { categoryDescription: { $in: categoryDescriptions } },
    });
  }
  const newActivities = await Activity.aggregate(aggregateQuery).exec();

  return newActivities;
}

async function completeItinerary(user, itineraryId) {
  const userDoc = await findOrCreateUser(user);
  const itinerary = userDoc.itineraries.find(
    (itinerary) => itinerary._id.toString() === itineraryId
  );
  const numberOfActivitiesToGenerate =
    itinerary.numberOfActivities - itinerary.activityIds.length;

  if (numberOfActivitiesToGenerate < 1) {
    return;
  }

  const activities = await generateActivities(numberOfActivitiesToGenerate);

  userDoc.itineraries = userDoc.itineraries.map((itinerary) =>
    itinerary._id.toString() === itineraryId
      ? {
          ...itinerary.toJSON(),
          activityIds: [
            ...itinerary.activityIds,
            ...activities.map((activity) => activity._id),
          ],
        }
      : itinerary
  );

  await userDoc.save();

  return await getFullActivity(userDoc);
}

async function initItinerary(user, data) {
  const { isAutoBuild, name, numberOfActivities, categoryDescriptions } = data;
  console.log(data);
  const activities = isAutoBuild
    ? await generateActivities(numberOfActivities, categoryDescriptions)
    : [];

  return createItinerary(user, {
    name,
    numberOfActivities,
    activityIds: activities.map((activity) => activity._id),
  });
}

async function createItinerary(user, data) {
  const updatedUser = await User.findByIdAndUpdate(
    user.uid,
    { $push: { itineraries: data } },
    { new: true, upsert: true }
  ).exec();

  return await getFullActivity(updatedUser);
}

async function updateItinerary(itineraryId, user, data) {
  const userDoc = await findOrCreateUser(user);
  userDoc.itineraries = userDoc.itineraries.map((itinerary) =>
    itinerary._id.toString() === itineraryId
      ? { ...itinerary.toJSON(), ...data }
      : itinerary
  );

  await userDoc.save();

  return await getFullActivity(userDoc);
}

async function removeItinerary(itineraryId, user) {
  const userDoc = await findOrCreateUser(user);
  userDoc.itineraries = userDoc.itineraries.filter(
    (itinerary) => itinerary._id.toString() !== itineraryId
  );

  await userDoc.save();

  return await getFullActivity(userDoc);
}

module.exports = {
  findItineraries,
  createItinerary,
  updateItinerary,
  removeItinerary,
  initItinerary,
  completeItinerary,
};
