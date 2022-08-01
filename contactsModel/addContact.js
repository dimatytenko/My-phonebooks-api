const DB = require("./db");
const db = new DB("contacts.json");
const { randomUUID } = require("crypto");

async function addContact(name, email, phone) {
  const contacts = await db.read();
  const newContact = {
    id: randomUUID(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await db.write(contacts);
  return newContact;
}

module.exports = addContact;
