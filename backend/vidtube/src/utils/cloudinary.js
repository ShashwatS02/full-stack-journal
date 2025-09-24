import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

// ✅ Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Upload to Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.error("Local file path is missing.");
      return null;
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("✅ File uploaded to Cloudinary:", response.secure_url);

    // Delete local file after successful upload
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return response; // contains secure_url, public_id etc.
  } catch (error) {
    console.error("❌ Error uploading to Cloudinary:", error.message || error);

    // Cleanup local file if it still exists after failed upload
    if (fs.existsSync(localFilePath)) {
      try {
        fs.unlinkSync(localFilePath);
      } catch (unlinkError) {
        console.error("Failed to delete local file:", unlinkError);
      }
    }

    return null; // Return null on failure
  }
};

// ✅ Delete from Cloudinary
const deleteFromCloudinary = async (publicId) => {
  try {
    if (!publicId) return null;

    const result = await cloudinary.uploader.destroy(publicId);
    console.log("🗑️ Deleted from Cloudinary:", publicId);

    return result;
  } catch (error) {
    console.error("❌ Error deleting from Cloudinary:", error.message || error);
    return null;
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
