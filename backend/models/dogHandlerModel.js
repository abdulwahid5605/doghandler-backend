const mongoose = require("mongoose");
const validator = require("validator");

const dogHandlerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [30, "Name cannot exceed more then 30 characters"],
    minLength: [4, "Name should be more then 4 characters"],
  },

  // organization: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "Organization",
  //   required: true,
  // },

  phoneNo: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
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

module.exports = mongoose.model("Doghandler", dogHandlerSchema);
