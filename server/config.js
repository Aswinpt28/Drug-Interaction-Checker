const crypto = require("crypto");

const generateRandomString = (length) => {
  return crypto.randomBytes(length).toString("hex");
};

module.exports = {
  adminSecretKey: generateRandomString(32),
  userSecretKey: generateRandomString(32),
};
