const admin = require("firebase-admin");

const isAuthorized = async (req, res, next) => {
  try {
    const token = req.headers.token;
    const user = await admin.auth().verifyIdToken(token);
    req.user = user;

    return next();
  } catch {
    return res.status(401).send("Unauthorized");
  }
};

module.exports = { isAuthorized };
