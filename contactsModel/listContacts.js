const DB = require("./db");
const db = new DB("contacts.json");

async function listContacts() {
  console.log(__dirname);

  return await db.read();
}

module.exports = listContacts;
