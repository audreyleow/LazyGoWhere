const axios = require("axios");
const fs = require("fs");
const mongoose = require("mongoose");
const path = require("path");
const qs = require("qs");
const sharp = require("sharp");

const { Activity } = require("../models/activity.model");

const API_KEY = require("../secrets/tih-api-key.json").apikey;

const dataset =
  "accommodation,attractions,bars_clubs,event,food_beverages,tour,venue";

async function downloadImageByUuid(uuid) {
  try {
    const response = await axios({
      method: "get",
      url: `https://tih-api.stb.gov.sg/media/v1/download/uuid/${uuid}?${qs.stringify(
        { apikey: API_KEY }
      )}`,
      responseType: "stream",
    });

    const location = path.join(__dirname, "images", `${uuid}.jpeg`);
    const stream = fs.createWriteStream(location);
    response.data.pipe(stream);

    stream.on("finish", () => {
      // compress image
      sharp(location)
        .resize({
          width: 1920,
        })
        .toFormat("jpeg", { mozjpeg: true })
        .toBuffer((_, buffer) => {
          if (!!buffer) {
            fs.writeFile(location, buffer, () => {});
          }
        });
    });

    return uuid;
  } catch {
    // failed to download image, skip this image
    return false;
  }
}

async function processEntry(entry) {
  console.log("processing: ", entry.uuid);

  let imageIds = entry.images.map((image) => downloadImageByUuid(image.uuid));
  imageIds = await Promise.all(imageIds);

  // filter out files that failed to download
  imageIds = imageIds.filter((id) => id !== false);

  const newActivity = new Activity({
    _id: entry.uuid,
    address: entry.address,
    businessHour: entry.businessHour,
    categoryDescription: entry.categoryDescription,
    description: entry.description,
    imageIds,
    location: entry.location,
    name: entry.name,
    nearestMrtStation: entry.nearestMrtStation,
    rating: entry.rating,
    tags: entry.tags,
    type: entry.type,
  });

  try {
    await newActivity.save();
  } catch (e) {
    if (e.code !== 11000) {
      // ignore duplicate id errors that arise from re-runs of the script
      throw new Error(e);
    }
  }
}

(async () => {
  await mongoose.connect(
    `mongodb+srv://${mongodbCredentials.username}:${mongodbCredentials.password}@cluster0.hwyf0.mongodb.net/test?retryWrites=true&w=majority`
  );

  let nextToken = undefined;

  do {
    console.log("next token: ", nextToken);
    const response = await axios.get(
      `https://tih-api.stb.gov.sg/content/v1/search/all?${qs.stringify({
        apikey: API_KEY,
        dataset,
        ...(!!nextToken ? { nextToken } : {}),
      })}`
    );
    const data = response.data.data.results;

    for (const activity of data) {
      await processEntry(activity);
    }

    nextToken = response.data?.nextToken ?? undefined;

    if (nextToken) {
      // backup next token
      fs.writeFileSync("next-token.txt", nextToken);
    }
  } while (nextToken);
})();
