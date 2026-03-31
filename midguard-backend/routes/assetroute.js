const express = require("express");
const router = express.Router();

const AssetController = require("../controllers/assetcontroller");
const upload = require("../utils/uploads");
const vanguard = require("../vanguard/auth");

// 🔼 Upload file (SAFE VERSION)
router.post(
  "/upload",
  vanguard,
  (req, res, next) => {
    upload.single("file")(req, res, function (err) {
      if (err) {
        console.error("UPLOAD MIDDLEWARE ERROR:", err);

        return res.status(500).json({
          success: false,
          error: err.message || "File upload failed",
        });
      }
      next();
    });
  },
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