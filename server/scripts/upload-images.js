const { initializeApp, cert } = require("firebase-admin/app");
const { getStorage } = require("firebase-admin/storage");
const fs = require("fs");
const path = require("path");

const serviceAccount = require("../secrets/firebase-keys.json");

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: "lazy-go-where-dev.appspot.com",
});

const bucket = getStorage().bucket();

async function main(directoryPath) {
  const filePaths = fs
    .readdirSync(directoryPath)
    .map((fileName) => path.join(directoryPath, fileName));

  for (const filePath of filePaths) {
    const splitPath = filePath.split("/");
    const destination = splitPath[splitPath.length - 1];
    console.log("uploading: ", filePath);
    await bucket.upload(filePath, { destination });
  }

  console.log("done");
}

main(path.join(__dirname, "images"));
