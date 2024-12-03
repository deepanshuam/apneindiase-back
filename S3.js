import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Configure AWS S3
const s3 = new S3Client({
  region: "eu-north-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
// Function to upload a file to S3
const uploadToS3 = async (file) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME, // Your S3 bucket name
    Key: `${Date.now()}_${file.originalname}`, // Unique file name based on timestamp
    Body: file.buffer, // File buffer
      ACL: 'public-read', // Set the file access level
  };

  try {
    // Create a new PutObjectCommand to upload the file
    const command = new PutObjectCommand(params);
    const uploadResult = await s3.send(command); // Use the send() method from SDK v3
    console.log("Upload success:", uploadResult);
    return uploadResult; // Return the result of the upload
  } catch (err) {
    console.error("Error uploading file:", err);
    throw new Error("Failed to upload file to S3");
  }
};
export { uploadToS3, s3 };
