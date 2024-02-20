const DogHandler = require("../models/dogHandlerModel");
const ErrorHander = require("../utils/errorHander");
const catchAsyncErrors = require("../middleware/catchAsyncError");

exports.createDogHandlers = catchAsyncErrors(async (req, res, next) => {
  const { name, phoneNo, email, status } = req.body;

  const dogHandlers = await DogHandler.create({
    name,
    // organization,
    phoneNo,
    email,
    status,
  });

  res.status(201).json({
    success: true,
    dogHandlers,
  });
});

exports.getAllDogHandlers = catchAsyncErrors(async (req, res, next) => {
  const user = req.user;
  var doghandler = [];
  if (user.role === "superadmin") {
    doghandler = await DogHandler.find();
  } else if (user.role === "doghandler") {
    doghandler = await DogHandler.findOne({ email: user.email });
  }

  res.status(201).json({
    success: true,
    doghandler,
  });
});

exports.updateDogHandlers = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const {
    name,
    // organization,
    phoneNo,
    status,
  } = req.body;

  let doghandler = await DogHandler.findById(id);

  if (!doghandler) {
    return res.status(404).json({
      success: false,
      message: "Organization not found",
    });
  }

  doghandler.name = name;
  // organization.organization = organization;
  doghandler.phoneNo = phoneNo;
  doghandler.status = status;

  doghandler = await doghandler.save();

  res.status(200).json({
    success: true,
    doghandler,
  });
});
