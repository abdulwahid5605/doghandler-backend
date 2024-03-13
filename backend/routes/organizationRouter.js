const express = require("express");
const {
  createOrganization,
  getAllOrganization,
  updateOrganization,
  deleteOrganization,
} = require("../controller/organizationController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/organization/add").post(createOrganization);
router
  .route("/organization/getAllOrganizations")
  .get(isAuthenticatedUser, getAllOrganization);

router.route("/organization/updateOrganization/:id").put(updateOrganization);

router.delete("/organization/delete/:id", deleteOrganization);

module.exports = router;
