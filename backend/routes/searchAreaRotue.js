const express = require("express");
const router = express.Router();
const {
  createSearchArea,
  updateSearchArea,
  getAllSearchAreasByDogHandlerId,
  deleteSearchArea,
} = require("../controller/searchAreaController");

// Create a new search area
router.post("/searchareas", isAuthenticatedUser, createSearchArea);

// Update a search area
router.put("/searchareas/:id", isAuthenticatedUser, updateSearchArea);

// Get all search areas by dog handler ID
router.get(
  "/searchareas/doghandler/:dogHandlerId",
  isAuthenticatedUser,
  getAllSearchAreasByDogHandlerId
);

// Delete a search area
router.delete("/searchareas/:id", isAuthenticatedUser, deleteSearchArea);

module.exports = router;
