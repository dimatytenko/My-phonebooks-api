const { Contact } = require("../../models");

const updateStatusContact = async (contactId, status) => {
  const result = await Contact.findOneAndUpdate(
    contactId,
    { favorite: status },
    { new: true }
  );
  console.log(result);

  return result;
};

module.exports = updateStatusContact;
