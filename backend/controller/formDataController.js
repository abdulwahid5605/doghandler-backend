const FormData = require("../models/objectFormModel");

// Add FormData
exports.addFormData = async (req, res) => {
  try {
    const formData = await FormData.create(req.body);
    res.status(201).json({
      success: true,
      data: formData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update FormData by ID
exports.updateFormData = async (req, res) => {
  try {
    const formData = await FormData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!formData) {
      return res.status(404).json({
        success: false,
        message: "FormData not found",
      });
    }
    res.status(200).json({
      success: true,
      data: formData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get FormData list by Search Area ID
exports.getFormDataListBySearchAreaId = async (req, res) => {
  try {
    const formDataList = await FormData.find({
      searchArea: req.params.searchAreaId,
    });
    res.status(200).json(formDataList);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete FormData by ID
exports.deleteFormData = async (req, res) => {
  try {
    const formData = await FormData.findByIdAndDelete(req.params.id);
    if (!formData) {
      return res.status(404).json({
        success: false,
        message: "FormData not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "FormData deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
