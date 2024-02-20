const express = require("express");
const {
  createOrganization,
  getAllOrganization,
  updateOrganization,
} = require("../controller/organizationController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/organization/add").post(createOrganization);
router
  .route("/organization/getAllOrganizations")
  .get(isAuthenticatedUser, getAllOrganization);

router.route("/organization/updateOrganization/:id").put(updateOrganization);

module.exports = router;
