const mongoose = require("mongoose");
// validator checks that the email is in correct format or not
const validator = require("validator");

const reportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [30, "Name cannot exceed more then 30 characters"],
    minLength: [4, "Name should be more then 4 characters"],
  },
  searchArea: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SearchArea",
    required: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  geoTag: {
    type: String,
    required: true,
  },
  checkedItems: [
    {
      information: {
        type: String,
        required: true,
      },
      additionalInfo: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
      },
    },
  ],

  dogHandler: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DogHandler",
    required: true,
  },
  isSent: {
    type: Boolean,
    default: false,
  },
  signed: {
    type: String,
  },
  organizationLogo: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Reports", reportSchema);
