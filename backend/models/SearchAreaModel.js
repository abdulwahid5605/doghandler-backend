const mongoose = require("mongoose");
// validator checks that the email is in correct format or not
const validator = require("validator");

const crypto = require("crypto");

const searchAreaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [30, "Name cannot exceed more then 30 characters"],
    minLength: [4, "Name should be more then 4 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  phone: {
    type: String,
    required: true,
  },
  recipient: {
    name: {
      type: String,
      required: true,
      maxLength: [30, "Name cannot exceed more then 30 characters"],
      minLength: [4, "Name should be more then 4 characters"],
    },
    email: {
      type: String,
      required: true,
      // unique must be true otherwise same emails would be registered!!!
      validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    phone: {
      type: String,
      required: true,
      maxLength: [30, "Name cannot exceed more then 30 characters"],
      minLength: [4, "Name should be more then 4 characters"],
    },
  },
  instructions: {
    type: String,
    required: true,
    maxLength: [200, "Name cannot exceed more then 200 characters"],
    minLength: [4, "Name should be more then 4 characters"],
  },
  dogHandler: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DogHandler",
    required: true,
    maxLength: [200, "Name cannot exceed more then 200 characters"],
    minLength: [4, "Name should be more then 4 characters"],
  },
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SearchArea", searchAreaSchema);
