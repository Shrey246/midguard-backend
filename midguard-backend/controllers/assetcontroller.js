const AssetService = require('../services/assetservice');

class AssetController {

  // 🔼 Upload Asset
  static async upload(req, res) {
    try {
      const uploaderPublicId = req.user.publicId;

      // 🚨 Safety check
      if (!req.file) {
        return res.status(400).json({
          success: false,
          error: "No file uploaded"
        });
      }

      const asset = await AssetService.createAsset({
        uploaderPublicId,
        contextType: req.body.context_type,
        contextId: req.body.context_id,
        purpose: req.body.purpose,

        // ✅ Cloudinary URL
        fileUrl: req.file.path,

        fileType: req.file.mimetype,
        fileSize: req.file.size,
        isPrimary: req.body.is_primary || false,
      });

      return res.status(201).json({
        success: true,
        asset
      });

    } catch (err) {
      console.error("ASSET UPLOAD ERROR:", err);
      return res.status(400).json({
        success: false,
        error: err.message
      });
    }
  }

  // 🔻 Deactivate Asset
  static async deactivate(req, res) {
    try {
      const asset = await AssetService.deactivateAsset(req.params.assetUid);

      return res.json({
        success: true,
        asset
      });

    } catch (err) {
      return res.status(400).json({
        success: false,
        error: err.message
      });
    }
  }

  // 📦 Get Assets by Context
  static async getByContext(req, res) {
    try {
      const userPublicId = req.user?.publicId || null;
      const { context_type, context_id } = req.query;

      const assets = await AssetService.getAssetsForContext(
        userPublicId,
        context_type,
        context_id
      );

      return res.json({
        success: true,
        assets
      });

    } catch (err) {
      return res.status(403).json({
        success: false,
        error: err.message
      });
    }
  }
}

module.exports = AssetController;
