const cloudinary = require("cloudinary");

// ✅ configure using v2 API
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// ✅ export FULL object (not .v2)
module.exports = cloudinary;
