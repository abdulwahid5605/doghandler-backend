const SearchArea = require("../models/SearchAreaModel");

// Create a new search area
const createSearchArea = async (req, res) => {
  try {
    const searchArea = new SearchArea(req.body);
    await searchArea.save();
    res.status(201).json(searchArea);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a search area
const updateSearchArea = async (req, res) => {
  try {
    const searchArea = await SearchArea.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!searchArea) {
      return res.status(404).json({ message: "Search area not found" });
    }
    res.json(searchArea);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all search areas by dog handler ID
const getAllSearchAreasByDogHandlerId = async (req, res) => {
  try {
    const searchAreas = await SearchArea.find({
      dogHandler: req.params.dogHandlerId,
    });
    res.json(searchAreas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a search area
const deleteSearchArea = async (req, res) => {
  try {
    const searchArea = await SearchArea.findByIdAndDelete(req.params.id);
    if (!searchArea) {
      return res.status(404).json({ message: "Search area not found" });
    }
    res.json({ message: "Search area deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSearchArea,
  updateSearchArea,
  getAllSearchAreasByDogHandlerId,
  deleteSearchArea,
};
