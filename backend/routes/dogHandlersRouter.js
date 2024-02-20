const express = require("express");

const { isAuthenticatedUser } = require("../middleware/auth");
const {
  createDogHandlers,
  getAllDogHandlers,
  updateDogHandlers,
} = require("../controller/dogHandlerController");

const router = express.Router();

router.route("/dogHandlers/add").post(createDogHandlers);
router
  .route("/doghandler/getAllDogHandlers")
  .get(isAuthenticatedUser, getAllDogHandlers);

router.route("/doghandler/updateDoghandler/:id").put(updateDogHandlers);

module.exports = router;
