const DB = require("./db");
const db = new DB("contacts.json");

async function removeContact(contactId) {
  const contacts = await db.read();
  const contactIdx = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (contactIdx !== -1) {
    const [contact] = contacts.splice(contactIdx, 1);
    await db.write(contacts);
    return contact;
  }
  return null;
}

module.exports = removeContact;
