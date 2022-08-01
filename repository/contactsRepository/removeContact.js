const { Contact } = require("../../models");

async function removeContact(contactId) {
  const result = await Contact.findOneAndRemove({
    _id: contactId,
  });
  return result;
}

module.exports = removeContact;
