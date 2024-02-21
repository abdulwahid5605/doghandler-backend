const mongoose = require("mongoose");

const dogHandlerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [50, "Name cannot exceed more than 50 characters"],
    minLength: [2, "Name should be at least 2 characters long"],
  },
  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Email format validation
      },
      message: "Invalid email format",
    },
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    maxLength: [200, "Address cannot exceed more than 200 characters"],
  },
  postalCode: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
    maxLength: [50, "Province cannot exceed more than 50 characters"],
  },
  city: {
    type: String,
    required: true,
    maxLength: [50, "City cannot exceed more than 50 characters"],
  },
  reporter: {
    name: {
      type: String,
      required: true,
      maxLength: [50, "Reporter name cannot exceed more than 50 characters"],
      minLength: [2, "Reporter name should be at least 2 characters long"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value) => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Email format validation
        },
        message: "Invalid email format",
      },
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
});

const DogHandler = mongoose.model("DogHandler", dogHandlerSchema);

module.exports = DogHandler;
