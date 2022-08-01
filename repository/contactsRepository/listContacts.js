const { Contact } = require("../../models");

async function listContacts(obj, skip, limit) {
  const result = await Contact.find(obj, "", {
    skip,
    limit,
  });
  return result;
}

module.exports = listContacts;
