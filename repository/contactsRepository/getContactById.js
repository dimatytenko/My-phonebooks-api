const { Contact } = require("../../models");

async function getContactById(contactId) {
  const result = await Contact.findOne({ _id: contactId });

  return result;
}

module.exports = getContactById;
