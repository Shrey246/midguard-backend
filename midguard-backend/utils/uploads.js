const multer = require("multer");
const CloudinaryStorage = require("multer-storage-cloudinary"); // ✅ v2 style
const cloudinary = require("./cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  folder: "midguard", // ✅ no "params"
  allowedFormats: ["jpg", "png", "jpeg", "webp"], // ✅ camelCase
});

module.exports = multer({ storage });