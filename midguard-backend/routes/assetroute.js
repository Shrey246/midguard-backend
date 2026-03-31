const express = require("express");
const router = express.Router();

const AssetController = require("../controllers/assetcontroller");
const upload = require("../utils/uploads"); // multer + cloudinary
const vanguard = require("../vanguard/auth"); // your auth middleware

// 🔼 Upload file
router.post(
  "/upload",
  vanguard,
  upload.single("file"), // ⚠️ field name must match frontend
  AssetController.upload
);

// 📦 Get assets by context
router.get(
  "/",
  vanguard,
  AssetController.getByContext
);

// 🔻 Deactivate asset
router.patch(
  "/:assetUid/deactivate",
  vanguard,
  AssetController.deactivate
);

module.exports = router;
