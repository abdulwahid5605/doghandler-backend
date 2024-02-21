const mongoose = require("mongoose");
const validator = require("validator");

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [30, "Name cannot exceed more then 30 characters"],
    minLength: [4, "Name should be more then 4 characters"],
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },

  address: {
    type: String,
    required: true,
    maxLength: [100, "Address cannot exceed more then 50 characters"],
    minLength: [4, "Address should be more then 4 characters"],
  },

  postalCode: {
    type: Number,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  // contact: {
  //   type: Number,
  //   required: true,
  // },

  // status: {
  //   type: Boolean,
  //   default: true,
  // },

  // orgLogo: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Organization", organizationSchema);
