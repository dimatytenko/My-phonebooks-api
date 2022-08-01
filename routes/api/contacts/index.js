const express = require("express");
const {
  schemaCreateContact,
  schemaUpdateStatusContact,
} = require("./contacts_validation_schemes");
const {
  validateBody,
  validateIdContact,
} = require("../../../middlewares/validation");
const {
  contactsController,
} = require("../../../controllers");
const router = express.Router();
const guard = require("../../../middlewares/guard");
const {
  wrapper,
} = require("../../../middlewares/error-handler");

router.get(
  "/",
  guard,
  wrapper(contactsController.listContacts)
);

router.get(
  "/:contactId",
  guard,
  validateIdContact(),
  wrapper(contactsController.getContactById)
);

router.post(
  "/",
  guard,
  validateBody(schemaCreateContact),
  wrapper(contactsController.addContact)
);

router.delete(
  "/:contactId",
  guard,
  validateIdContact(),
  wrapper(contactsController.deleteContact)
);

router.put(
  "/:contactId",
  guard,
  validateIdContact(),
  validateBody(schemaCreateContact),
  wrapper(contactsController.updateContact)
);

router.patch(
  "/:contactId/favorite",
  guard,
  validateIdContact(),
  validateBody(schemaUpdateStatusContact),
  wrapper(contactsController.updateStatusContact)
);

module.exports = router;
