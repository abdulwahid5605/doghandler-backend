const Organization = require("../models/organizationModel");
const ErrorHander = require("../utils/errorHander");
const catchAsyncErrors = require("../middleware/catchAsyncError");

exports.createOrganization = catchAsyncErrors(async (req, res, next) => {
  const { name, email, address, contact, status, orgLogo } = req.body;

  const organization = await Organization.create({
    name,
    email,
    address,
    contact,
    status,
    orgLogo,
  });

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
    organization = await Organization.findOne({ email: user.email });
  }

  res.status(201).json({
    success: true,
    organization,
  });
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
