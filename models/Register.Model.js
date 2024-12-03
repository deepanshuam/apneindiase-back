import { Schema, model } from "mongoose";

const registerSchema = new Schema({
  companyName: { type: String, required: true },
  ownerName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  whatsapp: { type: String },
  category: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  gstNumber: { type: String },
  bannerImage: { type: String }, // S3 URL for the banner image
  businessImages: { type: [String] }, // S3 URLs for multiple business images
  productService: { type: String, required: true },
}, { timestamps: true });

const Register = model("Register", registerSchema);

export default Register;
