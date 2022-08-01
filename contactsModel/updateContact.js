const DB = require("./db");
const db = new DB("contacts.json");

const updateContact = async (contactId, body) => {
  const contacts = await db.read();
  const contactIdx = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (contactIdx !== -1) {
    contacts[contactIdx] = {
      ...contacts[contactIdx],
      ...body,
    };
    await db.write(contacts);
    return contacts[contactIdx];
  }
  return null;
};

module.exports = updateContact;
