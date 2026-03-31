const multer = require("multer");
const cloudinary = require("./cloudinary");

// ✅ FIX: correct import
const storage = new (require("multer-storage-cloudinary").CloudinaryStorage)({
  cloudinary,
  params: {
    folder: "midguard",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({ storage });

module.exports = upload;
