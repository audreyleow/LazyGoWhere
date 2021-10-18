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
    const activities = await Activity.find({
      _id: {
        $in: itinerary.activityIds,
      },
    }).exec();

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
    (itinerary) => itinerary._id.toString() === itineraryId
  );

  await userDoc.save();

  return await getFullActivity(userDoc);
}

module.exports = {
  findItineraries,
  createItinerary,
  updateItinerary,
  removeItinerary,
};
