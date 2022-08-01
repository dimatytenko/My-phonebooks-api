const { Contact } = require("../../models");

async function addContact(body) {
  const result = await Contact.create(body);
  return result;
}

module.exports = addContact;
