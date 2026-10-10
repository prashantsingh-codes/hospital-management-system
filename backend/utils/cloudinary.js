import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Uploads a local file to Cloudinary and cleans up the local file afterwards.
//Ensures the local file is deleted even if the upload fails.
export const uploadToCloudinary = async (filePath, folder = "Doctor") => {
  try {
    if (!filePath) return null;
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: "image",
    });

    console.log("File uploaded successfully to Cloudinary");
    return result;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error; // Rethrow to allow controller/middleware to handle client response
  } finally {
    // Ensure local file cleanup always runs to prevent storage leaks
    if (filePath) {
      try {
        await fs.unlink(filePath);
      } catch (cleanupError) {
        console.error("Failed to delete local temporary file:", cleanupError);
      }
    }
  }
};

//Delete an image from Cloudinary using its public ID.

export const deleteFromCloudinary = async (publicId) => {
  try {
    if (!publicId) return;
    await cloudinary.uploader.destroy(publicId);
    console.log("File deleted successfully from Cloudinary");
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    throw error;
  }
};
