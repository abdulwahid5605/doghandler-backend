const express = require("express");
const router = express.Router();
const {
  addReport,
  getAllReportsByDogHandlerId,
  updateReport,
  deleteReport,
} = require("../controller/reportController");
const { isAuthenticatedUser } = require("../middleware/auth");

// Add a new report
router.post("/reports", isAuthenticatedUser, addReport);

// Get all reports by dog handler ID
router.get(
  "/reports/doghandler/:dogHandlerId",
  isAuthenticatedUser,
  getAllReportsByDogHandlerId
);

// Update a report
router.put("/reports/:id", isAuthenticatedUser, updateReport);

// Delete a report
router.delete("/reports/:id", isAuthenticatedUser, deleteReport);

module.exports = router;
