const { Asset } = require("../models");

exports.upload = async (req, res) => {
  try {
    // 🔴 Check file exists
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // ✅ Cloudinary URL (THIS is the key)
    const fileUrl = req.file.path;

    // 🧠 optional metadata
    const { contextType, contextId } = req.body;

    // ✅ Save into DB
    const asset = await Asset.create({
      url: fileUrl,                 // 🔥 THIS FIXES YOUR ISSUE
      type: req.file.mimetype,      // optional but useful
      context_type: contextType || null,
      context_id: contextId || null,
      uploaded_by: req.user.publicId, // based on your auth system
      is_active: true,
    });

    return res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      asset,
    });

  } catch (error) {
    console.error("ASSET UPLOAD ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Upload failed",
    });
  }
};
