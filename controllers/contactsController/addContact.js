const { contactsRepository } = require("../../repository");
const { HttpCode } = require("../../libs/constants");

const addContact = async (req, res, next) => {
  const { _id } = req.user;
  const body = req.body;
  const contact = await contactsRepository.addContact({
    ...body,
    owner: _id,
  });
  res.status(HttpCode.CREATED).json({
    status: "success",
    code: HttpCode.CREATED,
    ResponseBody: { contact },
  });
};

module.exports = addContact;
