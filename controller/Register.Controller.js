import Register from "../models/Register.Model.js";
import { ApiError} from "../utiles/apiError.js"; // Adjust the path based on your project structure
import { ApiResponse } from "../utiles/apiResponse.js";
import { asyncHandler } from "../utiles/asynchandler.js";

export const registerCompany = asyncHandler(async (req, res, next) => {
  const {
    companyName,
    ownerName,
    email,
    phone,
    whatsapp,
    category,
    address,
    city,
    state,
    pincode,
    gstNumber,
    productService,
  } = req.body;

  // Check for required fields
  if (!companyName || !ownerName || !email || !phone || !category || !address) {
    throw new ApiError(400, "Missing required fields");
  }

  // Validate uploaded files
  const bannerImage = req.files?.bannerImage?.[0]?.location || null;
  const businessImages = req.files?.businessImages?.map((file) => file.location) || null;

  if (!bannerImage) {
    throw new ApiError(400, "Banner image is required");
  }

  const newCompany = new Register({
    companyName,
    ownerName,
    email,
    phone,
    whatsapp,
    category,
    address,
    city,
    state,
    pincode,
    gstNumber,
    bannerImage,
    businessImages,
    productService,
  });

  const savedCompany = await newCompany.save();
  res
    .status(201)
    .json(new ApiResponse(201, savedCompany, "Company registered successfully"));
});
