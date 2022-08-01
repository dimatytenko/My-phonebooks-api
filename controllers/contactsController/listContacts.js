const { contactsRepository } = require("../../repository");
const { HttpCode } = require("../../libs/constants");

const listContacts = async (req, res, next) => {
  const { _id } = req.user;
  const {
    page = 1,
    limit = 10,
    favorite = false,
  } = req.query;
  console.log(favorite);
  const skip = (page - 1) * limit;
  const contacts = await contactsRepository.listContacts(
    {
      owner: _id,
      favorite: favorite,
    },
    skip,
    Number(limit)
  );
  res.json({
    status: "success",
    code: HttpCode.OK,
    ResponseBody: { contacts },
  });
};

module.exports = listContacts;
