import multer from 'multer';
import multerS3 from 'multer-s3';
import {s3} from '../S3.js'; // AWS S3 configuration using SDK v2

// Define S3 storage configuration for multer
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: 'public-read', // Set file access level
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const fileName = `${Date.now()}_${file.originalname}`; // Use timestamp for unique filenames
      cb(null, fileName);
    },
  }),
}).fields([ // Define file fields for multer
  { name: 'bannerImage', maxCount: 1 },  // Single banner image
  { name: 'businessImages', maxCount: 5 }, // Multiple business images
]);

export default upload;
