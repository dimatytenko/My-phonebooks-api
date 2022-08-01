const { contactsRepository } = require("../../repository");
const { HttpCode } = require("../../libs/constants");

const getContactById = async (req, res, next) => {
  const id = req.params.contactId;
  const contact = await contactsRepository.getContactById(
    id
  );
  if (contact) {
    return res.json({
      status: "success",
      code: HttpCode.OK,
      ResponseBody: { contact },
    });
  } else {
    res.status(HttpCode.NOT_FOUND).json({
      status: "error",
      code: HttpCode.NOT_FOUND,
      ResponseBody: {
        message: `Not found contact id: ${id}`,
        data: "Not Found",
      },
    });
  }
};

module.exports = getContactById;
