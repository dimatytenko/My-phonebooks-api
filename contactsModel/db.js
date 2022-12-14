const fs = require("fs/promises");
const { join } = require("path");

class StorageAdapter {
  constructor(file) {
    this.file = file;
  }
  // eslint-disable-next-line lines-between-class-members
  async read() {
    const result = await fs.readFile(
      join(__dirname, this.file),
      "utf8"
    );
    console.log(__dirname);
    return JSON.parse(result);
  }

  async write(data) {
    await fs.writeFile(
      join(__dirname, this.file),
      JSON.stringify(data, null, 2)
    );
  }
}

module.exports = StorageAdapter;
