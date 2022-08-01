const { contactsRepository } = require("../../repository");
const { HttpCode } = require("../../libs/constants");

const deleteContact = async (req, res, next) => {
  const id = req.params.contactId;
  const contacts = await contactsRepository.removeContact(
    id
  );
  if (contacts) {
    return res.json({
      status: "success",
      code: HttpCode.OK,
      ResponseBody: {
        message: "contact deleted",
      },
    });
  } else {
    return res.status(HttpCode.NOT_FOUND).json({
      status: "error",
      code: HttpCode.NOT_FOUND,
      ResponseBody: {
        message: "Not Found",
      },
    });
  }
};

module.exports = deleteContact;
