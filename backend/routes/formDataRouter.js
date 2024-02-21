const express = require("express");
const router = express.Router();
const formDataController = require("../controller/formDataController");

// Add FormData
router.post("/formData/add", formDataController.addFormData);

// Update FormData by ID
router.put("/formData/update/:id", formDataController.updateFormData);

// Get FormData list by Search Area ID
router.get(
  "/formData/searchArea/:searchAreaId",
  formDataController.getFormDataListBySearchAreaId
);

// Delete FormData by ID
router.delete("/formData/delete/:id", formDataController.deleteFormData);

module.exports = router;
