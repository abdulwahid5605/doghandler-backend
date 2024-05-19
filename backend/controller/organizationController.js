const Organization = require("../models/organizationModel");
const ErrorHander = require("../utils/errorHander");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModels");
const cloudinary = require("cloudinary");
exports.createOrganization = catchAsyncErrors(async (req, res, next) => {
  const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: "resume",
    width: 150,
    crop: "scale",
  });
  const { name, email, password, address, postalCode, province, city } =
    req.body;

  try {
    // Check if a user with the provided email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // If a user with the email already exists, return an error message
      return res.status(400).json({
        success: false,
        message: "User with this email already exists.",
      });
    }

    // Create the organization
    const organization = await Organization.create({
      name,
      email,
      password,
      address,
      postalCode,
      province,
      city,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });

    // Create a new user with the organization role
    const user = await User.create({
      name,
      email,
      password,
      role: "organization",
    });

    // Send a success response
    res.status(201).json({
      success: true,
      organization,
    });
  } catch (error) {
    // Handle any errors
    next(error);
  }
});
exports.getAllOrganization = catchAsyncErrors(async (req, res, next) => {
  const user = req.user;
  var organization = [];
  if (user.role === "superadmin") {
    organization = await Organization.find();
  } else if (user.role === "organization") {
    organization = await Organization.find({ email: user.email });
  }

  res.status(201).json(organization);
});

exports.updateOrganization = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: "resume",
    width: 150,
    crop: "scale",
  });
  const { name, address, contact, status } = req.body;

  let organization = await Organization.findById(id);
  console.log(organization);

  if (!organization) {
    return res.status(404).json({
      success: false,
      message: "Organization not found",
    });
  }

  organization.name = name;
  organization.address = address;
  organization.contact = contact;
  organization.status = status;
  // organization.orgLogo = orgLogo;
  Organization.avatar = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

  organization = await organization.save();

  res.status(200).json({
    success: true,
    organization,
  });
});

exports.deleteOrganization = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrganization = await Organization.findByIdAndDelete(id);
    if (!deletedOrganization) {
      return res.status(404).json({ message: "Organization not found" });
    }
    res.json({ message: "Organization deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
