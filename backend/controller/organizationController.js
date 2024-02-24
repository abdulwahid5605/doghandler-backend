const Organization = require("../models/organizationModel");
const ErrorHander = require("../utils/errorHander");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModels");

exports.createOrganization = catchAsyncErrors(async (req, res, next) => {
  const { name, email, address, postalCode, province, city } = req.body;

  const organization = await Organization.create({
    name,
    email,
    address,
    postalCode,
    province,
    city,
  });

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    // If the user exists, update their role to "dog handler"
    if (existingUser.role === "user") {
      existingUser.role = "organization";
    }
    await existingUser.save();
  }

  res.status(201).json({
    success: true,
    organization,
  });
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
  const { name, address, contact, status, orgLogo } = req.body;

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
  organization.orgLogo = orgLogo;

  organization = await organization.save();

  res.status(200).json({
    success: true,
    organization,
  });
});
