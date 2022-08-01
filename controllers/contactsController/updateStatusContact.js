const { contactsRepository } = require("../../repository");
const { HttpCode } = require("../../libs/constants");

const updateContact = async (req, res, next) => {
  const id = req.params.contactId;
  const { favorite } = req.body;
  const contact =
    await contactsRepository.updateStatusContact(
      id,
      favorite
    );

  if (contact) {
    return res.json({
      status: "success",
      code: HttpCode.OK,
      ResponseBody: { contact },
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

module.exports = updateContact;
