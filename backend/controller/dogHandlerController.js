const DogHandler = require("../models/dogHandlerModel");
const Organization = require("../models/organizationModel");
const User = require("../models/userModels");

// Add a new dog handler
const addDogHandler = async (req, res) => {
  try {
    const {
      name,
      organizationId,
      email,
      password,
      phoneNumber,
      address,
      postalCode,
      province,
      city,
      reporter,
    } = req.body;

    const organization = await Organization.findById(organizationId);
    if (!organization) {
      return res.status(404).json({ message: "Organization not found" });
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // If a user with the email already exists, return an error message
      return res.status(400).json({
        success: false,
        message: "User with this email already exists.",
      });
    }
    const dogHandler = new DogHandler({
      name,
      organizationId,
      email,
      password,
      phoneNumber,
      address,
      postalCode,
      province,
      city,
      reporter,
    });
    const user = await User.create({
      name,
      email,
      password,
      role: "doghandler",
    });
    const newDogHandler = await dogHandler.save();
    res.status(201).json(newDogHandler);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a dog handler by ID
const updateDogHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      email,
      phoneNumber,
      address,
      postalCode,
      province,
      city,
      reporter,
    } = req.body;
    const updatedDogHandler = await DogHandler.findByIdAndUpdate(
      id,
      {
        name,
        phoneNumber,
        address,
        postalCode,
        province,
        city,
        reporter,
      },
      { new: true }
    );
    if (!updatedDogHandler) {
      return res.status(404).json({ message: "Dog handler not found" });
    }
    res.json(updatedDogHandler);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a dog handler by ID
const deleteDogHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDogHandler = await DogHandler.findByIdAndDelete(id);
    if (!deletedDogHandler) {
      return res.status(404).json({ message: "Dog handler not found" });
    }
    res.json({ message: "Dog handler deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all dog handlers by organization ID
const getDogHandlersByOrganizationId = async (req, res) => {
  try {
    const { organizationId } = req.params;
    const dogHandlers = await DogHandler.find({ organizationId });
    res.json(dogHandlers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getDogHandlersById = async (req, res) => {
  try {
    const { id } = req.params;
    const dogHandler = await DogHandler.findOne({ email: id });
    res.json(dogHandler);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addDogHandler,
  updateDogHandler,
  deleteDogHandler,
  getDogHandlersByOrganizationId,
  getDogHandlersById,
};
