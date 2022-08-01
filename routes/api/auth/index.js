const express = require("express");
const guard = require("../../../middlewares/guard");
const { authController } = require("../../../controllers");
const {
  wrapper: wrapperError,
} = require("../../../middlewares/error-handler");
const {
  validateBody,
} = require("../../../middlewares/validation");

const upload = require("../../../middlewares/upload");
const {
  schemaAuthUser,
  schemaEmailUser,
} = require("./authentification_validation_schemes");

const router = express.Router();

router.post(
  "/signup",
  validateBody(schemaAuthUser),
  wrapperError(authController.registration)
);

router.post(
  "/login",
  validateBody(schemaAuthUser),
  wrapperError(authController.login)
);

router.post(
  "/logout",
  guard,
  wrapperError(authController.logout)
);

router.get(
  "/current",
  guard,
  wrapperError(authController.getCurrentUser)
);

router.patch(
  "/",
  guard,
  wrapperError(authController.updateSubscription)
);

router.patch(
  "/avatars",
  guard,
  upload.single("avatar"),
  wrapperError(authController.updateAvatar)
);

router.get(
  "/verify/:verificationToken",
  wrapperError(authController.verifyUser)
);

router.get(
  "/verify",
  validateBody(schemaEmailUser),
  wrapperError(authController.reverifyUser)
);

module.exports = router;
