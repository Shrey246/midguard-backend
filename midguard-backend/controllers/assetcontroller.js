const AssetService = require("../services/assetservice");

class AssetController {

  // 🔼 Upload Asset
  static async upload(req, res) {
    try {
      const uploaderPublicId = req.user.publicId;

      // 🚨 File check
      if (!req.file) {
        return res.status(400).json({
          success: false,
          error: "No file uploaded",
        });
      }

      // 🚨 Required fields check
      const { context_type, context_id, purpose } = req.body;

      if (!context_type || !context_id) {
        return res.status(400).json({
          success: false,
          error: "context_type and context_id are required",
        });
      }

      // 🔍 DEBUG (remove later if needed)
      console.log("UPLOAD FILE:", req.file);

      // ✅ Cloudinary v2 uses "path"
      const fileUrl = req.file.secure_url || req.file.url || req.file.path;;

      if (!fileUrl) {
        return res.status(500).json({
          success: false,
          error: "File upload failed (no URL returned)",
        });
      }

      const asset = await AssetService.createAsset({
        uploaderPublicId,
        contextType: context_type,
        contextId: context_id,
        purpose: purpose || null,

        fileUrl,

        fileType: req.file.mimetype,
        fileSize: req.file.bytes,

        // ⚠️ Convert string → boolean properly
        isPrimary: req.body.is_primary === "true" || req.body.is_primary === true,
      });

      return res.status(201).json({
        success: true,
        asset,
      });

    } catch (err) {
      console.error("ASSET UPLOAD ERROR:", err);

      return res.status(500).json({
        success: false,
        error: err.message || "Internal server error",
      });
    }
  }

  // 🔻 Deactivate Asset
  static async deactivate(req, res) {
    try {
      const { assetUid } = req.params;

      if (!assetUid) {
        return res.status(400).json({
          success: false,
          error: "assetUid is required",
        });
      }

      const asset = await AssetService.deactivateAsset(assetUid);

      return res.json({
        success: true,
        asset,
      });

    } catch (err) {
      console.error("DEACTIVATE ERROR:", err);

      return res.status(400).json({
        success: false,
        error: err.message,
      });
    }
  }

  // 📦 Get Assets by Context
  static async getByContext(req, res) {
    try {
      const userPublicId = req.user?.publicId || null;
      const { context_type, context_id } = req.query;

      if (!context_type || !context_id) {
        return res.status(400).json({
          success: false,
          error: "context_type and context_id are required",
        });
      }

      const assets = await AssetService.getAssetsForContext(
        userPublicId,
        context_type,
        context_id
      );

      return res.json({
        success: true,
        assets,
      });

    } catch (err) {
      console.error("GET ASSETS ERROR:", err);

      return res.status(403).json({
        success: false,
        error: err.message,
      });
    }
  }
}

module.exports = AssetController;