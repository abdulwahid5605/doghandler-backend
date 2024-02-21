const mongoose = require("mongoose");

// Define the schema
const FormDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  searchArea: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SearchArea",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
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
  checklist: {
    type: String,
    required: true,
  },
  checklistItemName: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
  },
});

// Create a model using the schema
const FormData = mongoose.model("ObjectForm", FormDataSchema);

module.exports = FormData;
